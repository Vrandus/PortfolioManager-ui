import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionsService } from 'src/services/transactions.service';
import { YfinanceHistoryService } from 'src/services/yfinance-history.service'

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})
export class NetWorthComponent implements OnInit {

  transactionData = [] as any;
  transactionString = ""

  results : any = []
  // results : any = [{
  //   'name': 'Net Worth',
  //   'series' : [
  //   ]
  // }]

  tickerHistoricalData = {} as any;
  resultsStr = ""
  view: [number, number] = [1000, 500];
  isLoaded = false;
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = '$';
  timeline: boolean = true;
  customColors = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private transactionsService:TransactionsService, private yfinanceHistoryService: YfinanceHistoryService) {   }

  async ngOnInit(): Promise<void> {
    console.log('1')
   
    await this.subscribeToObserver()

    console.log('3')
    const tickers = this.getUniqueTickers()
    for (let ticker of tickers){
      this.tickerHistoricalData[ticker] = await this.getHistoricalDataOfTicker(ticker)
    }
    
    if (this.tickerHistoricalData !== undefined) {
      this.resultsStr = JSON.stringify(this.tickerHistoricalData)
      console.log('4')
      // console.log(this.resultsStr)
    }
    this.buildChartData()

    console.log('5')

  }

  async subscribeToObserver() {

    return new Promise<void>(async (resolve, reject) => {

      (await this.transactionsService.getTransactionData()).subscribe( (data:any )=>
      {
        this.transactionData = data
        console.log('2')
        for(let i in this.transactionData){
          let epoch = Date.parse(this.transactionData[parseInt(i)]['transactionTime'])
          this.transactionData[parseInt(i)]['transactionTime'] = (epoch-(epoch %1000))/1000
        }
        for (const obj of data) {
          let epoch = Date.parse(obj['transactionTime'])
          // this.results[0]['series'].push({"name" : (epoch-(epoch %1000))/1000, "value" : obj['units']})
        }
        // this.transactionString = JSON.stringify(this.transactionData)
        // console.log(this.transactionString)
        resolve()
      })
    })
  }


  buildChartData() {
    // console.log(this.tickerHistoricalData["GME"])
    const tickers = this.getUniqueTickers()
    for(let ticker of tickers){
      this.results.push({
        name: ticker,
        series: this.tickerHistoricalData[ticker]
      })
    }
    console.log(this.transactionData)
    for(let transaction of this.transactionData){
      let resultsPointer = 0;
      for(let result in this.results){
        if (this.results[parseInt(result)].name == transaction.ticker){
          resultsPointer = parseInt(result)
        }
      }
      if(transaction.transactionType == "BUY"){
        for(let i in this.results[resultsPointer].series){
          if(this.results[resultsPointer].series[parseInt(i)].name < transaction.transactionTime){
            this.results[resultsPointer].series[parseInt(i)].value = 0
          }
          if(this.results[resultsPointer].series[parseInt(i)].name >= transaction.transactionTime){
            this.results[resultsPointer].series[parseInt(i)].value = transaction.units * parseInt(this.results[resultsPointer].series[parseInt(i)].value)
          }
        }
      }
    }
    for (let i in this.results){
      for (let j in this.results[parseInt(i)].series){
        this.results[parseInt(i)].series[parseInt(j)].name = new Date(this.results[parseInt(i)].series[parseInt(j)].name * 1000)
      }
    }
    this.isLoaded = true;
    console.log(this.results)
  }

  getUniqueTickers(): string[] {
    let uniqueTickers = new Set<string>();
    for (let obj of this.transactionData){
      uniqueTickers.add(obj['ticker'])
    }
    return Array.from(uniqueTickers.values());
  }


  async getHistoricalDataOfTicker(ticker: string) {
    return new Promise<object>(async (resolve, reject) => {
      this.yfinanceHistoryService.getHistoricalDataOfTicker(ticker).subscribe((data: any)=>{
        let historicalDataBuilder = [] as any;
        for (let val in data.chart.result[0].timestamp){
          const i = parseInt(val)
  
  
          historicalDataBuilder.push({
            name: data.chart.result[0].timestamp[i],
            value: data.chart.result[0].indicators.quote[0].close[i]
          })
        }
        // console.log(historicalDataBuilder)
        resolve(historicalDataBuilder)
      })

    })

  }


  // constructor() {}
  // ngOnInit(): void {

  // }
}
