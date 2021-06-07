import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Answer } from 'src/app/shared/models/answer.model';
import * as fromApp from '../../../../store/app.reducer';

@Component({
  selector: 'app-trivia-answer',
  templateUrl: './trivia-answer.component.html',
  styleUrls: ['./trivia-answer.component.scss']
})
export class TriviaAnswerComponent implements OnInit, OnDestroy {
  @Input('answer') answer: Answer;
  @HostListener('click') onclick() {
    this.checkIfCorrect();
  }
  borderColor: string;
  subscription: Subscription;
  answerSelected: boolean = false;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.subscription = this.store
      .select('trivia')
      .subscribe((triviaState) => {
        this.answerSelected = triviaState.clockRunnung;
      })
  }

  checkIfCorrect() {
    if (this.answerSelected) {
      if (this.answer.isCorrect) {
        this.borderColor = '1.5px solid #1565C0';
      } else {
        this.borderColor = '1.5px solid red'
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
