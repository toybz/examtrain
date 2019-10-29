import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { ViewTutorialComponent } from "./view-tutorial.component";
import {SharedComponentsModule} from "../../../shared-components/shared-components.module";

//study materials page  Pdf, Video, article.Contains link to test yourself on current studying topic--leads to quiz page


const routes: Routes = [

    {
        path: "",
        component: ViewTutorialComponent
    }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      SharedComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ ViewTutorialComponent] ,
  entryComponents: [ ViewTutorialComponent]
})
export class ViewTutorialModule {}
