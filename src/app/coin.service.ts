import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoinService {
  endpoints = [
    'https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank&structure=array',
    'https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=percent_change_24h&structure=array',
    'https://api.coinmarketcap.com/v2/ticker/'
  ];

  // needed to allow CORS for 3rd endpoint to work while testing

  constructor(private http: HttpClient) { }


  // GET top 10 coins
  getTopCoins() {
    return this.http.get(this.endpoints[0]);
  }

  // GET top 10 trending coins
  getTrendingCoins() {
    return this.http.get(this.endpoints[1]);
  }

  getCoin(id: String) {
    const endpoint = this.endpoints[2] + id;
    return this.http.get(endpoint);
  }

}
