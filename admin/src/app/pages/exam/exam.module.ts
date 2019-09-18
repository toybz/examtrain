import { NgModule } from '@angular/core';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam/exam.component';
import { AddExamComponent } from './add-exam/add-exam.component';

import  {ExamPages} from "./exam.components";
import {SharedModule} from "../../shared/shared.module";
import { CurriculumComponent } from './curriculum/curriculum.component';

@NgModule({
  declarations: [ExamPages, ExamComponent, AddExamComponent, CurriculumComponent],
  imports: [
   SharedModule,
    ExamRoutingModule,
  ]
})
export class ExamModule { }
