import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SignUpPagePage } from "./sign-up-page.page";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: "",
    component: SignUpPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
     FormsModule,
      HttpClientModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignUpPagePage]
})
export class SignUpPagePageModule {}
