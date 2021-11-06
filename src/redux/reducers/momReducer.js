import { combineReducers } from "redux";
import robotReducer from "./robotReducer";

const momReducer = combineReducers({
  robots: robotReducer,
});

export default momReducer;
