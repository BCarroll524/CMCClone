import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CoinService } from '../coin.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myControl = new FormControl();
  allCoins$ = [];
  searchedCoins$ = [];
  private searchTerms = new Subject<string>();


  constructor(
    private coinService: CoinService
  ) { }

  // push a aserach term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {

  }

  getCoins(): void {

  }

}
