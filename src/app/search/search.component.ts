import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

import { CoinService } from '../coin.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myControl = new FormControl();
  options$: string[];
  filteredOptions: Observable<string[]>;
  allCoins$ = {};

  constructor(
    private coinService: CoinService,
    private route: Router
  ) { }

  // push a aserach term into the observable stream

  ngOnInit() {
    this.getCoins();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    return this.options$.filter(option => option.toLowerCase().includes(filterValue));
  }

  getCoins(): void {
    this.coinService.getAllCoins()
      .subscribe(data => {
        data['data'].map(coin => {
          this.allCoins$[coin.name] = coin.id;
        });
        this.options$ = data['data'].map(coin => {
          return coin.name;
        });
        this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      });
  }

  goToCoin(coin: string): any {
    console.log(coin);
    const id = this.allCoins$[coin];
    console.log('id: ' + id);
    this.route.navigate([`/coin/${id}`]);
  }


}
