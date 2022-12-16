import { configureStore } from "@reduxjs/toolkit";

import RootReducer from "./Reducer";

export default configureStore({
  reducer: RootReducer,
  devTools: true,
});
