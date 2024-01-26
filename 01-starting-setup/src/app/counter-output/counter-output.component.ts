import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { counterSelector, doubleCounterSelector } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  counter$: Observable<number>;
  doubleCounter$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    this.counter$ = this.store.select(counterSelector);
    this.doubleCounter$ = this.store.select(doubleCounterSelector);
  }
}
