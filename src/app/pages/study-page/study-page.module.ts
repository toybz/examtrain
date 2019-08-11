import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { StudyPagePage } from "./study-page.page";
import { ExploreComponent } from './explore/explore.component';
import { CompletedComponent } from './completed/completed.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { SafeUrl } from "@angular/platform-browser";
import { SafeUrlPipe } from "../../pipes/safe-url/safe-url.pipe";

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

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudyPagePage, ExploreComponent, CompletedComponent, InProgressComponent, SafeUrlPipe] ,
  entryComponents: [StudyPagePage, ExploreComponent, CompletedComponent, InProgressComponent ]
})
export class StudyPagePageModule {}
