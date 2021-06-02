import { Action } from '@ngrx/store';
import { Question } from '../../../shared/models/question.model';

export const FETCH_QUESTIONS_START = '[Trivia] Fetch Questions Start';
export const FETCH_QUESTION = '[Trivia] Fetch Question';
export const STORE_QUESTION = '[Trivia] Store Question';
export const FETCH_QUESTIONS_END = '[Trivia] Fetch Questions End';
export const SET_TIME_LEFT = '[Trivia] Set Time Left';
export const DISPLAY_MESSAGE = '[Trivia] Display Message';
export const PAUSE_CLOCK = '[Trivia] Pause Clock';
export const RESUME_CLOCK = '[Trivia] Resume Clock';
export const SUBMIT_ANSWER = '[Trivia] Submit Answer';
export const NEXT_QUESTION = '[Trivia] Next Question';

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

export class SetTimeLeft implements Action {
  readonly type = SET_TIME_LEFT;

  constructor(public payload: number) { }
}

export class PauseClock implements Action {
  readonly type = PAUSE_CLOCK;
}

export class ResumeClock implements Action {
  readonly type = RESUME_CLOCK;
}

export class DisplayMessage implements Action {
  readonly type = DISPLAY_MESSAGE;

  constructor(public payload: string) { }
}

export class SubmitAnswer implements Action {
  readonly type = SUBMIT_ANSWER;

  constructor(public payload: boolean) { }
}

export class NextQuestion implements Action {
  readonly type = NEXT_QUESTION;
}

export type TriviaActions =
  | FetchQuestionsStart
  | FetchQuestion
  | StoreQuestion
  | FetchQuestionsEnd
  | SetTimeLeft
  | DisplayMessage
  | PauseClock
  | ResumeClock
  | SubmitAnswer
  | NextQuestion;
