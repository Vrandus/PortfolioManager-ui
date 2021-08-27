import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http:HttpClient) { }
  async getTransactionData(){
    const result = this.http.get("http://portfoliomanager-portfoliomanager.namdevops4.conygre.com/api/transaction");
    return result
  }
}
