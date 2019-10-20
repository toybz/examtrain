import { Component, OnInit } from "@angular/core";
import { QuizService } from "../../services/quiz/quiz.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

import {
    AlertController,
    LoadingController,
    ModalController,
    PopoverController
} from "@ionic/angular";
import { QuizReviewComponent } from "./quiz-review/quiz-review.component";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import { PausedComponent } from "./paused/paused.component";
import { UtilsService } from "../../services/utils/utils.service";
import { MemesService } from "./memes.service";

@Component({
  selector: "app-quiz-page",
  templateUrl: "./quiz-page.page.html",
  styleUrls: ["./quiz-page.page.scss"]
})
export class QuizPagePage implements OnInit {
  current_page;
  quiz_config;
  questions$: Observable<any>;
  questions: any;
  navigationSubscription;
  countdown: number;
  // source = interval(1000);
  counter;
  quiz_time;
  progress_color;
  page_ready = false;
  paused = false;

  start_with_existing_data;
  existing_data;
  showPausedComponet;

  //initialize all in init

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private modalController: ModalController,
    public loadingController: LoadingController,
    private localStorage: LocalStorageService,
    private util: UtilsService,
    public popoverController: PopoverController,
    public memesService: MemesService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.initialise();
  }

  initialise() {
    console.log("ngIni Called");

    this.start_with_existing_data = false;
    this.existing_data = {};

    this.showPausedComponet = false;


      this.showLoadingBar().then(data => {


    this.localStorage.getOnePausedQuiz().subscribe(paused_quiz => {
      //paused_quiz = quiz

      console.log(paused_quiz);

      if (!this.util.isEmptyObject(paused_quiz)) {
        console.log("Found Paused Quiz" + paused_quiz);
        this.start_with_existing_data = true;
        this.existing_data = paused_quiz;
      } else {
        console.log("No Paused Quiz, next line");
      }

      this.questions = this.start_with_existing_data
        ? this.existing_data.questions
        : [];

      console.log(this.questions);

      this.paused = this.start_with_existing_data ? false : false;


        this.current_page = this.start_with_existing_data
            ? this.existing_data.current_index
            : 0;

        this.quiz_config = this.start_with_existing_data
            ? this.existing_data.quiz_config
            : {
                type: "",
                subject: "",
                amount: 0
            };


        this.quiz_time = this.start_with_existing_data
            ? this.existing_data.quiz_config.amount * 10
            : this.quiz_config.amount * 10;
        this.countdown = this.start_with_existing_data
            ? this.existing_data.countdown
            : this.quiz_config.amount * 10;



        let dismiss = ()=>{
            this.page_ready = true;
            data.dismiss().then(() => {
                this.countdownController("start");
                this.showPausedComponet = this.quizService.getInstantStartWithPausedQuiz();
                if (this.showPausedComponet && this.start_with_existing_data) {
                    this.pauseQuiz();
                }
            });
        }




        if (this.start_with_existing_data) {
            dismiss()
        }

        else{

     this.questions$ = this.route.paramMap.pipe(
            switchMap((params: any) => {
              this.quiz_config.type = params.get("exam_type");
              this.quiz_config.subject = params.get("subject");
              this.quiz_config.amount = parseInt(params.get("amount"));
                this.quiz_config.year = parseInt(params.get("year"));


              this.quiz_time = this.quiz_config.amount * 10;
                this.countdown = this.quiz_config.amount * 10;



                return this.quizService.fetchQuizQuestions(
                this.quiz_config.type,
                this.quiz_config.subject,
                this.quiz_config.amount,
                  this.quiz_config.year,
              );
            })
          );

          this.questions$.subscribe(
              response => {
              this.questions = response.data;
            console.log( this.questions );

            /*  data_example = {answer: "c"
                  examtype: "utme"
                  examyear: "2002"
                  id: 45
                  image: ""
                  option: {a: "4 moles of chlorine", b: "3 moles of ozone", c: "1 mole of butane", d: "7 moles of argon"}
                  question: "Which of the following gases contains the least number of atoms at s.t.p"
                  section: ""
                  solution: ""}*/

            this.questions.map(question => {

            let  options = Object.values(question.option) ;
          question.correct_answer = question.option[question.answer]

                question.question = question.section ? `(${  question.section[0].toUpperCase() + question.section.substring(1)    })  <br/>  ${question.question}` : question.question


           question.type = '' , question.category = '' , question.difficulty = '';


              question.options = this.reArrangeOptions(options);
            });

            dismiss()
          } ,
              async ()=>{
                   this.loading .dismiss();

                  const alert = await this.alertController.create({
                      message: 'Something went wrong.Please try again',
                      backdropDismiss: false
                  });
                  await alert.present();

                  setTimeout( ()=> {
                      alert.dismiss()
this.router.navigate(['tabs/quiz'])

                  } , 2000)
              });
        }




      });


    });
  }

  loading
  async showLoadingBar() {
     this.loading = await this.loadingController.create({
      message: "Loading",
      animated: true,
      showBackdrop: true
    });
    await this.loading .present();
    return this.loading ;
  }

  countdownController(operation) {
    switch (operation) {
      case "start":
        this.counter = setInterval(() => {
          console.log(this.countdown);
          if (this.countdown == 0) {
            this.submitQuiz();
          }

          var mid_time = this.quiz_time / 2;
          var quater_time = this.quiz_time / 4;

          if (this.countdown > mid_time) {
            this.progress_color = "#278A09";
          } else if (
            this.countdown < mid_time &&
            this.countdown > quater_time
          ) {
            this.progress_color = "#BF9513";
          } else {
            this.progress_color = "#A80B10";
          }

          if (!this.paused) {
            this.countdown--;
          }
        }, 1000);

        break;
      case "pause":
        break;

      case "stop":
        break;
    }
  }

  async submitQuiz() {
    this.localStorage.deletePausedQuiz();
    clearInterval(this.counter);
    this.counter = null;

    let correct_answers_count = 0;
    this.questions.map(question => {
      if (question.correct_answer == question.selected_answer) {
        correct_answers_count++;
      }
    });

    this.localStorage.saveCompletedQuiz({
      correct_answers_count: correct_answers_count,
      questions: this.questions,
      quiz_config: this.quiz_config,
      date_time: Date.now()
    });
    const review_modal = await this.modalController.create({
      component: QuizReviewComponent,
      componentProps: {
        correct_answers_count: correct_answers_count,
        questions: this.questions,
        quiz_config: this.quiz_config
      },
      animated: true
    });

    review_modal.onDidDismiss().then(res => {
      console.log(res);

      if (res.data.action == "reload") {
        this.page_ready = false;
        this.initialise();
      } else if (res.data.action == "new_quiz") {
        this.router.navigate(["/tabs/quiz/"]);
      } else if (res.data.action == "dashboard") {
        this.router.navigate(["/tabs/dashboard/"]);
      }
    });

    return await review_modal.present();
  }

  goNext() {
    if (this.paused) {
      return false;
    }

    if (this.current_page + 1 == this.quiz_config.amount) {
      this.submitQuiz();
      return false;
    }

    this.current_page++;
  }

  goPrev() {
    if (this.paused) {
      return false;
    }

    this.current_page--;
  }

  async pauseQuiz() {
    //Pause Quiz
    this.paused = true;

    let paused_meta = {
      countdown: this.countdown,
      current_index: this.current_page,
      quiz_config: this.quiz_config,
      questions: this.questions
    };

    const pause_quiz_modal = await this.popoverController.create({
      component: PausedComponent,
      componentProps: {
        data: paused_meta
      },
      animated: true,
      translucent: true,
      backdropDismiss: false,
      showBackdrop: true
    });

    pause_quiz_modal.onDidDismiss().then(res => {
      console.log(res);

      if (res.data.action == "reload") {
        clearInterval(this.counter);
        this.counter = null;
        this.page_ready = false;
        this.initialise();
      } else if (res.data.action == "resume") {
        this.paused = false;
      }
      else if (res.data.action == "submit") {
          this.submitQuiz()
      }
      else if (res.data.action == "navigateToDashboard") {
        clearInterval(this.counter);
        this.counter = null;

        this.router.navigate(["/tabs/dashboard"]);
      }
    });

    return await pause_quiz_modal.present();
  }

  reArrangeOptions(options: any) {
    let re_arranged_options = options.sort();

    return re_arranged_options;
  }

    custom_navigator: any = window.navigator;


  setAnswer(question_index, selected_option) {

      if (this.custom_navigator.vibrate ) {
         let vibrate = this.custom_navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500]);
          console.log('vibrate', vibrate)
      }


      this.questions[question_index].selected_answer = selected_option;

    setTimeout(() => {
      this.goNext();
    }, 800);
  }

  getOptionColor(option) {
    let current_question = this.questions[this.current_page];

    //answer has been selected
    if (current_question.selected_answer) {
      if (option == current_question.selected_answer) {
        if (option == current_question.correct_answer) {
          return "success";
        } else {
          return "danger";
        }
      }
      if (option == current_question.correct_answer) {
        return "success";
      }
    } else {
      return "";
    }
  }
}
