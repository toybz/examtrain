import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { StudyPagePage } from "./study-page.page";

const routes: Routes = [

    {
        path: "",
        component: StudyPagePage
    } ,


    {
      //select exam, subject, topic etc
        path: "select-study",
        component: StudyPagePage
    } ,

    {
      //study materials page.Pdf, Video, article.Contains link to test yourself on current studying topic--leads to quiz page
        path: "view",
        component: StudyPagePage
    } ,

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudyPagePage]
})
export class StudyPagePageModule {}
