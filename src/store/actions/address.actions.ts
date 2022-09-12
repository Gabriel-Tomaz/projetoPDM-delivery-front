import api from "../../service/api";
import { AppDispatch } from "../store";
import { Address } from "../../@types/address";

export const ADD_ADDRESS = "[ADDRESS] ADD_ADDRESS";
export const ADD_ADDRESS_SUCCESS = "[ADDRESS] AUTH_SUCCESS";
export const ADD_ADDRESS_FAILED = "[ADDRESS] AUTH_FAILED";

export const GET_ADDRESSES = "[ADDRESS] GET_ADDRESSES";
export const GET_ADDRESSES_SUCCESS = "[ADDRESS] GET_ADDRESSES_SUCCESS";
export const GET_ADDRESSES_FAILED = "[ADDRESS] GET_ADDRESSES_FAILED";

export const DELETE_ADDRESSES = "[ADDRESS] DELETE_ADDRESSES";
export const DELETE_ADDRESSES_SUCCESS = "[ADDRESS] DELETE_ADDRESSES_SUCCESS";
export const DELETE_ADDRESSES_FAILED = "[ADDRESS] DELETE_ADDRESSES_FAILED";

export const getAddresses = (
  userId: number,
  callback: CallableFunction
): any => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: GET_ADDRESSES });

    try {
      const response = await api.get(`adressGet/${userId}`);

      if (response.data) {
        dispatch({ type: GET_ADDRESSES_SUCCESS, payload: response.data });
        return callback && callback(null, response.data);
      } else {
        dispatch({ type: GET_ADDRESSES_FAILED });
        return callback && callback(new Error("Erro ao listar endereços"));
      }
    } catch (e) {
      dispatch({ type: GET_ADDRESSES_FAILED });
      return callback && callback(e);
    }
  };
};

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

export const deleteAddress = (id: any, callback: CallableFunction): any => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: DELETE_ADDRESSES });

    try {
      const response = await api.delete(`adress/delete/${id}`);

      if (response.data) {
        dispatch({ type: DELETE_ADDRESSES_SUCCESS });
        return callback && callback(null);
      } else {
        dispatch({ type: DELETE_ADDRESSES_FAILED });
        return callback && callback(new Error("Erro ao deletar endereço"));
      }
    } catch (e) {
      dispatch({ type: DELETE_ADDRESSES_FAILED });
      return callback && callback(e);
    }
  };
};
