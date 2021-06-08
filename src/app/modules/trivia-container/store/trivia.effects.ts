import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as TriviaActions from './trivia.actions';
import * as fromApp from '../../../store/app.reducer';
import { Question } from 'src/app/shared/models/question.model';
import { Answer } from 'src/app/shared/models/answer.model';
import * as Constants from '../../../shared/consts/consts'

@Injectable()
export class TriviaEffects {
  @Effect()
  fetchQuestion = this.actions$.pipe(
    ofType(TriviaActions.FETCH_QUESTION),
    switchMap(() =>
      this.http.get('https://opentdb.com/api.php?amount=1&encode=base64&type=multiple').pipe(
        map(question => {
          const filterQuestion = question['results'][0];
          const answers: Answer[] =
            [...filterQuestion['incorrect_answers'].map(el => {
              return {
                answer: atob(el),
                isCorrect: false
              }
            }),
            {
              answer: atob(filterQuestion['correct_answer']),
              isCorrect: true
            }
            ];

          return {
            question: atob(filterQuestion['question']),
            answers: answers.sort(() => Math.random() - 0.5)
          }
        }),
        withLatestFrom(this.store.select('trivia')),
        switchMap(([question, storeState]) => {
          if (storeState.questions.length < Constants.NUMBER_OF_QUESTIONS) {
            const actions: TriviaActions.TriviaActions[] = [new TriviaActions.FetchQuestion()]
            if (storeState.questions.filter(el => el.question === question.question).length === 0) {
              actions.unshift(new TriviaActions.StoreQuestion(question as Question))
            }
            return actions;
          }
          return [new TriviaActions.FetchQuestionsEnd()]
        }
        ),
      )
    ),
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) { }
}
