import { Component, OnInit } from "@angular/core";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard-page",
  templateUrl: "./dashboard-page.page.html",
  styleUrls: ["./dashboard-page.page.scss"]
})
export class DashboardPagePage implements OnInit {
  dashboard_data;

  public doughnutChartLabels: string[] = ["Correct", "In-Correct"];
  public doughnutChartData: number[];

  public doughnutChartType: string = "doughnut";

  public doughnutChartColor: Array<any> = [
    {
      backgroundColor: ["#d33939", "#989aa2"]
    }
  ];

  public lineChartOptions: any = {
    maintainAspectRatio: false
  };

  page_ready = false;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.dashboardService.getDashboardData().subscribe(quiz_data => {
      let response_data = {
        total_question: 0,
        correct_answers_count: 0,
        wrong_answers_count: 0,
        difficulty: {
          hard: 0,
          medium: 0,
          easy: 0
        }
      };
      quiz_data.map((quiz: any) => {
        response_data.total_question += +quiz.quiz_config.amount;
        response_data.correct_answers_count += quiz.correct_answers_count;
        response_data.wrong_answers_count +=
          quiz.quiz_config.amount - quiz.correct_answers_count;

        switch (quiz.quiz_config.difficulty) {
          case "hard":
            response_data.difficulty.hard += +quiz.quiz_config.amount;
            break;
          case "medium":
            response_data.difficulty.medium += +quiz.quiz_config.amount;
            break;
          case "easy":
            response_data.difficulty.easy += +quiz.quiz_config.amount;
            break;
        }
      });

      this.dashboard_data = response_data;
      this.doughnutChartData = [
        this.dashboard_data.correct_answers_count,
        this.dashboard_data.wrong_answers_count
      ];

      this.page_ready = true;
    });
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
