import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/services/transactions.service';
@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})
export class NetWorthComponent implements OnInit {
  transactionData = {}
  transactionString = ""

  results = {}

  view: [number, number] = [300, 700];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  customColors = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private transactionsService:TransactionsService) { }

  ngOnInit(): void {
    this.transactionsService.getTransactionData().subscribe( (data:any )=>
    {
      this.transactionData = data
      this.transactionString = JSON.stringify(data)
    })
  }
  // constructor() {}
  // ngOnInit(): void {

  // }
}
