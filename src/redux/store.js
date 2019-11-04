import { createStore } from "redux";
import { counterReducer } from "./counter/counter.reducer";

export const store = createStore(counterReducer);
