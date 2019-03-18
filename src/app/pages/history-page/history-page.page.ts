import { Component, OnInit, ViewChild } from "@angular/core";
import { LocalStorageService } from "../../services/local-storage.service";
import { IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-history-page",
  templateUrl: "./history-page.page.html",
  styleUrls: ["./history-page.page.scss"]
})
export class HistoryPagePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  completed_quiz;
  dataPerPage = 5;
  totalData;
  current_page = 1;
  page_loaded = false;
  //test more

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.completed_quiz = this.localStorage.getCompletedQuiz();
    this.completed_quiz.subscribe(completed_quiz => {
      console.log(completed_quiz);
      this.current_page = 1;
      this.totalData = completed_quiz.reverse();
      this.loadMore();
      this.page_loaded = true;
    });
  }

  loadData(event) {
    setTimeout(() => {
      console.log("Done");
      this.current_page++;
      this.loadMore();
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.completed_quiz.length == this.totalData.length) {
        event.target.disabled = true;
      }
    }, 2000);
  }

  loadMore() {
    this.completed_quiz = this.totalData.slice(
      0,
      this.current_page * this.dataPerPage
    );
  }

  /*
  todo: Fix the bug of data not showing at the bottom of the page
  Let the most recent data come first
  Use dynamic scroller so data come in 10 batches when scrolled to the bottom service gets more data
  Implemet sort and filter

  */
}
