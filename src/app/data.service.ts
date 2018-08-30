import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  coin = new BehaviorSubject(Object);
  currentCoin = this.coin.asObservable();

  constructor() { }

}
