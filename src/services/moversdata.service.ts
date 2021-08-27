import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MoversdataService {

  constructor(private http:HttpClient) { }
 
  getMoversData(params={region:'US'}){ 

    const headers = new HttpHeaders()
            .set("x-rapidapi-host", "apidojo-yahoo-finance-v1.p.rapidapi.com")
            .set("x-rapidapi-key", "25a9e1dfa2mshaf779b7281b1bacp1f4f7ejsn8a7a7491ac61");

    return this.http.get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=${params.region}&lang=en-US&count=5&start=0`,{headers});

  }

}