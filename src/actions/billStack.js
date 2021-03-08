import * as Types from "../actionTypes/billStack";
import { handleLoading, handleData } from "../lib/helpers/actionHandlers";

export const billStack = (payload, type, id) => (dispatch) => {
  dispatch(handleLoading(Types.BILL_STACK));
  if (payload) {
    if (type === "append") {
      dispatch(handleData(Types.BILL_STACK_APPEND, payload));
    } else if (type === "edit") {
      dispatch(handleData(Types.BILL_STACK_EDIT, payload));
    } else if (type === "delete") {
      dispatch(handleData(Types.BILL_STACK_DELETE, payload));
    }
  }
};

export const resetBillStack = () => {
  return { type: Types.BILL_STACK_RESET };
};
