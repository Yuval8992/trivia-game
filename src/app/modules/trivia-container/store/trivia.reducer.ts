import { Question } from '../../../shared/models/question.model';
import * as TriviaActions from './trivia.actions';

export interface State {
  questions: Question[];
  loading: boolean
}

const initialState: State = {
  questions: [],
  loading: false
};

export function triviaReducer(
  state = initialState,
  action: TriviaActions.TriviaActions
) {
  switch (action.type) {
    case TriviaActions.FETCH_QUESTIONS_START:
      return {
        ...state,
        loading: true
      };
    case TriviaActions.FETCH_QUESTION:
      return {
        ...state,
      };
    case TriviaActions.STORE_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };
    case TriviaActions.FETCH_QUESTIONS_END:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
