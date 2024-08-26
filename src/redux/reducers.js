import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  RESET,
  PLAY_PAUSE,
  TICK,
} from './actions';

const initialState = {
  breakCount: 5,
  sessionCount: 25,
  clockCount: 25 * 60,
  currentTimer: 'Session',
  isPlaying: false,
  isStarted: false, // New state to track if the timer has started
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return state.breakCount < 60 && !state.isPlaying
        ? { ...state, breakCount: state.breakCount + 1 }
        : state;
    case DECREMENT_BREAK:
      return state.breakCount > 1 && !state.isPlaying
        ? { ...state, breakCount: state.breakCount - 1 }
        : state;
    case INCREMENT_SESSION:
      return state.sessionCount < 60 && !state.isPlaying
        ? {
          ...state,
          sessionCount: state.sessionCount + 1,
          clockCount: state.isStarted
            ? state.clockCount
            : (state.sessionCount + 1) * 60,
        }
        : state;
    case DECREMENT_SESSION:
      return state.sessionCount > 1 && !state.isPlaying
        ? {
          ...state,
          sessionCount: state.sessionCount - 1,
          clockCount: state.isStarted
            ? state.clockCount
            : (state.sessionCount - 1) * 60,
        }
        : state;
    case RESET:
      return {
        ...initialState,
        clockCount:
          state.currentTimer === 'Session'
            ? state.sessionCount * 60
            : state.breakCount * 60,
      };
    case PLAY_PAUSE:
      if (!state.isPlaying && !state.isStarted) {
        return {
          ...state,
          isPlaying: !state.isPlaying,
          isStarted: true,
          clockCount: state.sessionCount * 60,
        };
      }
      return { ...state, isPlaying: !state.isPlaying };
    case TICK:
      if (state.clockCount === 0) {
        return {
          ...state,
          currentTimer:
            state.currentTimer === 'Session' ? 'Break' : 'Session',
          clockCount:
            (state.currentTimer === 'Session'
              ? state.breakCount
              : state.sessionCount) * 60,
        };
      }
      return { ...state, clockCount: state.clockCount - 1 };
    default:
      return state;
  }
};

export default rootReducer;
