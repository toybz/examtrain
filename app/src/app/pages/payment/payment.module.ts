import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaymentPage } from './payment.page';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { Angular4PaystackModule } from 'angular4-paystack';


const routes: Routes = [
  {
    path: '',
    component: PaymentPage
  } ,
  {
    path: 'pay',
    component: MakePaymentComponent
  } ,

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  //  Angular4PaystackModule.forRoot('pk_test_xxxxxxxxxxxxxxxxxxxxxxxx')
  ],
  declarations: [PaymentPage, MakePaymentComponent]
})
export class PaymentPageModule {}
