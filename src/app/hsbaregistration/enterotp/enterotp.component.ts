import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/shared/ipo.service';


@Component({
  selector: 'enterotp',
  templateUrl: './enterotp.component.html',
  styleUrls: ['./enterotp.component.css']
})
export class EnterotpComponent implements OnInit {

  private otpdata: {};

  constructor(private router: Router, private ipoService: IpoService) { }

  ngOnInit() {
    this.otpdata = this.ipoService.getOtpData();
    console.log("otpdata",this.otpdata);
  }
  onSubmit(){
    this.router.navigate(['/receipt']);
  }


}
