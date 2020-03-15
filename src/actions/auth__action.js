export const getErrorMessage = (msg) => dispatch => {
  dispatch({type: "GET_ERROR_MESSAGE", msg})
};

export const setLogin = (login) => dispatch => {
  dispatch({type: "SET_LOGIN", login})
};

export const setPassword = (password) => dispatch => {
  dispatch({type: "SET_PASSWORD", password})
};