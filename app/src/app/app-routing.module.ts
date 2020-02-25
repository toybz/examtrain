import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },

  {
    path: "login",
    loadChildren: "./pages/login-page/login-page.module#LoginPagePageModule"
  },

  {
    path: "register",
    loadChildren:
      "./pages/sign-up-page/sign-up-page.module#SignUpPagePageModule"
  },


  {
    path: "subscribe",
    loadChildren:
        "./pages/payment/payment.module#PaymentPageModule"
  },
  {
        path: "quiz-page/:exam_type/:subject/:amount",
        loadChildren: "./pages/quiz-page/quiz-page.module#QuizPagePageModule",
        runGuardsAndResolvers: "always"
    },
  {
    path: "quiz-page/:exam_type/:subject/:amount/:year",
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
  },


   { path: '**', redirectTo: '' },
  { path: 'payment', loadChildren: './pages/payment/payment.module#PaymentPageModule' }
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
