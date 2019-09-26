import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedPageRoutingModule } from './feed-page-routing.module';
import { FeedsComponent } from './feeds/feeds.component';
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [FeedsComponent],
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
    FeedPageRoutingModule
  ]
})
export class FeedPageModule { }
