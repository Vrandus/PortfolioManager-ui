import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-losers',
  templateUrl: './losers.component.html',
  styleUrls: ['./losers.component.css']
})
export class LosersComponent implements OnInit {

  @Input() losers = {quotes:[{ symbol:''}]};
  tickerColor = ['success','warning','info','primary','secondary'];

  @Input() tickerInfoShortName = ['','','','',''];
  @Input() tickerInfoFiftyDayAverageChangePercent=[2.00,3.00,4.00,5.00,6.00];

  constructor() { }

  ngOnInit(): void {
  }

}
