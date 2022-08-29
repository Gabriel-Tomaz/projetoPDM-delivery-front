import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistReducers = (reducers: any) => {
  const persistedReducers = persistReducer(
    {
      key: "root",
      storage: AsyncStorage,
      whitelist: ["user"],
    },
    reducers
  );

  return persistedReducers;
};

export default persistReducers;
