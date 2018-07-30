import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoinService } from '../coin.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {
  topCoins = [];
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
  }

  getTopCoins(): void {
    this.coinService.getTopCoins()
      .subscribe(data => {
        this.topCoins = data['data'];
      });
  }

}
