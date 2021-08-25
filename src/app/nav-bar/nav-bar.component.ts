import { Component, OnInit } from '@angular/core';
import { AccountsComponent } from '../accounts/accounts.component';
import { NetWorthComponent } from '../net-worth/net-worth.component';
import { MarketMoversComponent } from '../market-movers/market-movers.component';
import { InsightsComponent } from '../insights/insights.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  active = 1;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
