import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'quiz-setup-page', loadChildren: './pages/quiz-setup-page/quiz-setup-page.module#QuizSetupPagePageModule' },
  { path: 'login-page', loadChildren: './pages/login-page/login-page.module#LoginPagePageModule' },
  { path: 'sign-up-page', loadChildren: './pages/sign-up-page/sign-up-page.module#SignUpPagePageModule' },
  { path: 'dashboard-page', loadChildren: './pages/dashboard-page/dashboard-page.module#DashboardPagePageModule' },
  { path: 'history-page', loadChildren: './pages/history-page/history-page.module#HistoryPagePageModule' },
  { path: 'leaderboard-page', loadChildren: './pages/leaderboard-page/leaderboard-page.module#LeaderboardPagePageModule' },
  { path: 'study-page', loadChildren: './pages/study-page/study-page.module#StudyPagePageModule' },

    { path: 'quiz-page/:category/:difficulty/:amount', loadChildren: './pages/quiz-page/quiz-page.module#QuizPagePageModule' ,
        runGuardsAndResolvers: 'always',
} ,

  { path: 'onboarding-page', loadChildren: './pages/onboarding-page/onboarding-page.module#OnboardingPagePageModule' },
  { path: 'correction-page', loadChildren: './pages/correction-page/correction-page.module#CorrectionPagePageModule' },
  { path: 'quiz-landing', loadChildren: './pages/quiz-landing/quiz-landing.module#QuizLandingPageModule' }
  // { path: '**', component: PageNotFoundComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules ,
      onSameUrlNavigation: 'reload'

    } )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
