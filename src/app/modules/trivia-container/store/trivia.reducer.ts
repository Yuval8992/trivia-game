import { Question } from '../../../shared/models/question.model';
import * as TriviaActions from './trivia.actions';
import * as Constants from '../../../shared/consts/consts'

export interface State {
  questions: Question[];
  loading: boolean,
  timeLeft: number,
  message: string,
  clockRunnung: boolean,
  currentQuestionIdx: number,
  attempts: number
}

const initialState: State = {
  questions: [],
  loading: false,
  timeLeft: Constants.TIME_FOR_QUESTION,
  message: null,
  clockRunnung: true,
  currentQuestionIdx: 0,
  attempts: Constants.ATTEMPTS
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
    case TriviaActions.SET_TIME_LEFT:
      return {
        ...state,
        timeLeft: action.payload
      };
    case TriviaActions.PAUSE_CLOCK:
      return {
        ...state,
        clockRunnung: false
      };
    case TriviaActions.RESUME_CLOCK:
      return {
        ...state,
        clockRunnung: true
      };
    case TriviaActions.DISPLAY_MESSAGE:
      return {
        ...state,
        message: action.payload,
        clockRunnung: false,
      };
    case TriviaActions.SUBMIT_ANSWER:
      const currAttempts = state.attempts;
      return {
        ...state,
        attempts: action.payload ? currAttempts : currAttempts - 1
      };
    case TriviaActions.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIdx: state.currentQuestionIdx + 1
      };
    default:
      return state;
  }
}
