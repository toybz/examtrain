import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { DashboardPagePageModule } from "../pages/dashboard-page/dashboard-page.module";
import { QuizSetupPagePageModule } from "../pages/quiz-setup-page/quiz-setup-page.module";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "dashboard",
        children: [
          {
            path: "",
            loadChildren:
              "../pages/dashboard-page/dashboard-page.module#DashboardPagePageModule"
          }
        ]
      },
      {
        path: "history",
        children: [
          {
            path: "",
            loadChildren:
              "../pages/history-page/history-page.module#HistoryPagePageModule"
          }
        ]
      },
      {
        path: "quiz",
        children: [
          {
            path: "",
            loadChildren:
              "../pages/quiz-landing/quiz-landing.module#QuizLandingPageModule"
          },
          {
            path: "quiz_setup",
            loadChildren:
              "../pages/quiz-setup-page/quiz-setup-page.module#QuizSetupPagePageModule"
          }
        ]
      },
      {
        path: "study",
        children: [
          {
            path: "",
            loadChildren:
              "../pages/study-page/study-page.module#StudyPagePageModule"
          }
        ]
      },
      {
        path: "leaderboard",
        children: [
          {
            path: "",
            loadChildren:
              "../pages/leaderboard-page/leaderboard-page.module#LeaderboardPagePageModule"
          }
        ]
      },

      {
        path: "",
        redirectTo: "/tabs/dashboard",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/dashboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
