import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class YfinanceHistoryService {

  constructor(private http:HttpClient) { }

  getHistoricalDataOfTicker(ticker: string){
    return this.http.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart`,
    {
      headers: new HttpHeaders()
      .append("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
      .append("x-rapidapi-key", "1904d3107bmsh170ad7c8c42c5c0p168816jsn40c75b288681"),
      params: new HttpParams()
      .append('region', 'US')
      .append('symbol', ticker)
      .append('interval', '60m')
      .append('range', '1mo')
    })
  }
}
