import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoinService {
  endpoints = [
    'https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank&structure=array',
    ' https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=percent_change_24h&structure=array'
  ];

  constructor(private http: HttpClient) { }


  // GET top 10 coins
  getTopCoins() {
    return this.http.get(this.endpoints[0]);
  }

  // GET top 10 trending coins
  getTrendingCoins() {
    return this.http.get(this.endpoints[1]);
  }

}
