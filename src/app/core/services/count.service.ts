import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class CountService {

  private count = new BehaviorSubject<number>(0);
  count$ = this.count.asObservable();

  constructor() { }

  get value() {
    return this.count.getValue();
  }

  add() {
    this.count.next(this.value + 1);
  }

  sub() {
    this.count.next(this.value - 1);
  }
}
