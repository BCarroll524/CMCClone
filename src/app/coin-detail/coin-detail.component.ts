import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {
  coin: any;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService,
  ) { }

  ngOnInit() {
    this.getCoin();
  }

  getCoin(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.coinService.getCoin(id)
      .subscribe(data => {
        this.coin = data['data'];
        console.log(this.coin);
      });
  }

  getColor(number: string): any {
    const actualNum = +number;
    if (actualNum < 0) {
      return false;
    }
    return true;
  }

}
