const initialState = {
  error: '',
  login: '',
  password: ''
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ERROR_MESSAGE":
      return {
        ...state,
        error: action.msg
      };
    case "SET_LOGIN":
      return {
        ...state,
        login: action.login
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
}