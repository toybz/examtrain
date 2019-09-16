import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { HistoryPagePage } from "./history-page.page";
import {SharedComponentsModule} from "../../shared-components/shared-components.module";

const routes: Routes = [
  {
    path: "",
    component: HistoryPagePage
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
  declarations: [HistoryPagePage]
})
export class HistoryPagePageModule {}
