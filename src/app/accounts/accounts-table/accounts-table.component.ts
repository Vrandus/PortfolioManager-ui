import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { makeTemplateObject } from '@angular/localize/src/utils';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})
export class AccountsTableComponent implements OnInit {

  @Input() accounts:Array<any> = [];
  @Input() isCash:boolean = false;
  @Input() tickerPrices:any = [];

  account:any =  null;
  holdings:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  setAccount(account:any) {
    this.account = account;
    this.holdings = [];
    this.calculateHoldings();
  }

  containsHolding(ticker:any) {
    for(var i = 0; i < this.holdings.length; i++) {
      if (this.holdings[i].ticker == ticker) {
          return i;
      }
    }
    return -1;
  }

  calculateHoldings(){
    for (let t of this.account.transactions) {
      let index = this.containsHolding(t.ticker);
      console.log(index)
      if (index !== -1) {
        this.compileHoldings(t, index);
      } else {
        let bookValue = t.unitPrice * t.units;
        let marketValue = this.tickerPrices[t.ticker] * t.units;
        let pL = ((marketValue - bookValue)/bookValue * 100).toFixed(2)
        this.holdings.push({
          ticker: t.ticker,
          units: t.units,
          assetType: t.assetType,
          price: this.tickerPrices[t.ticker],
          bookValue: bookValue,
          marketValue: marketValue,
          pL: pL,
          class: (new Number(pL) > 0 ? 'table-success' : 'table-warning')
        })
      }
    }
  }

  compileHoldings(transaction:any, index:number) {
    if (transaction.transactionType == 'BUY') {
      this.holdings[index].units += transaction.units;
      this.holdings[index].bookValue  += Math.round((transaction.unitPrice * transaction.units) * 100) / 100;
      this.holdings[index].marketValue += transaction.units * this.tickerPrices[transaction.ticker];
    } else {
      this.holdings[index].units -= transaction.units;
      this.holdings[index].bookValue -= Math.round((transaction.unitPrice * transaction.units) * 100) / 100;
      this.holdings[index].marketValue -= transaction.units * this.tickerPrices[transaction.ticker];
    }
    this.holdings[index].pL = ((this.holdings[index].marketValue - this.holdings[index].bookValue)/this.holdings[index].bookValue * 100).toFixed(2)
  }

}

