import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as TriviaActions from './trivia.actions';
import * as fromApp from '../../../store/app.reducer';

const NUMBER_OF_QUESTIONS = 10;

@Injectable()
export class TriviaEffects {
  @Effect()
  fetchQuestion = this.actions$.pipe(
    ofType(TriviaActions.FETCH_QUESTION),
    switchMap(() =>
      this.http.get('https://opentdb.com/api.php?amount=1&encode=base64&type=multiple')
    ),
    map(question => {
      const filterQuestion = question['results'][0];
      return {
        question: atob(filterQuestion['question']),
        correctAnswer: atob(filterQuestion['correct_answer']),
        incorrectAnswers: filterQuestion['incorrect_answers'].map(el => atob(el))
      }
    }),
    withLatestFrom(this.store.select('trivia')),
    switchMap(([question, storeState]) => {
      if (storeState.questions.length < NUMBER_OF_QUESTIONS) {
        const actions: any = [new TriviaActions.FetchQuestion()]
        if (storeState.questions.filter(el => el.question === question.question).length === 0) {
          actions.push(new TriviaActions.StoreQuestion(question))
        }
        return actions;
      }
      return [new TriviaActions.FetchQuestionsEnd()]
    }
    ),
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }
}
