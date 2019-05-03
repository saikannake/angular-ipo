import { IpoService } from './../../shared/ipo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'enterdetails',
  templateUrl: './enterdetails.component.html',
  styleUrls: ['./enterdetails.component.css']
})
export class EnterdetailsComponent implements OnInit {

  // @Output() enterData = new EventEmitter();

  private registrationData = {};
//   selectedLevel;
//   data:Array<Object> = [
//     {id: 0, name: "CSDL"},
//     {id: 1, name: "NSDL"}
// ];

  constructor(private router: Router, private ipoService: IpoService) { }

  ngOnInit() {
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

   this.router.navigate(['/confirmdetails']);
   this.ipoService.getEnteredData(this.registrationData);

    // console.log(registrationData);
  //  this.enterData.emit(registrationData);
  }


}
