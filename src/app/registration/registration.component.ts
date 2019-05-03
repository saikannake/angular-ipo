import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpoService } from '../shared/ipo.service';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

  export class RegistrationComponent implements OnInit {

   


    private  pdDropdown = ['CSDL','NSDL'];
    private registrationData = {};
    private conformData =  {};
    private otpdata =  {};
    private receiptdata =  {};

    constructor(private router: Router, private ipoService: IpoService) { }



      


    ngOnInit() {
      // this.conformData = this.ipoService.getConformData()
      // console.log("conformdata",this.conformData);
      // this.otpdata = this.ipoService.getOtpData();
      // console.log("otpdata",this.otpdata);
      // this.receiptdata = this.ipoService.getReceiptData();
      // console.log("receipt data",this.receiptdata);
    }
   
    onSubmit(formData){
     this.registrationData = {
      dpName: formData.value.dpName,
      dpId: formData.value.dpid,
      clientId: formData.value.clientid,
      pan: formData.value.pan,
      investorName: formData.value.investorName,
      email: formData.value.email,
      mob: formData.value.mobile
     }
     this.ipoService.getEnteredData(this.registrationData);
     this.conformData = this.ipoService.getConformData();
     console.log("conformdata",this.conformData);
     this.otpdata = this.ipoService.getOtpData();
     console.log("otpdata",this.otpdata);
     this.receiptdata = this.ipoService.getReceiptData();
      console.log("receipt data",this.receiptdata);
    }
  }
