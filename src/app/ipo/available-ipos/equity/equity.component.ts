import { IPODataModel } from './../../../model/ipointerface';
import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/shared/ipo.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'equity',
  templateUrl: './equity.component.html',
  styleUrls: ['./equity.component.css']
})
export class EquityComponent implements OnInit {

    dataSource = new MatTableDataSource<IPODataModel>();
    displayedColumns: string[] = ['name', 'type', 'lotsize', 'minprice', 'maxprice', 'enddate', 'action'];

  constructor(private ipoService: IpoService) { }

  ngOnInit() {
    this.ipoService.getIPOData()
      .subscribe((data: IPODataModel[]) => {
        this.dataSource.data = data['ipo_data'];
        console.log("equity data",this.dataSource.data);
      });
  }


}
