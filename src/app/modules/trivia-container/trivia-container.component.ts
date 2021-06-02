import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Question } from 'src/app/shared/models/question.model';
import * as fromApp from '../../store/app.reducer';
import * as TriviaActions from './store/trivia.actions';
//import Swipe from 'swipejs';

@Component({
  selector: 'app-trivia-container',
  templateUrl: './trivia-container.component.html',
  styleUrls: ['./trivia-container.component.scss']
})
export class TriviaContainerComponent implements OnInit, AfterViewInit {
  questions: Question[] = [];
  //slider: Swipe;
  loading: boolean = true;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    // this.store.dispatch(new TriviaActions.FetchQuestionsStart());
    // this.store.dispatch(new TriviaActions.FetchQuestion);

    // this.store.select('trivia').subscribe((triviaState) => {
    //   this.questions = triviaState.questions;
    //   this.loading = triviaState.loading;
    //   console.log(this.questions);
    //   console.log(this.loading);

    // })
  }

  ngAfterViewInit() {
    // const element = document.getElementById('slider');
    // this.slider = new Swipe(element, {
    //   startSlide: 0,
    //   //auto: 3000,
    //   speed: 800,
    //   draggable: false,
    //   autoRestart: false,
    //   continuous: false,
    //   disableScroll: true,
    //   stopPropagation: true,
    //   callback: function (index, element) { },
    //   transitionEnd: function (index, element) { }
    // });

    // console.log(element);

  }

  vvv() {
    //(window as any).slider.next();
    //this.slider.next();
  }
}
