import { Action } from '@ngrx/store';
import { Question } from '../../../shared/models/question.model';

export const FETCH_QUESTIONS_START = '[Trivia] Fetch Questions Start';
export const FETCH_QUESTION = '[Trivia] Fetch Question';
export const STORE_QUESTION = '[Trivia] Store Question';
export const FETCH_QUESTIONS_END = '[Trivia] Fetch Questions End';


export class FetchQuestionsStart implements Action {
  readonly type = FETCH_QUESTIONS_START;
}

export class FetchQuestion implements Action {
  readonly type = FETCH_QUESTION;
}

export class StoreQuestion implements Action {
  readonly type = STORE_QUESTION;

  constructor(public payload: Question) { }
}

export class FetchQuestionsEnd implements Action {
  readonly type = FETCH_QUESTIONS_END;
}

export type TriviaActions =
  | FetchQuestionsStart
  | FetchQuestion
  | StoreQuestion
  | FetchQuestionsEnd;
