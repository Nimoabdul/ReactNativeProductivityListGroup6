export const SET_TASKS = 'SET_TASKS';
export const REMOVE_TASK = 'REMOVE_TASK';
export const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
export const SET_TOTAL_TASKS = 'SET_TOTAL_TASKS';
export const SET_COMPLETED_TASKS = 'SET_COMPLETED_TASKS';
export const SET_TEMPERATURE = 'SET_TEMPERATURE';
export const SET_WEATHER_CODE = 'SET_WEATHER_CODE';
export const SET_WINDS_SPEED = 'SET_WINDS_SPEED';
export const SET_WIND_DIRECTION = 'SET_WIND_DIRECTION';
export const SET_JOKE_OF_THE_DAY = 'SET_JOKE_OF_THE_DAY';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_EMAIL = 'SET_EMAIL';

export const setTasks = task => dispatch => {
  dispatch({
    type: SET_TASKS,
    payload: task,
  });
};
export const removeTask = task => dispatch => {
  dispatch({
    type: REMOVE_TASK,
    payload: task,
  });
};
export const setCurrentTime = time => dispatch => {
  dispatch({
    type: SET_CURRENT_TIME,
    payload: time,
  });
};
export const setTotalTasks = total => dispatch => {
  dispatch({
    type: SET_TOTAL_TASKS,
    payload: total,
  });
};
export const setTotalCompletedTasks = completed => dispatch => {
  dispatch({
    type: SET_COMPLETED_TASKS,
    payload: completed,
  });
};
export const setTemperature = temp => dispatch => {
  dispatch({
    type: SET_TEMPERATURE,
    payload: temp,
  });
};
export const setWeatherCode = code => dispatch => {
  dispatch({
    type: SET_WEATHER_CODE,
    payload: code,
  });
};
export const setWindSpeed = wind => dispatch => {
  dispatch({
    type: SET_WINDS_SPEED,
    payload: wind,
  });
};
export const setWindDirection = dir => dispatch => {
  dispatch({
    type: SET_WIND_DIRECTION,
    payload: dir,
  });
};
export const setJokeOfDay = joke => dispatch => {
  dispatch({
    type: SET_JOKE_OF_THE_DAY,
    payload: joke,
  });
};
export const setFirstName = first => dispatch => {
  dispatch({
    type: SET_FIRST_NAME,
    payload: first,
  });
};
export const setLastName = last => dispatch => {
  dispatch({
    type: SET_LAST_NAME,
    payload: last,
  });
};
export const setEmail = email => dispatch => {
  dispatch({
    type: SET_EMAIL,
    payload: email,
  });
};
