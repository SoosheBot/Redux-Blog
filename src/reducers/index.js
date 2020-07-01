// combineReducers combines many reducers in the store into one root reducer so we can easily organize our code while still having everything in one root state tree
import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
