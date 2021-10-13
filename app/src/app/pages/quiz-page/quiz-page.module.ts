import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";

import {IonicModule} from "@ionic/angular";
import {RoundProgressModule} from "angular-svg-round-progressbar";

import {QuizPagePage} from "./quiz-page.page";

import {QuizReviewComponent} from "./quiz-review/quiz-review.component";
import {PausedComponent} from "./paused/paused.component";
import {AnswerExplanationComponent} from './answer-explanation/answer-explanation.component';

import {SharedComponentsModule} from "../../shared-components/shared-components.module";

const routes: Routes = [
  {
    path: "",
    component: QuizPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundProgressModule,
    SharedComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuizPagePage, QuizReviewComponent, PausedComponent, AnswerExplanationComponent],
  entryComponents: [QuizPagePage, QuizReviewComponent, PausedComponent , AnswerExplanationComponent]
})
export class QuizPagePageModule {}
