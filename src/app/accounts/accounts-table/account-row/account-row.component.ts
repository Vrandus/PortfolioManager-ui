import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-row',
  templateUrl: './account-row.component.html',
  styleUrls: ['./account-row.component.css']
})
export class AccountRowComponent implements OnInit {

  @Input() bankName:string = '';
  @Input() accountType:string = '';
  @Input() cashValue:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
