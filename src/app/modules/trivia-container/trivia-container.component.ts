import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import Swipe from 'swipejs';
import { Question } from 'src/app/shared/models/question.model';
import * as fromApp from '../../store/app.reducer';
import * as TriviaActions from './store/trivia.actions';
import * as Constants from './../../shared/consts/consts'
import { GameMessages } from '../../shared/enums/game-messages.enum'

@Component({
  selector: 'app-trivia-container',
  templateUrl: './trivia-container.component.html',
  styleUrls: ['./trivia-container.component.scss']
})
export class TriviaContainerComponent implements OnInit {
  questions: Question[] = [];
  slider: Swipe;
  timer;
  timeLeft: number;
  loading: boolean = true;
  clockRunnig: boolean;
  subscription: Subscription;
  firstInit: boolean = true;
  message: string;
  attempts: number;
  gameOver: boolean = false;
  currentQuestionIdx: number;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new TriviaActions.FetchQuestionsStart());
    this.store.dispatch(new TriviaActions.FetchQuestion);

    this.subscription = this.store
      .select('trivia').subscribe((triviaState) => {
        this.questions = triviaState.questions;
        this.loading = triviaState.loading;
        this.timeLeft = triviaState.timeLeft;
        this.message = triviaState.message;
        this.clockRunnig = triviaState.clockRunnung;
        this.attempts = triviaState.attempts;
        this.currentQuestionIdx = triviaState.currentQuestionIdx;

        if (!this.loading && this.firstInit) {
          setTimeout(() => {
            this.initSlider();
            this.initClock();
          }, 200)
          this.firstInit = false
        }

        if (!triviaState.attempts && !this.gameOver) {
          this.gameFinish();
          this.store.dispatch(new TriviaActions.DisplayMessage(GameMessages.LOSE_GAME))
        }

        if (this.currentQuestionIdx === Constants.NUMBER_OF_QUESTIONS && !this.gameOver) {
          this.gameFinish();
          this.store.dispatch(new TriviaActions.DisplayMessage(GameMessages.WIN_GAME +
            ` Your Score is ${Constants.NUMBER_OF_QUESTIONS - (Constants.ATTEMPTS - this.attempts)}/${Constants.NUMBER_OF_QUESTIONS}`))
        }
      })
  }

  initSlider() {
    const element = document.getElementById('slider');
    this.slider = new Swipe(element, {
      startSlide: 0,
      speed: 800,
      draggable: false,
      autoRestart: false,
      continuous: false,
      disableScroll: true,
      stopPropagation: true,
    });
  }

  initClock() {
    this.timer = setInterval(() => {
      if (this.clockRunnig && !this.gameOver) {
        if (this.timeLeft === 1) {
          this.store.dispatch(new TriviaActions.DisplayMessage(GameMessages.TIME_UP))
          clearInterval(this.timer)
        }
        this.store.dispatch(new TriviaActions.SetTimeLeft(--this.timeLeft));
      }
    }, 1000)
  }

  nextQuestion($event) {
    this.slider.next();
  }

  gameFinish() {
    this.gameOver = true;
    clearInterval(this.timer);
  }

  onRestart() {
    window.location.reload();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
