import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsModule } from 'ng2-charts/ng2-charts';



import { DashboardPagePage } from './dashboard-page.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      ChartsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPagePage]
})
export class DashboardPagePageModule {}
