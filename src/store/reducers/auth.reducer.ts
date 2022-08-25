import { PayloadAction } from "@reduxjs/toolkit";
import * as actions from "../actions/auth.actions";

const initialState = {
  token: "",
  user: {},
  errors: {},
  loading: false,
};

const reducer = (state = initialState, action: any, payload: any) => {
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
        ...payload,
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        loading: false,
        erros: { ...payload },
      };
    default:
      return state;
  }
};

export default reducer;
