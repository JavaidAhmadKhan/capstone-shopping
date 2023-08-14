import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [import.meta.NODE_ENV === "development" && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});
