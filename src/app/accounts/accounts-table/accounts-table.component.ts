import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.css']
})
export class AccountsTableComponent implements OnInit {


  @Input() accounts:Array<any> = [];
  @Input() isCash:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
