import { Component, OnInit, NgModule } from '@angular/core';

import { RanksComponent } from '../ranks/ranks.component';
import { TrendsComponent } from '../trends/trends.component';

import { CoinService } from '../coin.service';



@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})

export class CoinsComponent implements OnInit {

  allCoins$: any;

  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit() {
    this.getAllCoins();
  }

  getAllCoins(): void {
    this.coinService.getAllCoins()
      .subscribe(data => {
        this.allCoins$ = data['data'];
      });
  }

}
