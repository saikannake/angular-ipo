import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'hsbaregistration',
  templateUrl: './hsbaregistration.component.html',
  styleUrls: ['./hsbaregistration.component.css']
})
export class HsbaregistrationComponent implements OnInit {

   registrationData = {};


  display(registrationData) {
    console.log(registrationData);

}

  constructor() { }

  ngOnInit() {
  }

}
