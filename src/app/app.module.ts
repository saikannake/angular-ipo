// import { IpodataComponent } from './ipo/ipodata/ipodata.component';
import { MaterialModule } from './model/material.modul';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IpoService } from './shared/ipo.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';


import { WithdrawEnquiryComponent } from './withdraw-enquiry/withdraw-enquiry.component';
import { BidDetailsComponent } from './withdraw-enquiry/bid-details/bid-details.component';
import { CapitalIndiaFinanceComponent } from './withdraw-enquiry/capital-india-finance/capital-india-finance.component';
import { InvestorDetailsComponent } from './withdraw-enquiry/investor-details/investor-details.component';

import { IpoComponent } from './ipo/ipo.component';
import { AppliedIposComponent } from './ipo/applied-ipos/applied-ipos.component';

import { AvailableIposComponent } from './ipo/available-ipos/available-ipos.component';
import { DebtComponent } from './ipo/available-ipos/debt/debt.component';
import { EquityComponent } from './ipo/available-ipos/equity/equity.component';
import { ServicesComponent } from './ipo/services/services.component';

import { HsbaregistrationComponent } from './hsbaregistration/hsbaregistration.component';
import { EnterdetailsComponent } from './hsbaregistration/enterdetails/enterdetails.component';
import { ConfirmdetailsComponent } from './hsbaregistration/confirmdetails/confirmdetails.component';
import { EnterotpComponent } from './hsbaregistration/enterotp/enterotp.component';
import { ReceiptComponent } from './hsbaregistration/receipt/receipt.component';
import { RegistrationComponent } from './registration/registration.component';
import { ApplyIposComponent } from './apply-ipos/apply-ipos.component';
import { ApplyDebtIpoComponent } from './apply-ipos/apply-debt-ipo/apply-debt-ipo.component';
import { ApplyEquityIpoComponent } from './apply-ipos/apply-equity-ipo/apply-equity-ipo.component';


@NgModule({
  declarations: [
    // IpodataComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    NavBarComponent,

    HsbaregistrationComponent,
    EnterdetailsComponent,
    ConfirmdetailsComponent,
    EnterotpComponent,
    ReceiptComponent,

    IpoComponent,
    AppliedIposComponent,
    AvailableIposComponent,
    EquityComponent,
    DebtComponent,
    ServicesComponent,

    WithdrawEnquiryComponent,
    BidDetailsComponent,
    CapitalIndiaFinanceComponent,
    InvestorDetailsComponent,
    RegistrationComponent,
    ApplyIposComponent,
    ApplyDebtIpoComponent,
    ApplyEquityIpoComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    IpoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
