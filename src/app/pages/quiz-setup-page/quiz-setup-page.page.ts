import { Component, OnInit } from "@angular/core";
import { QuizService } from "../../services/quiz/quiz.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorageService } from "../../services/local-storage.service";

@Component({
  selector: "app-quiz-setup-page",
  templateUrl: "./quiz-setup-page.page.html",
  styleUrls: ["./quiz-setup-page.page.scss"]
})
export class QuizSetupPagePage implements OnInit {
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
    private router: Router,
    private quizService: QuizService,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    this.quizService.getCategories().subscribe((categories: any) => {
      console.log(categories);
      this.categories = categories.trivia_categories;
    });
  }

  submitQuizConfiguration() {
    console.log(this.quiz_config);

    /*
 Todo fix and use this instead
    this.router.navigate(["/quiz-page" , this.quiz_config ], { relativeTo: this.route });
*/

    this.localStorage.deletePausedQuiz();

    this.router.navigate([
      `/quiz-page/${this.quiz_config.category}/${this.quiz_config.difficulty}/${
        this.quiz_config.amount
      }`
    ]);
  }
}
