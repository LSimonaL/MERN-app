import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postReducer from "./postReducers";

export default combineReducers({
    auth: authReducer,
    post: postReducer,
    errors: errorReducer
});