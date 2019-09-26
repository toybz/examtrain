import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {path} from "@angular-devkit/core";
import {FeedsComponent} from "./feeds/feeds.component";

const routes: Routes = [
    {path: '',
    component: FeedsComponent} ,
    {path: '/:id',
        component: FeedsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedPageRoutingModule { }
