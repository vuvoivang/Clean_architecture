import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { AppConstant } from "~/constants";
import { globalReducer } from "./global";

export const getInitialState = () => ({});

export function makeStore() {
  return configureStore({
    reducer: { [AppConstant.redux.GLOBAL_STATE]: globalReducer },
    devTools: process.env.NODE_ENV === "development",
    preloadedState: getInitialState(),
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
