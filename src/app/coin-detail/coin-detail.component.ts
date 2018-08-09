import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  coinId = String(this.route.snapshot.paramMap.get('id'));
  coin$: any;
  coinSymbol$: any;
  dataSource = [];
  displayedColumns = [
    'marketCap',
    'volume',
    'supply',
    'max',
  ];
  date: Date;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) { }

  ngOnInit() {
    this.coinService
      .getCoin(this.coinId)
      .subscribe((data) => {
        this.coin$ = data['data'];
        this.dataSource.push(this.coin$);
        this.getCoinSymbolId(this.coin$.symbol);
      });
  }

  // getCoin(): void {
  //   const id = String(this.route.snapshot.paramMap.get('id'));
  //   this.coinService.getCoin(id)
  //     .subscribe(data => {
  //       this.coin = data['data'];
  //       this.dataSource.push(this.coin);
  //       console.log(this.coin);
  //       this.getCoinSymbolId(this.coin.symbol);
  //     });
  // }

  getColor(number: string): any {
    const actualNum = +number;
    if (actualNum < 0) {
      return false;
    }
    return true;
  }

  getCoinSymbolId(id: String): void {
    this.coinService.getCoinSymbolId(id)
      .subscribe(data => {
        this.coinSymbol$ = data[0];
        console.log(this.coinSymbol$);
      });
  }

  getHistoricalPrice(): void {
    return null;
  }

}
