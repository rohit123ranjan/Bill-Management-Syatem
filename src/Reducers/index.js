import { combineReducers } from "redux";
import dashboard from "./dashboard";
import budget from "./budget";
import billstack from "./billstack";

const appReducer = combineReducers({
  dashboard,
  budget,
  billstack,
});

const rootReducer = (state, action) => {
  // if (action?.type === 'CLEAR_STORE.clear') {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

export default rootReducer;
