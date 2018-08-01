import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoinService } from '../coin.service';
import { DataSource } from '@angular/cdk/collections';

// icons

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {
  topCoins = [];
  displayedColumns = [
    'rank',
    "icon",
    'name',
    'marketCap',
    'price',
    'volume',
    'supply',
    'change'
  ];

  constructor(
    private coinService: CoinService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getTopCoins();
  }

  getTopCoins(): void {
    this.coinService.getTopCoins()
      .subscribe(data => {
        this.topCoins = data['data'];
      });
  }

  getColor(number: string): any {
    const actualNum = +number;
    if (actualNum < 0) {
      return 'red';
    }
    return 'green';
  }

  truncateNumber(number: number): any {
    if (number > 1) {
      return number.toFixed(2);
    }
    return number.toFixed(6);
  }

  addCommasToNum(number: string): any {
    let num = this.truncateNumber(+number);
    if (num > 999) {
      console.log('in add commas if statement');
      num = num.toString();
      const index = num.indexOf('.');
      const array = num.split();
      const commas = [];
      const newNum = [];
      for (let i = index; i > 0; i = i - 3) {
        commas.push(i);
      }
      for (let j = 0; j < array.length; j++) {
        if ( j === commas[length - 1] ) {
          console.log('trying to add commas');
          newNum.push(',');
          commas.pop();
        }
        newNum.push(array[j]);
      }
      return newNum.join();
    }
    return num.toString();
  }


}
