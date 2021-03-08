import * as Types from "../actionTypes/budget";
import { handleLoading, handleData } from "../lib/helpers/actionHandlers";

export const budgetData = (payload) => (dispatch) => {
  dispatch(handleLoading(Types.BUDGET_DATA));
  if (payload) {
    dispatch(handleData(Types.BUDGET_DATA_SUCCESS, payload));
  }
};

export const resetBudgetData = () => {
  return { type: Types.BUDGET_DATA_RESET };
};
