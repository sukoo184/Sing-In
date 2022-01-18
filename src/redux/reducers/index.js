import { combineReducers } from "redux";
import Users from "./users";

const rootReducer = combineReducers({
  users: Users,
});

export default rootReducer;
