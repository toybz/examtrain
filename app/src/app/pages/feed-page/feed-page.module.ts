import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedPageRoutingModule } from './feed-page-routing.module';
import { FeedsComponent } from './feeds/feeds.component';
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import { DetailsComponent } from './details/details.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [FeedsComponent, DetailsComponent],
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
    FeedPageRoutingModule
  ]
})
export class FeedPageModule { }
