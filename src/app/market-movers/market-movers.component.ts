import { Component, OnInit } from '@angular/core';
import { GainersComponent } from './gainers/gainers.component';
import { LosersComponent } from './losers/losers.component';
import { MoversdataService } from 'src/services/moversdata.service';
import { TickerdataService } from 'src/services/tickerdata.service';

@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {
  moversData = { 
                  finance:{
                    result:[ {quotes:[{ symbol:''}]},{quotes:[{ symbol:''}]},{quotes:[{ symbol:''}]} ]
                  }
                };
  paramObj = {region:'US'};

  gaintickerInfoShortName = ['','','','',''];
  gaintickerInfoFiftyDayAverageChangePercent=[0.00,0.00,0.00,0.00,0.00];

  losetickerInfoShortName = ['','','','',''];
  losetickerInfoFiftyDayAverageChangePercent=[0.00,0.00,0.00,0.00,0.00];

  constructor(private moversdataService: MoversdataService, private tickerdataService: TickerdataService) { }

  ngOnInit(): void {
    this.moversdataService.getMoversData(this.paramObj).subscribe((data:any)=>{
      console.log(data);
      this.moversData = data;
      var i=0;
      for (let quote of data.finance.result[0].quotes) {
        this.tickerdataService.getTickerData({ticker:quote.symbol}).subscribe((data:any)=>{
          console.log(data);
          console.log(data.quoteResponse.result[0].shortName);
          this.gaintickerInfoShortName[i++]=data.quoteResponse.result[0].shortName;
          this.gaintickerInfoFiftyDayAverageChangePercent[i++]=data.quoteResponse.result[0].fiftyDayAverageChangePercent.toFixed(4);
          });
        }
      i=0;
      for (let quote of data.finance.result[1].quotes) {
        this.tickerdataService.getTickerData({ticker:quote.symbol}).subscribe((data:any)=>{
          console.log(data);
          console.log(data.quoteResponse.result[0].shortName);
          this.losetickerInfoShortName[i++]=data.quoteResponse.result[0].shortName;
          this.losetickerInfoFiftyDayAverageChangePercent[i++]=data.quoteResponse.result[0].fiftyDayAverageChangePercent.toFixed(4);
          });
        }
    });
  }

  makeServiceCall(){
    this.moversdataService.getMoversData(this.paramObj).subscribe((data:any)=>{
      console.log(data);
    })  
  }

}
