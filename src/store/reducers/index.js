import { combineReducers } from "redux";
import { userLoginReducer } from "./userLoginReducer";
import { getFeedReducer } from "./getFeedReducer";

const reducer = combineReducers({
  userLoginReducer,
  getFeedReducer
});

export default reducer;
