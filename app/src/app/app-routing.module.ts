import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },

  {
    path: "login-page",
    loadChildren: "./pages/login-page/login-page.module#LoginPagePageModule"
  },

  {
    path: "sign-up-page",
    loadChildren:
      "./pages/sign-up-page/sign-up-page.module#SignUpPagePageModule"
  },

  {
    path: "quiz-page/:exam_type/:subject/:amount",
    loadChildren: "./pages/quiz-page/quiz-page.module#QuizPagePageModule",
    runGuardsAndResolvers: "always"
  },

  {
    path: "onboard",
    loadChildren:
      "./pages/onboarding-page/onboarding-page.module#OnboardingPagePageModule"
  } ,

  {
    path: "view-tutorial-page/:subject/:topic_id",
    loadChildren:
      "./pages/study-page/view-tutorial/view-tutorial.module#ViewTutorialModule"
  }


  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
