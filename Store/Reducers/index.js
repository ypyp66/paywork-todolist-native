import { combineReducers } from "redux";
import todo from "./todoReducer";
import counter from "./counterReducer";

const rootReducer = combineReducers({
  todo,
  counter,
});

export default rootReducer;
