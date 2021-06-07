import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Question } from 'src/app/shared/models/question.model';
import * as fromApp from '../../../store/app.reducer';
import * as TriviaActions from '../store/trivia.actions';
import * as Constants from '../../../shared/consts/consts'
import { Answer } from 'src/app/shared/models/answer.model';


@Component({
  selector: 'app-trivia-question',
  templateUrl: './trivia-question.component.html',
  styleUrls: ['./trivia-question.component.scss']
})
export class TriviaQuestionComponent implements OnInit {
  @Input('index') index: number;
  @Output('nextQuestion') nextQuestionEmitter: EventEmitter<boolean> = new EventEmitter();
  question: Question;
  timeLeft: number;
  answerSelected: boolean = false;
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('trivia')
      .subscribe((triviaState) => {
        this.question = triviaState.questions[this.index];
        this.timeLeft = triviaState.timeLeft;
        this.answerSelected = triviaState.clockRunnung;
      })
  }

  nextQuestion(answer: Answer) {
    if (this.answerSelected) {
      this.store.dispatch(new TriviaActions.PauseClock())
      setTimeout(() => {
        this.store.dispatch(new TriviaActions.SubmitAnswer(answer.isCorrect))
        this.store.dispatch(new TriviaActions.SetTimeLeft(Constants.TIME_FOR_QUESTION + 1))
        this.nextQuestionEmitter.emit(true);
        this.store.dispatch(new TriviaActions.NextQuestion())
        this.store.dispatch(new TriviaActions.ResumeClock())
      }, 1000)
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
