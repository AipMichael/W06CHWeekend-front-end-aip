import { combineReducers } from "redux";
import robotReducer from "./robotReducer";

const momReducer = combineReducers({
  robots: robotReducer,
  console.log("hola")
});

export default momReducer;
