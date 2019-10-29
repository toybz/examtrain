import { Component, OnInit } from '@angular/core';
import {FeedsService} from "../../../services/feeds.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  feed

  constructor(private feedService: FeedsService, public route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

      let feed_id = this.route.snapshot.params.id
      this.feed =  this.feedService.getFeed(feed_id)

  }

    goBack(){
        this.router.navigate([
            `/tabs/feed/`
        ]);

    }


}
