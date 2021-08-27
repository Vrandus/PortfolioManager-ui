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

      let  tickers1:Set<any> = new Set();
      for (let quote of data.finance.result[0].quotes) {
        tickers1.add(quote.symbol);
      }
      var i=0;
      console.log(tickers1)
      this.tickerdataService.getTickerData(Array.from(tickers1))
          .subscribe((data:any) => {
            console.log(data);
            for (let x of data.quoteResponse.result) {
              this.gaintickerInfoShortName[i]=x.shortName;
              this.gaintickerInfoFiftyDayAverageChangePercent[i++]=Math.abs(x.fiftyDayAverageChangePercent.toFixed(4));
            }
      });

      let  tickers2:Set<any> = new Set();
      for (let quote of data.finance.result[1].quotes) {
        tickers2.add(quote.symbol);
      }
      console.log(tickers2)
      var p=0;
      this.tickerdataService.getTickerData(Array.from(tickers2))
          .subscribe((data:any) => {
            console.log(data);
            for (let y of data.quoteResponse.result) {
              this.losetickerInfoShortName[p]=y.shortName;
              this.losetickerInfoFiftyDayAverageChangePercent[p++]=y.fiftyDayAverageChangePercent.toFixed(4);
            }
      });
    });
  }

  makeServiceCall(){
    this.moversdataService.getMoversData(this.paramObj).subscribe((data:any)=>{
      console.log(data);
    })  
  }

}
