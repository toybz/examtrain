import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizHistoryComponent} from './quiz-history/quiz-history.component';
import {IonicModule} from "@ionic/angular";
import {MenuButtonComponent} from './menu-button/menu-button.component';
import {ShareComponent} from './share/share.component';
import {SafeUrlPipe} from "../pipes/safe-url/safe-url.pipe";
import {RouterModule} from "@angular/router";

@NgModule({

    imports: [
        CommonModule,
        IonicModule,
        RouterModule

    ],
    declarations: [QuizHistoryComponent, MenuButtonComponent, ShareComponent, SafeUrlPipe],
    exports: [QuizHistoryComponent, MenuButtonComponent, ShareComponent, SafeUrlPipe],
    entryComponents: [ShareComponent]
})
export class SharedComponentsModule {
}
