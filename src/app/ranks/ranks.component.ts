import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoinService } from '../coin.service';
import { DataSource } from '@angular/cdk/collections';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


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
  ) {
    this.matIconRegistry.addSvgIconSetInNamespace(
      'crypto',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg-icons/cryptocurrency-icons-color.svg')
    );
   }

  ngOnInit() {
    this.getTopCoins();
  }

  getTopCoins(): void {
    this.coinService.getTopCoins()
      .subscribe(data => {
        this.topCoins = data['data'];
        this.setIcon(this.topCoins);
      });
  }

  getColor(number: string): any {
    const actualNum = +number;
    if (actualNum < 0) {
      return false;
    }
    return true;
  }


  // get icon of coin and add it as a property
  setIcon(coins: Array<any>): any {
    coins.filter(function(coin) {
      const symbol = coin.symbol.toLowerCase();
      coin.icon = `../../../node_modules/cryptocurrency-icons/dist/svg/color/${symbol}.svg`;
      // this.matIconRegistry.addSvgIcon(
      //   `${coin.symbol}`,
      //   this.domSanitizer.bypassSecurityTrustResourceUrl(`${coin.icon}`)
      // );
    });
  }


}
