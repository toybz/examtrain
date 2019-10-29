import { Component, OnInit } from '@angular/core';
import {FeedsService} from "../../../services/feeds.service";

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {



  feeds

  constructor(private feedService: FeedsService) { }


  ngOnInit() {

    this.feeds = Object.values(this.feedService.getAllFeeds())

  }

}
