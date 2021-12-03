// main reducer

import toggleChangeNumber from "./updown";
import toggleColorMode from "./Background"
import {combineReducers} from "redux";

const rootReducer=combineReducers({
    toggleChangeNumber,
    toggleColorMode
});
export default rootReducer;
