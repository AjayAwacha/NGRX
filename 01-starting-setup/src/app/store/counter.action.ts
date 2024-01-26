import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[counter] increment',
    props<{value: number}>()
);

export const decrement = createAction(
    '[counter] decrement',
    props<{value: number}>()
);

export const init = createAction(
    '[counter] init'
);

export const set = createAction(
    '[counter] set',
    props<{value: number}>()
);

