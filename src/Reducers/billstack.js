import { combineReducers } from "redux";
import * as Types from "../actionTypes/billStack";

function makeRequestReducer(actionType, defaultData = [], state = {}) {
  const initialState = {
    data: defaultData,
    error: false,
    loading: false,
    ...state,
  };
  return (state = initialState, { type, payload }) => {
    switch (type) {
      case `${actionType}.delete`:
        return {
          ...state,
          data: state?.data?.filter((i) => payload?.data?.id !== i?.id),
        };
      case `${actionType}.append`:
        if (state?.data?.length === 0) {
          return {
            ...state,
            data: [payload?.data],
          };
        } else {
          return {
            ...state,
            data: state?.data?.concat(payload?.data),
          };
        }
      case `${actionType}.edit`:
        if (state?.data) {
          let newData = state?.data;

          let index = newData.findIndex(function (i) {
            return i.id === payload?.data?.id;
          });
          if (index !== -1) {
            newData[index] = payload?.data;
          }
          console.log("newData", newData, index, payload?.data);
          return {
            ...state,
            data: newData,
          };
        }
        break;
      case `${actionType}.failed`:
        return {
          ...state,
          loading: false,
          error: true,
          data: defaultData,
        };
      case `${actionType}.reset`:
        return initialState;

      default:
        return state;
    }
  };
}

export default combineReducers({
  billStack: makeRequestReducer(Types.BILL_STACK),
});
