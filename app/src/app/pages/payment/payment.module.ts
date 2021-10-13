import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaymentPage } from './payment.page';
import { MakePaymentComponent } from './make-payment/make-payment.component';


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

  ],
  declarations: [PaymentPage, MakePaymentComponent]
})
export class PaymentPageModule {}
