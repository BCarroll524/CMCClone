import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoinService } from '../coin.service';
import { DataSource } from '@angular/cdk/collections';



@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

export class CoinsComponent implements OnInit {
  topCoins = [];
  trendingCoins = [];
  displayedColumns = [
    'rank',
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
    this.getTrendingCoins();
  }

  getTopCoins(): void {
    this.coinService.getTopCoins()
      .subscribe(data => {
        this.topCoins = data['data'];
      });
  }

  getTrendingCoins(): void {
    this.coinService.getTrendingCoins()
      .subscribe(data => {
        this.trendingCoins = data['data'];
      });
  }

}
