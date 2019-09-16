import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddSubTopicComponent } from './add-sub-topic/add-sub-topic.component';

@NgModule({
  declarations: [SubjectComponent, AddSubjectComponent, AddTopicComponent, AddSubTopicComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
