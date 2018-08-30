import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoinService {
  endpoints = [
    'https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank&structure=array',
    'https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=percent_change_24h&structure=array',
    'https://api.coinmarketcap.com/v2/ticker/',
    'https://rest.coinapi.io/v1/symbols?filter_symbol_id=',
    'https://rest.coinapi.io/v1/quotes/',
    'https://api.coinmarketcap.com/v2/listings/'
  ];
  coinapi_token = 'B5430588-62D8-4098-90D8-74F582BDF634';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-CoinAPI-Key': 'B5430588-62D8-4098-90D8-74F582BDF634'
    })
  };


  // needed to allow CORS for 3rd endpoint to work while testing

  constructor(
    private http: HttpClient
  ) { }


  // GET top 10 coins
  getTopCoins(): Observable<any> {
    return this.http.get(this.endpoints[0]);
  }

  // GET top 10 trending coins
  getTrendingCoins(): Observable<any> {
    return this.http.get(this.endpoints[1]);
  }

  getCoin(id: String): Observable<any> {
    const endpoint = this.endpoints[2] + id + '/';
    return this.http.get(endpoint);
  }

  getCoinSymbolId(symbol: String): Observable<any> {
    const endpoint = this.endpoints[3] + symbol + '_USD&limit=1';
    return this.http.get(endpoint, this.httpOptions);
  }

  getHistoricalPrice(symbol: string, start: string): Observable<any> {
    const endpoint = this.endpoints[4] + symbol + '/history?time_start=' + start + '&limit=1';
    return this.http.get(endpoint, this.httpOptions);
  }

  getAllCoins(): Observable<any> {
    return this.http.get(this.endpoints[5]);
  }

}
