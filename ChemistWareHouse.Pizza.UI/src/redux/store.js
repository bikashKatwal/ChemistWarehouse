import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk, logger];

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;