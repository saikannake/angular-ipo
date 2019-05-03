import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPODataModel } from '../model/ipointerface';


@Injectable({
  providedIn: 'root'
})

export class IpoService {

  private myformdata = {};



  private equityIpos =  './assets/ipo_data.json';
  private debtipos = './assets/debtipo_data.json';



  constructor(private http: HttpClient) { }


  getIPOData() {
    return this.http.get<IPODataModel[]>(this.equityIpos);
  }


  getDebtIPOData() {
    return this.http.get<IPODataModel[]>(this.debtipos);
  }

  getConformData(){
    return {...this.myformdata};
  }

  getOtpData(){
    return {...this.myformdata};
  }

  getReceiptData(){
    return {...this.myformdata};
  }

  getEnteredData(data){
    this.myformdata = data;
    console.log("enterDatail",this.myformdata);
  }

}
