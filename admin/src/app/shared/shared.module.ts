import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ThemeModule} from "../@theme/theme.module";
import {
  NbAccordionModule,
  NbActionsModule, NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbPopoverModule,
  NbRadioModule,
  NbRouteTabsetModule, NbSearchModule,
  NbSelectModule,
  NbStepperModule,
  NbTabsetModule,
  NbUserModule
} from "@nebular/theme";
import {FormsRoutingModule} from "../pages/template/forms/forms-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxFloatButtonModule} from "ngx-float-button";
import {NgxFabModule} from "ngx-fab";

const SHARED_MODULES = [
  CommonModule,
  ThemeModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbActionsModule,
  NbUserModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbSelectModule,
  NbIconModule,
  FormsModule,
  ReactiveFormsModule,
  ThemeModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbCardModule,
  NbButtonModule,
  NbListModule,
  NbAccordionModule,
  NbUserModule,
  NbCardModule,
  NbPopoverModule,
  NbSearchModule,
  NbIconModule,
  NbAlertModule,
  ThemeModule,
  NbIconModule,
  NgxFabModule,

]

@NgModule({
  declarations: [],
  imports: SHARED_MODULES ,
  exports: SHARED_MODULES

})
export class SharedModule { }
