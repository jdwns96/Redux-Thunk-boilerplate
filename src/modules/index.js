import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import loggerMiddleware from "../lib/loggerMidleware";
import { createLogger } from "redux-logger";

import counter from "./counter.js";

const rootReducer = combineReducers({
    counter,
});

// how to set composeWithDevTools ?
const store = createStore(rootReducer, applyMiddleware(createLogger()));

export default store;
