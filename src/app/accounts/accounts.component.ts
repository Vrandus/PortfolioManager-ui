import { Component, OnInit } from '@angular/core';
import { AccountDataService } from 'src/services/account-data.service';
import { symbolName } from 'typescript';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accountData:any = null;
  cashAccounts:Array<Object> = [];
  investmentAccounts:Array<Object> = [];
  cashAccountsTotal:number = 0;
  investmentAccountsTotal:number = 0;
  tickerPrices:any = [];
  error = null;

  constructor(private accountDataService:AccountDataService) { }

  ngOnInit(): void {
    this.makeServiceCall();
  }

  parseTickerQuotes(){

  }

  makeServiceCall(){
    this.accountDataService.getApiData()
      .subscribe( (data:any)=>{
        this.error = null;
        let  tickers:Set<any> = new Set();
        for (let account of data) {
          if (account.accountType == "Cash") {
            this.cashAccounts.push(account);
            this.cashAccountsTotal += account.cashValue;
          } else {

            this.investmentAccounts.push(account)
            this.investmentAccountsTotal += account.cashValue;

            for (let transaction of account.transactions) {
              tickers.add(transaction.ticker);
            }
          }
        }
        this.accountDataService.getMarketValuesOfOwnedAssets(Array.from(tickers))
          .subscribe((data:any) => {
            for (let result of data.quoteResponse.result) {
              this.tickerPrices.push({
                symbol: result.symbol,
                result: result.regularMarketPrice
              })
            }
            console.log(this.tickerPrices)
          })
      }, (error:any) => {
        this.error = error.status
      })
  }
}
