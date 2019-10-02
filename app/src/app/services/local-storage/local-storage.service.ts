import { Injectable } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";
import {BehaviorSubject, ReplaySubject} from "rxjs/index";
import {log} from "util";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  completedQuiz = new ReplaySubject(1);
  pausedQuiz = new BehaviorSubject({})
  other_data = new ReplaySubject(1);


  constructor(private localStorage: LocalStorage) {
    this.localStorage.getItem("completed_quiz").subscribe((quiz: any) => {
      if (quiz) {
        this.completedQuiz.next(quiz);
      } else {
        this.completedQuiz.next([]);
        this.localStorage.setItemSubscribe("completed_quiz", []);
      }
    });

    this.localStorage.getItem("paused_quiz").subscribe((quiz: any) => {
      if (quiz) {
        this.pausedQuiz.next(quiz);
      } else {
        this.pausedQuiz.next({});
        this.localStorage.setItemSubscribe("paused_quiz", {});
      }
    });
    // @ts-ignore
    this.localStorage.getItem("others").subscribe((others: any) => {
      if (others) {
        this.other_data.next(others);
      } else {
        this.other_data.next({
          first_time: true,
          show_memes: true
        });
        // @ts-ignore
        this.localStorage.setItemSubscribe("others", {
          first_time: true,
          show_memes: true
        });
      }
    });
  }

  saveCompletedQuiz(param) {
    //console.log(param);

    this.localStorage.getItem("completed_quiz").subscribe((quiz: any) => {
      let new_data = [...quiz, param];
      this.localStorage.setItem("completed_quiz", new_data).subscribe(() => {
        this.completedQuiz.next(new_data);
      });
    });
  }

  getCompletedQuiz() {
    return this.completedQuiz;
  }


  savePausedQuiz(param) {
      this.pausedQuiz.next(param)
    this.localStorage.setItemSubscribe("paused_quiz", param)

      // @ts-ignore
    //  log('pause quizData' , param)
  }

  getPausedQuiz() {
    return this.pausedQuiz;
  }

  getOnePausedQuiz() {
    return this.localStorage.getItem("paused_quiz");
  }

  deletePausedQuiz() {
      /*this.pausedQuiz.next({});
    this.localStorage.setItemSubscribe("paused_quiz", {})*/


      this.savePausedQuiz({})
  }

  getDashboardData() {
    return this.completedQuiz;
  }

  saveOtherData(value) {
    this.localStorage.getItem("others").subscribe((other_data: any) => {
      let new_data = { ...other_data, ...value };
      this.localStorage.setItem("others", new_data).subscribe(() => {
        this.other_data.next(new_data);
      });
    });
  }

  getOtherData() {
    return this.other_data;
  }
}
