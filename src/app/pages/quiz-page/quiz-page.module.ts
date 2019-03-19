import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { RoundProgressModule } from "angular-svg-round-progressbar";

import { QuizPagePage } from "./quiz-page.page";

import { QuizReviewComponent } from "./quiz-review/quiz-review.component";
import { PausedComponent } from "./paused/paused.component";

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
    RouterModule.forChild(routes)
  ],
  declarations: [QuizPagePage, QuizReviewComponent, PausedComponent],
  entryComponents: [QuizPagePage, QuizReviewComponent, PausedComponent]
})
export class QuizPagePageModule {}
