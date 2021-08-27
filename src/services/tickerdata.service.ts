import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TickerdataService {

  constructor(private http:HttpClient) { }
 
  getTickerData(params={ticker:''}){ 

    const headers = new HttpHeaders()
            .set("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
            .set("x-rapidapi-key", "25a9e1dfa2mshaf779b7281b1bacp1f4f7ejsn8a7a7491ac61");

    return this.http.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=${params.ticker}`,{headers});

  }

}
