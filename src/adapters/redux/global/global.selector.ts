import { REDUCER_ID } from "./global.reducer";

export const selectCountLoading = (globalState) =>
  globalState[REDUCER_ID].loadingActions;
