/*
 * @Author: haotengfei 
 * @Date: 2019-01-09 09:31:56 
 * @Last Modified by: haotengfei
 * @Last Modified time: 2019-01-09 14:42:29
 */
import { createStore, applyMiddleware, Store, Middleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { routerMiddleware } from "react-router-redux";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { History, createBrowserHistory } from "history";

import reducer from "../reducers";
import saga from "../sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middleware = [ routerMiddleware(history), sagaMiddleware ];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(saga);

export default store;