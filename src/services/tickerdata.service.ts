import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TickerdataService {

  constructor(private http:HttpClient) { }


  getTickerData(tickers:Array<string>){ 

    return this.http.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes`,
      {
        headers: new HttpHeaders()
          .append("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
          .append("x-rapidapi-key", "25a9e1dfa2mshaf779b7281b1bacp1f4f7ejsn8a7a7491ac61"),
          params: new HttpParams()
          .append('region', 'US')
          .append('symbols', tickers.join(','))
      });
  }

}
