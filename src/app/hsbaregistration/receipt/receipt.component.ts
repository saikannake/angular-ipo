import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/shared/ipo.service';

@Component({
  selector: 'receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  private receiptdata:{};

  constructor(private ipoService: IpoService) { }

  ngOnInit() {
    this.receiptdata = this.ipoService.getReceiptData();
    console.log("receipt data",this.receiptdata);
  }

}
