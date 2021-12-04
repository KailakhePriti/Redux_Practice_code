// main reducer

import toggleChangeNumber from "./updown";
import toggleColorMode from "./Background";
import toggleTodoList from "./todoreducer";
import {combineReducers} from "redux";

const rootReducer=combineReducers({
    toggleChangeNumber,
    toggleColorMode,
    toggleTodoList
});
export default rootReducer;
