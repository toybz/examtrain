import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { QuizSetupPagePage } from "./quiz-setup-page.page";

const routes: Routes = [
  {
    path: "",
    component: QuizSetupPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuizSetupPagePage]
})
export class QuizSetupPagePageModule {}
