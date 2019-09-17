import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExamComponent} from "./exam/exam.component";
import {AddExamComponent} from "./add-exam/add-exam.component";
import {ExamPages} from "./exam.components";

const routes: Routes = [
  {
    path: '',
    component: ExamPages,

    children: [
      {
        path: '',
        component: ExamComponent
      },
      {
        path: 'add_exam',
        component: AddExamComponent
      },
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule {
}
