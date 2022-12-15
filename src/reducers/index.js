import shoppingReducers from "./shoppingReducers";
import  { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: shoppingReducers,
})

export default rootReducer;