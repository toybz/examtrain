import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizHistoryComponent } from './quiz-history/quiz-history.component';
import {IonicModule} from "@ionic/angular";

@NgModule({

    imports: [
    CommonModule,
        IonicModule,

  ] ,
    declarations: [QuizHistoryComponent],
    exports: [QuizHistoryComponent]
})
export class SharedComponentsModule { }
