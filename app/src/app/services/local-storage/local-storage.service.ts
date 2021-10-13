import { Injectable } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";
import {BehaviorSubject, ReplaySubject} from "rxjs/index";
import {log} from "util";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {save_quiz} from "../urls";
import {ConfigService} from "../config.service";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  completedQuiz = new ReplaySubject(1);
  pausedQuiz = new BehaviorSubject({})
  other_data = new ReplaySubject(1);
  user = new BehaviorSubject({})
  demoQuizCounter = new BehaviorSubject({});


  constructor(private localStorage: LocalStorage, private http: HttpClient, private configService: ConfigService) {
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
          show_memes: true,
            has_shared: false,
          max_question_count: this.configService.DEFAULT_MAX_QUESTION
        });
        // @ts-ignore
        this.localStorage.setItemSubscribe("others", {
          first_time: true,
          show_memes: true,
            has_shared: false,
          max_question_count: this.configService.DEFAULT_MAX_QUESTION
        });
      }
    });


      this.localStorage.getItem("user").subscribe((user: any) => {
          if (user) {
         //   user.subscription.status = true; //testing only
            this.user.next(user);
          }
          else {

            this.user.next({
              signed_in: false,
              subscription: {
                status: false,
                start_date: null,
                end_date: null,
                package_id: 0
              },
            });

            // @ts-ignore
            this.localStorage.setItemSubscribe("user", {
              signed_in: false,
              subscription: {
                status: false,
                start_date: null,
                end_date: null,
                package_id: 0
              },
            });

          }
      });


    this.localStorage.getItem("demo_played_quiz").subscribe((quizCounter: any) => {
      if (quizCounter) {
        this.demoQuizCounter.next(quizCounter);
      } else {
        let todaysDate = new Date().toDateString().split(' ').join('_') // get date from date object
        let playedQuiz = {
          [todaysDate]: 0
        }

        this.demoQuizCounter.next(playedQuiz);
        this.localStorage.setItemSubscribe("demo_played_quiz", playedQuiz);

      }
    });

  }

  saveCompletedQuiz(param) {
    console.log(param);


     /* {"quiz": {
          "subject_id" : "1",
              "exam_id" : "3",
              "year" : "2019",
              "questions": [],
              "correct_answers_count" : "9",
              "question_count" : "10",
              "quiz_config" : {
              "subject_id" : 1,
                  "subject_name": "Maths",
                  "exam_id" : 3,
                  "exam_name": "Jamb",
                  "year" : 2016,
                  "question_count": 20

          }
      }
      }
*/


     this.http.post(save_quiz , {quiz :param }).subscribe();


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


  saveUser(value) {
    let curUserValue = this.user.value
    let updatedUserValue = {...curUserValue, ...value}
    this.localStorage.setItem("user", updatedUserValue).subscribe(() => {
      this.user.next(updatedUserValue);
    });
  }

  getUser() {
    return this.user;
  }

  saveDemoPlayedQuiz(value: {}) {
    this.localStorage.setItem("demo_played_quiz", value).subscribe(() => {
      this.demoQuizCounter.next(value);
    });
  }

  getDemoPlayedQuiz() {
    return this.demoQuizCounter
  }

}
