import { createReducer, on } from "@ngrx/store";
import { increment, decrement, init, set } from "./counter.action";

const initialValue = 0;

export const counterReducer = createReducer(
    initialValue,
    on(increment, (state, action) => {
        return state + action.value;
    }),
    on(decrement, (state, action) => {
        return state - action.value;
    }),
    on(set, (state, action) => {
        return action.value;
    })
)
