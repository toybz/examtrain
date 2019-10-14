import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizHistoryComponent } from './quiz-history/quiz-history.component';
import {IonicModule} from "@ionic/angular";
import { MenuButtonComponent } from './menu-button/menu-button.component';

@NgModule({

    imports: [
    CommonModule,
        IonicModule,

  ] ,
    declarations: [QuizHistoryComponent, MenuButtonComponent],
    exports: [QuizHistoryComponent, MenuButtonComponent]
})
export class SharedComponentsModule { }
