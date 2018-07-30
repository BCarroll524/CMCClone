import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoinService } from '../coin.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
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
    private http: HttpClient,
    private coinService: CoinService
  ) { }

  ngOnInit() {
    this.getTrendingCoins();
  }

  getTrendingCoins(): void {
    this.coinService.getTrendingCoins()
      .subscribe(data => {
        this.trendingCoins = data['data'];
      });
  }

}
