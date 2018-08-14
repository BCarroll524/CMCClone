import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoinService } from '../coin.service';
import { MomentModule } from 'angular2-moment/moment.module';
import * as moment from 'moment';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  coinId = String(this.route.snapshot.paramMap.get('id'));
  coin$: any;
  coinSymbol$: any;
  coinPrices$ = [];
  dataSource = [];
  displayedColumns = [
    'marketCap',
    'volume',
    'supply',
    'max',
  ];
  timeStamps = [];

  type = 'line';
  data = {
    labels: [],
    datasets: [
      {
        label: 'Price of Past Week',
        data: []
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService,
  ) { }

  ngOnInit() {
    this.coinService
      .getCoin(this.coinId)
      .subscribe((data) => {
        this.coin$ = data['data'];
        this.dataSource.push(this.coin$);
        this.getCoinSymbolId(this.coin$.symbol);

      console.log(this.coin$);
      });
    this.getWeekTimeStamps();
  }


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
        this.coinSymbol$ = data[0].symbol_id;
        console.log(this.coinSymbol$);
        this.getHistoricalPrice();
      });
  }

  getHistoricalPrice(): void {
    this.getWeekTimeStamps();
    const nums = [1, 2, 3, 4, 5, 6, 7];
    // calls are being completed out of order so it will not go into array accordingly
    // will need to sort array to have them in order
    for (const num of nums) {
      this.coinService.getHistoricalPrice(this.coinSymbol$, this.timeStamps[num])
        .subscribe(data => {
          console.log(data);
          this.coinPrices$.push(data[0].ask_price);
          // console.log(this.coinPrices$);
        });
    }
    return null;
  }

  getWeekTimeStamps(): void {
    this.timeStamps.push(moment().toISOString);
    const nums = [1, 2, 3, 4, 5, 6, 7];
    for (const num of nums) {
      const date = moment().subtract(num, 'days').toISOString();
      this.timeStamps.push(date);
    }
  }

  setChartData(): void {
    // set data.labels[] and data.datasets.data[]
    for (const time of this.timeStamps) {
      const dateLabel = moment(time).utc().format('DD[.] MMM');
      this.data.labels.push(dateLabel);
    }
    for (const coin of this.coinPrices$) {
      const price = coin.ask_price;
      this.data.datasets[0].data.push(price);
    }
  }



}
