import { createStore, applyMiddleware, compose, Action } from "redux";
import { persistStore } from "redux-persist";
import thunk, { ThunkAction } from "redux-thunk";

import reducers from "./reducers/index.reducer";
import persistReducers from "./persistReducer";

const middleware = [thunk];

const store = createStore(
  persistReducers(reducers),
  compose(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;