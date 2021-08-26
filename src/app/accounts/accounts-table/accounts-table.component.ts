import { Component, Input, OnInit } from '@angular/core';
import { AccountDataService } from 'src/services/account-data.service';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})
export class AccountsTableComponent implements OnInit {


  tickers:Set<string> = new Set();
  accounts2:Array<any> = [];

  @Input() accounts:Array<any> = [];
  @Input() isCash:boolean = false;

  constructor(private accountDataService:AccountDataService) { }

  ngOnInit(): void {
    this.getTickersFromAccounts();
  }

  getTickersFromAccounts(){
    // this.accounts2 = this.accounts;
    // if (!this.isCash) {
    //   console.log(this.accounts2)
    //   for (let a of this.accounts2) {

    //     for (let transaction of a.transactions) {
    //       this.tickers.add(transaction.ticker);
    //     }
    //   }
    // }
  }
}

