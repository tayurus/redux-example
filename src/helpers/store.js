import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import { numberReducer } from './../reducers/number.reducers.js';

const loggerMiddleware = createLogger();

export const store = createStore(numberReducer, applyMiddleware(loggerMiddleware));
