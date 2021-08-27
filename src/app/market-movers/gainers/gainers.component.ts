import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.css']
})
export class GainersComponent implements OnInit, AfterViewInit {

  @Input() gainers = {quotes:[{ symbol:''}]};
  tickerColor = ['primary','secondary','success','info','warning'];

  @Input() tickerInfoShortName = ['','','','',''];
  @Input() tickerInfoFiftyDayAverageChangePercent=[2.00,3.00,4.00,5.00,6.00];

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
  }

}
