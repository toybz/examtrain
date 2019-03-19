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
    category: "",
    difficulty: "",
    amount: 10
  };

  categories = [];

  constructor(
    private localStorage: LocalStorageService,
    private util: UtilsService,
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.localStorage.getPausedQuiz().subscribe((paused_quiz: any) => {
      if (!this.util.isEmptyObject(paused_quiz)) {
        this.paused_quiz = paused_quiz;
        this.paused_quiz.category = paused_quiz.questions[0].category;
      }
      this.data_loaded = true;
    });

    this.quizService.getCategories().subscribe((categories: any) => {
      console.log(categories);
      this.categories = categories.trivia_categories;
    });
  }

  startNewQuiz() {
    this.paused_quiz = false;
  }

  resumePausedQuiz() {
    this.quizService.setInstantStartWithPausedQuiz(false);

    this.router.navigate([
      `/quiz-page/${this.paused_quiz.quiz_config.category}/${
        this.paused_quiz.quiz_config.difficulty
      }/${this.paused_quiz.quiz_config.amount}?testes=` +
        Math.random() * 10
    ]);
  }

  submitQuizConfiguration() {
    console.log(this.quiz_config);

    if (
      !this.quiz_config.category ||
      !this.quiz_config.difficulty ||
      this.quiz_config.amount < 1
    ) {
      this.util.showToast("Please Enter Data For all Fields To Proceed", 5000);

      return false;
    }

    this.localStorage.deletePausedQuiz();

    this.router.navigate([
      `/quiz-page/${this.quiz_config.category}/${this.quiz_config.difficulty}/${
        this.quiz_config.amount
      }`
    ]);
  }
}
