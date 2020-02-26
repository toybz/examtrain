import {Component, OnInit} from "@angular/core";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {UtilsService} from "../../services/utils/utils.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../services/quiz/quiz.service";
import {first} from "rxjs/operators";
import {LocalQuizService} from "../../services/local-quiz.service";
import {ConfigService} from "../../services/config.service";
import {UserService} from "../../services/user/user.service";

@Component({
    selector: "app-quiz-landing",
    templateUrl: "./quiz-landing.page.html",
    styleUrls: ["./quiz-landing.page.scss"]
})
export class QuizLandingPage implements OnInit {
    paused_quiz;
    data_loaded = false;
    quiz_journey_data = false;

    max_question_count = this.configService.DEFAULT_MAX_QUESTION

    customActionSheetOptions: any = {
        header: "Select Category  (Scroll Down For More)"
    };

    yearActionSheetOptions: any = {
        header: "2000 - 2013 (Scroll Down For More)"
    };

    questionNumberActionSheetOptions: any = {
        header: `Scroll Down For More (Subscribe To Increase To ${this.configService.SUBSCRIBE_USER_MAX_QUESTION})`
    };

  exam_years = ['2000', '2001', '2002', '2003', '2004',  '2005',"2006" ,'2007', '2008', '2009', '2010', '2011', '2012', '2013'];


    quiz_config = {
      type: "utme",
      subject: "english",
      amount: this.max_question_count,
      year: '2013'
  };

  exam_types = [];
  subjects = [];

    user
    isSignedIn
    isSubscribedUser = false
    /*getExamTypeDisplayName = this.quizService.getExamTypeDisplayName
    getSubjectDisplayName = this.quizService.getSubjectDisplayName*/

  constructor(
      private localStorage: LocalStorageService,
      private util: UtilsService,
      private router: Router,
      private route: ActivatedRoute,
      public quizService: QuizService,
      public configService: ConfigService,
      private userService: UserService
  ) {}



  ngOnInit(){

      const storedUser = this.userService.getUser()
      storedUser.subscribe((user: any) => {

          this.user = user
          this.isSignedIn = user.signed_in
      this.isSubscribedUser = user.subscription && user.subscription.status || false

          console.log(this.user)
          if(this.isSubscribedUser){

              this.max_question_count = this.configService.SUBSCRIBE_USER_MAX_QUESTION

              this.questionNumberActionSheetOptions = {
                  header: `Scroll Down For More`
              };
          }
      } )

      this.localStorage.getOtherData().subscribe((other_data: any)=>{
          this.max_question_count = other_data.max_question_count
      })


      this.localStorage.getPausedQuiz().subscribe((paused_quiz: any) => {

        console.log('L Page new stream' ,paused_quiz)

          if (!this.util.isEmptyObject(paused_quiz) && typeof paused_quiz.quiz_config.type === 'string') {
            console.log('Pause quiz is not empty')

              this.paused_quiz = paused_quiz;
              this.paused_quiz.type = paused_quiz.type;
          }
          else{
              console.log('Pause quiz is empty')
              this.paused_quiz = null;
          }



          this.data_loaded = true;
      });


      this.quizService.getQuizConfig().subscribe((config_data: any) => {
          console.log(config_data);
          this.exam_types = config_data.exam_types;
          this.subjects = config_data.subjects;

      });

  }

  startNewQuiz() {
    this.localStorage.deletePausedQuiz()
    this.paused_quiz = false;
  }

  resumePausedQuiz() {

      this.quizService.setInstantStartWithPausedQuiz(false);

    this.router.navigate([
      `/quiz-page/${this.paused_quiz.quiz_config.type}/${
        this.paused_quiz.quiz_config.subject
      }/${this.paused_quiz.quiz_config.amount}/${this.quiz_config.year}?reload=` +
        Math.random() * 10
    ]);
  }

  submitQuizConfiguration() {
    console.log(this.quiz_config);

    if (
      !this.quiz_config.type ||
      !this.quiz_config.subject ||
      this.quiz_config.amount < 1
    ) {
      this.util.showToast("Please Enter Data For all Fields To Proceed", 5000);

      return false;
    }

    this.localStorage.deletePausedQuiz();

      this.router.navigate([
          `/quiz-page/${this.quiz_config.type}/${this.quiz_config.subject}/${this.quiz_config.amount}/${this.quiz_config.year}`
      ]);

  }
}
