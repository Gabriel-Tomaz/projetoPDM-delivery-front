import * as actions from "../actions/address.actions";

const initialState = {
  address: {},
  errors: {},
  loading: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    //Cadastro
    case actions.ADD_ADDRESS:
      return {
        ...state,
        loading: true,
      };
    case actions.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case action.ADD_ADDRESS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action,
      };
    default:
      return state;
  }
};

export default reducer;
