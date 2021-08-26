import { Component, OnInit } from '@angular/core';
import { AccountDataService } from 'src/services/account-data.service';
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
  error = null;

  constructor(private accountDataService:AccountDataService) { }

  ngOnInit(): void {
    this.makeServiceCall();
  }

  makeServiceCall(){
    // we call the service method by subscribing to it
    // remember the api call will be async so subscribing responds when it returns
    // this.typicodeService.getApiData({category:this.category, id:this.id})
    this.accountDataService.getApiData()
      .subscribe( (data:any)=>{
        this.error = null;
        for (let account of data) {
          if (account.accountType == "Cash") {
            this.cashAccounts.push(account);
            this.cashAccountsTotal += account.cashValue;
          } else {
            this.investmentAccounts.push(account)
            fo
            this.investmentAccountsTotal += account.cashValue;
          }
        }
        this.accountDataService.getMarketValuesOfOwnedAssets(['TSLA', 'GME'])
          .subscribe((data:any)=> {
            console.log(data)
          })
      }, (error:any) => {
        this.error = error.status
      })
  }
}
