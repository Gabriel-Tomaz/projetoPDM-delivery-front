import { combineReducers } from "redux";
import user from "./user.reducer";
import address from './address.reducer';

export default combineReducers({
  user,
  address
} as any);
