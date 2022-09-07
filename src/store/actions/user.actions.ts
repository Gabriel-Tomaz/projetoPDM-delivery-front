import api from "../../service/api";
import { AppDispatch } from "../store";
import { User } from "../../@types/user";

export const AUTH = "[AUTH] AUTH";
export const AUTH_SUCCESS = "[AUTH] AUTH_SUCCESS";
export const AUTH_FAILED = "[AUTH] AUTH_FAILED";

export const REGISTER = "[REGISTER] REGISTER";
export const REGISTER_SUCCESS = "[REGISTER] REGISTER_SUCCESS";
export const REGISTER_FAILED = "[REGISTER] REGISTER_FAILED";

export const auth = (user: User, callback: CallableFunction): any => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: AUTH });

    try {
      const response = await api.post("user/login", user);

      if (response.data) {
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

export const register = (data: User, callback: CallableFunction): any => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: REGISTER });

    try {
      const response = await api.post("user/insert", data);

      if (response.data) {
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
        return callback && callback(null, response.data);
      } else {
        dispatch({ type: REGISTER_FAILED });
        return (
          callback && callback(new Error("Erro ao cadastrar novo usuário"))
        );
      }
    } catch (e) {
      dispatch({ type: REGISTER_FAILED });
      return callback && callback(e);
    }
  };
};
