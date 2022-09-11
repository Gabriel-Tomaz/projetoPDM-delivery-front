import api from "../../service/api";
import { AppDispatch } from "../store";
import { Address } from "../../@types/address";

export const ADD_ADDRESS = "[ADDRESS] ADD_ADDRESS";
export const ADD_ADDRESS_SUCCESS = "[ADDRESS] AUTH_SUCCESS";
export const ADD_ADDRESS_FAILED = "[ADDRESS] AUTH_FAILED";

export const addAddress = (data: Address, callback: CallableFunction): any => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: ADD_ADDRESS });

    try {
      const response = await api.post("adress/insert", data);

      if (response.data) {
        dispatch({ type: ADD_ADDRESS_SUCCESS, payload: response.data });
        return callback && callback(null, response.data);
      } else {
        dispatch({ type: ADD_ADDRESS_FAILED });
        return (
          callback && callback(new Error("Erro ao cadastrar novo endereço"))
        );
      }
    } catch (e) {
      dispatch({ type: ADD_ADDRESS_FAILED });
      return callback && callback(e);
    }
  };
};
