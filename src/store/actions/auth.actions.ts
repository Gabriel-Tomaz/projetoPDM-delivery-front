import api from "../../service/api";
import { AppDispatch } from "../store";
import { User } from "../../types/user";

export const AUTH = "[AUTH] AUTH";
export const AUTH_SUCCESS = "[AUTH] AUTH_SUCCESS";
export const AUTH_FAILED = "[AUTH] AUTH_FAILED";

export const auth = (user: User, callback: CallableFunction): any => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: AUTH });

    try {
      const response = await api.post('/login', user);

      if (response.status === 200) {
        dispatch({ type: AUTH_SUCCESS, payload: response.data });
        return callback && callback(null, response.data);
      } else {
        dispatch({ type: AUTH_FAILED });
        return callback && callback(new Error("Erro na autenticação"));
      }
    } catch (error) {
      dispatch({ type: AUTH_FAILED });
      return callback && callback(error);
    }
  };
};
