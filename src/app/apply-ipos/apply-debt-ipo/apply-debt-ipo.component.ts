import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apply-debt-ipo',
  templateUrl: './apply-debt-ipo.component.html',
  styleUrls: ['./apply-debt-ipo.component.css']
})
export class ApplyDebtIpoComponent implements OnInit {

selectInvestor = ['Shruti Shetty','Sainath kannake'];
investorCategory = ['Employee1', 'Employee2'];
debitAccountNumber = ['Current-xxxxxxx310','Saving-xxxxxxx452'];

  // debt-ipo-detail= [
  //   selectInvestor:{
  //     key1: ,
  //     key2: 
  //   },
  //   {
  //     investorCategory:{
  //       key1: '',
  //       key2: ''
  //     },
  //     debitAccountNumber: {
  //       key: 
  //       key2: 
  //     }
  //   }
  // ]

  constructor() { }

  ngOnInit() {
  }

}
