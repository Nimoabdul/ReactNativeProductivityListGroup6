import {
  SET_TASKS,
  REMOVE_TASK,
  SET_CURRENT_TIME,
  SET_TOTAL_TASKS,
  SET_COMPLETED_TASKS,
  SET_TEMPERATURE,
  SET_WEATHER_CODE,
  SET_WINDS_SPEED,
  SET_WIND_DIRECTION,
  SET_JOKE_OF_THE_DAY,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_EMAIL,
} from './actions';

const initialState = [];

function useReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASKS:
      return [...state, action.payload];
    case REMOVE_TASK:
      return action.payload;
    case SET_CURRENT_TIME:
      return [...state, action.payload];
    case SET_TOTAL_TASKS:
      return [...state, action.payload];
    case SET_COMPLETED_TASKS:
      return [...state, action.payload];
    case SET_TEMPERATURE:
      return [...state, action.payload];
    case SET_WEATHER_CODE:
      return [...state, action.payload];
    case SET_WINDS_SPEED:
      return [...state, action.payload];
    case SET_WIND_DIRECTION:
      return [...state, action.payload];
    case SET_JOKE_OF_THE_DAY:
      return [...state, action.payload];
    case SET_FIRST_NAME:
      return [...state, action.payload];
    case SET_LAST_NAME:
      return [...state, action.payload];
    case SET_EMAIL:
      return [...state, action.payload];
    default:
      return state;
  }
}
export default useReducer;
