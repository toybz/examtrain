import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizHistoryComponent} from './quiz-history/quiz-history.component';
import {IonicModule} from "@ionic/angular";
import {MenuButtonComponent} from './menu-button/menu-button.component';
import {ShareComponent} from './share/share.component';
import {SafeUrlPipe} from "../pipes/safe-url/safe-url.pipe";
import {RouterModule} from "@angular/router";
import {SubscribeModalComponent} from './subscribe-modal/subscribe-modal.component';


@NgModule({

    imports: [
        CommonModule,
        IonicModule,
        RouterModule

    ],
    declarations: [QuizHistoryComponent, MenuButtonComponent, ShareComponent, SafeUrlPipe, SubscribeModalComponent],
    exports: [QuizHistoryComponent, MenuButtonComponent, ShareComponent, SafeUrlPipe, SubscribeModalComponent],
    entryComponents: [ShareComponent, SubscribeModalComponent]
})
export class SharedComponentsModule {
}
