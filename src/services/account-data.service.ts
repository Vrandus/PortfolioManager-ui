import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  constructor(private http:HttpClient) { }

  getApiData(){ // all httpClient services are OBSERVABLES
    return this.http.get(`http://portfoliomanager-portfoliomanager.namdevops4.conygre.com/api/account`)
  }

  getMarketValuesOfOwnedAssets(tickers:Array<string>){
    return this.http.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes`,
      {
        headers: new HttpHeaders()
          .append("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
          .append("x-rapidapi-key", "1904d3107bmsh170ad7c8c42c5c0p168816jsn40c75b288681"),
        params: new HttpParams()
          .append('region', 'US')
          .append('symbols', tickers.join(','))
      })
    }
  }