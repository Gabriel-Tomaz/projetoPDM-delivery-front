import * as actions from "../actions/user.actions";

const initialState = {
  token: "",
  user: {},
  errors: {},
  loading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    //Login
    case actions.AUTH:
      return {
        ...state,
        loading: true,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        ...action,
      };
    //Cadastro
    case actions.REGISTER:
      return {
        ...state,
        loading: true,
      };
    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case action.REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        ...action,
      };
    default:
      return state;
  }
};

export default reducer;
