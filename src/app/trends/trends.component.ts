import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoinService } from '../coin.service';
import { DataSource } from '@angular/cdk/collections';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  trendingCoins = [];
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
    private http: HttpClient,
    private coinService: CoinService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIconSetInNamespace(
      'crypto',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg-icons/cryptocurrency-icons-color.svg')
    );
  }

  ngOnInit() {
    this.getTrendingCoins();
  }

  getTrendingCoins(): void {
    this.coinService.getTrendingCoins()
      .subscribe(data => {
        this.trendingCoins = data['data'];
      });
  }

  getColor(number: string): any {
    const actualNum = +number;
    if (actualNum < 0) {
      return false;
    }
    return true;
  }

  setIcon(coins: Array<any>): any {
    coins.filter(function(coin) {
      const symbol = coin.symbol.toLowerCase();
      coin.icon = `../../../node_modules/cryptocurrency-icons/dist/svg/color/${symbol}.svg`;
    });
  }



}
