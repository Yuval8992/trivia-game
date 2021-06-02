import { ActionReducerMap } from '@ngrx/store';

import * as fromTrivia from '../modules/trivia-container/store/trivia.reducer';

export interface AppState {
  trivia: fromTrivia.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  trivia: fromTrivia.triviaReducer,
};
