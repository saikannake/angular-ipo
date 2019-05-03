import { EnterdetailsComponent } from './../enterdetails/enterdetails.component';
import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/shared/ipo.service';
import { Router } from '@angular/router';



@Component({
  selector: 'confirmdetails',
  templateUrl: './confirmdetails.component.html',
  styleUrls: ['./confirmdetails.component.css']
})
export class ConfirmdetailsComponent implements OnInit {

  // @Input() registrationData;

  private conformData;

  constructor(private ipoService: IpoService, private router: Router) { }

  ngOnInit() {
    this.conformData = this.ipoService.getConformData();
    console.log("conformdata",this.conformData);
  }
  onSubmit(){
    this.router.navigate(['/enterotp']);
  }

}
