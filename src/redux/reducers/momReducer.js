import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";
import userReducer from "./userReducer";

const momReducer = combineReducers({
  robots: robotsReducer,
  user: userReducer,
});

export default momReducer;
