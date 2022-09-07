import { combineReducers } from "redux";
import user from "./auth.reducer";

export default combineReducers({
  user,
} as any);
