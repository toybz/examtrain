import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import { UtilsService } from "../../services/utils/utils.service";
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../../services/quiz/quiz.service";

@Component({
  selector: "app-quiz-landing",
  templateUrl: "./quiz-landing.page.html",
  styleUrls: ["./quiz-landing.page.scss"]
})
export class QuizLandingPage implements OnInit {
  paused_quiz;
  data_loaded = false;
  quiz_journey_data = false;

  customActionSheetOptions: any = {
    header: "Select Category  (Scroll Down For More)"
  };

  quiz_config = {
    type: "",
    subject: "",
    amount: 10
  };

  exam_types = [];
  subjects = [];

    /*getExamTypeDisplayName = this.quizService.getExamTypeDisplayName
    getSubjectDisplayName = this.quizService.getSubjectDisplayName*/

  constructor(
    private localStorage: LocalStorageService,
    private util: UtilsService,
    private router: Router,
    private route: ActivatedRoute,
    public quizService: QuizService
  ) {}

  ngOnInit() {
    this.localStorage.getPausedQuiz().subscribe((paused_quiz: any) => {
      if (!this.util.isEmptyObject(paused_quiz)) {
        this.paused_quiz = paused_quiz;
        this.paused_quiz.type = paused_quiz.type;
console.log(this.paused_quiz)

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
    this.paused_quiz = false;
  }

  resumePausedQuiz() {
    this.quizService.setInstantStartWithPausedQuiz(false);

    this.router.navigate([
      `/quiz-page/${this.paused_quiz.quiz_config.type}/${
        this.paused_quiz.quiz_config.subject
      }/${this.paused_quiz.quiz_config.amount}?testes=` +
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
      `/quiz-page/${this.quiz_config.type}/${this.quiz_config.subject}/${
        this.quiz_config.amount
      }`
    ]);
  }
}
