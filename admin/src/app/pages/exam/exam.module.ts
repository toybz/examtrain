import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam/exam.component';
import { AddExamComponent } from './add-exam/add-exam.component';

@NgModule({
  declarations: [ExamComponent, AddExamComponent],
  imports: [
    CommonModule,
    ExamRoutingModule
  ]
})
export class ExamModule { }
