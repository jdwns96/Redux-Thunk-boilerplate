import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import counter from "./counter.js";

const rootReducer = combineReducers({
    counter,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
