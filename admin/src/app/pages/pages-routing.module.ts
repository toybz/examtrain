import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './template/e-commerce/e-commerce.component';
import { NotFoundComponent } from './template/miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },

    {
      path: 'exam',
      loadChildren: () => import('./exam/exam.module')
        .then(m => m.ExamModule),
    },


    {
      path: 'forms',
      loadChildren: () => import('./template/forms/forms.module')
        .then(m => m.FormsModule),
    },

    {
      path: '',
      redirectTo: 'exam',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
