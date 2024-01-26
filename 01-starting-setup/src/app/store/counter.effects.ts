import { createEffect, Actions, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.action";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { counterSelector } from "./counter.selector";

@Injectable()
export class CounterEffect {

    initCounter = createEffect(
        () => this.actions$.pipe(
            ofType(init),
            switchMap(() => {
                const storedValue = localStorage.getItem('Counter');
                if (!storedValue) {
                    return of(set({value: 0}))
                } else {
                    return of(set({value: +storedValue}));
                }
            })
        )
    )

    saveCounter = createEffect(
        () =>
            this.actions$.pipe(
                ofType(increment, decrement),
                withLatestFrom(this.store.select(counterSelector)),
                tap(([action, val]) => {
                    console.log(action);
                    localStorage.setItem('Counter', val.toString())
                })
            )
        , { dispatch: false })

    constructor(private actions$: Actions,
        private store: Store<{counter: number}>) { }
}