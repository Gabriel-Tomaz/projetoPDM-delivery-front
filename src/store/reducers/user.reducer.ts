import * as actions from "../actions/user.actions";

const initialState = {
  token: "",
  user: {},
  errors: {},
  loading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.AUTH:
      return {
        ...state,
        loading: true,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        ...action
      };
    default:
      return state;
  }
};

export default reducer;
