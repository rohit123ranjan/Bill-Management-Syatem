import * as Types from "../actionTypes/dashboard";
import { handleLoading, handleData } from "../lib/helpers/actionHandlers";

export const eachBudgetData = (payload) => (dispatch) => {
  dispatch(handleLoading(Types.EACH_BUDGET));
  if (payload) {
    dispatch(handleData(Types.EACH_BUDGET_SUCCESS, payload));
  }
};

export const resetEachBudgetData = () => {
  return { type: Types.EACH_BUDGET_RESET };
};
