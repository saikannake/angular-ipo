import { IPODataModel } from './../../../model/ipointerface';
import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/shared/ipo.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

  dataSource = new MatTableDataSource<IPODataModel>();
  displayedColumns: string[] = ['debtname', 'debtminlot', 'debtmarketlot', 'debtfacevalue', 'debtprice', 'debtenddate', 'debtaction'];


  constructor(private ipoService: IpoService) { }


  ngOnInit() {
    this.ipoService.getDebtIPOData()
      .subscribe((data: IPODataModel[]) => {
          this.dataSource.data = data['debtipo_data'];
          console.log("debt data", this.dataSource.data)
      });
  }


}
