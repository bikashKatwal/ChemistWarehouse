import { combineReducers } from "redux";
import { CounterReducer } from "./actions/index";
import { PizzariaReducer } from "./actions/pizzariaActionReducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
    pizzaria: PizzariaReducer
});

export default rootReducer;