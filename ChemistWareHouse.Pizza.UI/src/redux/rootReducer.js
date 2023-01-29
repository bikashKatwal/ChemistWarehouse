import { combineReducers } from "redux";
import { PizzariaReducer } from "./actions/pizzariaActionReducer";

const rootReducer = combineReducers({
    pizzaria: PizzariaReducer
});

export default rootReducer;