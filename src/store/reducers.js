import { combineReducers } from "redux";

import PostReducer from "./posts/reducer";

const rootReducer = combineReducers({
  PostReducer,
});

export default rootReducer;
