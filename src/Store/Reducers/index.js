import { combineReducers } from "redux";
import todo from "./todoReducer";

const rootReducer = combineReducers({
  //리듀서 함수들을 내보내기 위해 하나로 합침
  todo,
});

export default rootReducer;
