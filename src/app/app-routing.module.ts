import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpoComponent } from './ipo/ipo.component';
// import { IpodataComponent } from './ipo/ipodata/ipodata.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './ipo/services/services.component';
import { HsbaregistrationComponent } from './hsbaregistration/hsbaregistration.component';
import { EnterdetailsComponent } from './hsbaregistration/enterdetails/enterdetails.component';
import { ConfirmdetailsComponent } from './hsbaregistration/confirmdetails/confirmdetails.component';
import { EnterotpComponent } from './hsbaregistration/enterotp/enterotp.component';
import { ReceiptComponent } from './hsbaregistration/receipt/receipt.component';
import { RegistrationComponent } from './registration/registration.component';
import { ApplyIposComponent } from './apply-ipos/apply-ipos.component';
import { ApplyEquityIpoComponent } from './apply-ipos/apply-equity-ipo/apply-equity-ipo.component';
import { ApplyDebtIpoComponent } from './apply-ipos/apply-debt-ipo/apply-debt-ipo.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'ipo', component: IpoComponent},
  // { path: 'ipodata', component: IpodataComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'hsbaregistration', component: HsbaregistrationComponent },
  { path: 'enterdetails', component: EnterdetailsComponent },
  { path: 'confirmdetails', component: ConfirmdetailsComponent },
  { path: 'enterotp', component: EnterotpComponent},
  { path: 'receipt', component:ReceiptComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'apply-ipos', component: ApplyIposComponent },
  { path: 'apply-debt-ipo', component: ApplyDebtIpoComponent },
  { path: 'apply-equity-ipo', component: ApplyEquityIpoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
