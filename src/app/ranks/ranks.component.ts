import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoinService } from '../coin.service';
import { DataSource } from '@angular/cdk/collections';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

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
    'icon',
    'name',
    'marketCap',
    'price',
    'volume',
    'supply',
    'change'
  ];

  constructor(
    private coinService: CoinService,
    private http: HttpClient,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getTopCoins();
  }

  getTopCoins(): void {
    this.coinService.getTopCoins()
      .subscribe(data => {
        this.topCoins = data['data'];
        // this.setIcon(this.topCoins);
      });
  }

  getColor(number: string): any {
    const actualNum = +number;
    if (actualNum < 0) {
      return false;
    }
    return true;
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
        console.log(j + ' compared to ' + commas[commas.length - 1]);
        if ( j === commas[commas.length - 1] ) {
          console.log('trying to add commas');
          newNum.push(',');
          commas.pop();
        }
        console.log('value of j: ' + j);
        newNum.push(array[j]);
      }
      return newNum.join();
    }
    return num.toString();
  }

  // get icon of coin and add is as a property
  setIcon(coins: Array<any>): any {
    coins.filter(function(coin) {
      const symbol = coin.symbol.toLowerCase();
      coin.icon = `../../../node_modules/cryptocurrency-icons/svg/color/${symbol}.svg`;
      // this.matIconRegistry.addSvgIcon(
      //   `${coin.symbol}`,
      //   this.domSanitizer.bypassSecurityTrustResourceUrl(`${coin.icon}`)
      // );
    });
  }


}
