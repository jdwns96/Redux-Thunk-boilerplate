import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import loggerMiddleware from "../lib/loggerMidleware";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";

import counter from "./counter.js";

const rootReducer = combineReducers({
    counter,
});

// how to set composeWithDevTools ?
// logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, createLogger())));

export default store;
