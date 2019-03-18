import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { RoundProgressModule } from "angular-svg-round-progressbar";

import { QuizPagePage } from "./quiz-page.page";
import { QuizSetupPagePage } from "../quiz-setup-page/quiz-setup-page.page";
import { QuizReviewComponent } from "./quiz-review/quiz-review.component";
import { RewardModalComponent } from "./reward-modal/reward-modal.component";
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
  declarations: [
    QuizPagePage,
    QuizReviewComponent,
    RewardModalComponent,
    PausedComponent
  ],
  entryComponents: [
    QuizPagePage,
    QuizReviewComponent,
    RewardModalComponent,
    PausedComponent
  ]
})
export class QuizPagePageModule {}
