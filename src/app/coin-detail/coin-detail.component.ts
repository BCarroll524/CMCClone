import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

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

  coinPricesTestData = {
    '10. Aug': 359.33,
    '11. Aug': 319.25,
    '12. Aug': 322.35,
    '13. Aug': 319,
    '14. Aug': 270.13,
    '15. Aug': 285.44,
    '16. Aug': 282.83,
  };

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIconSetInNamespace(
      'crypto',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/svg-icons/cryptocurrency-icons-color.svg')
    );
  }

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
      this.setChartData();
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
        // this.getHistoricalPrice();
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
          // this.coinPrices$.push(data[0].ask_price);
          // console.log(this.coinPrices$);

          // push time and price to coin prices
          this.coinPrices$[moment(data[0].time_exchange).format('DD[.] MMM')] = data[0].ask_price;
        });
    }
    // this.setChartData();
  }

  getWeekTimeStamps(): void {
    this.timeStamps.push(moment().toISOString);
    const nums = [1, 2, 3, 4, 5, 6, 7];
    for (const num of nums) {
      const date = moment().subtract(num, 'days').toISOString();
      this.timeStamps.push(date);
    }
    // // removes toISOString function that is inserted in
    console.log(this.timeStamps);
    console.log(this.timeStamps.shift());
  }

  setChartData(): void {
    console.log('SETTING CHART DATA');
    // set data.labels[] and data.datasets.data[]
    this.timeStamps.forEach((time) => {
      const dateLabel = moment(time).format('DD[.] MMM');
      this.data.labels.push(dateLabel);
      const price = this.coinPricesTestData[dateLabel];
      this.data.datasets[0].data.push(price);
    });
    this.data.labels.reverse();
    this.data.datasets[0].data.reverse();
    console.log(this.data.labels);
    console.log(this.data.datasets[0].data);
  }



}
