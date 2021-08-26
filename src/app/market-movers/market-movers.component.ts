import { Component, OnInit } from '@angular/core';
import { GainersComponent } from './gainers/gainers.component';
import { LosersComponent } from './losers/losers.component';

@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
