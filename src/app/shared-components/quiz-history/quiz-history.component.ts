import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import {QuizService} from "../../services/quiz/quiz.service";

@Component({
  selector: 'app-quiz-history',
  templateUrl: './quiz-history.component.html',
  styleUrls: ['./quiz-history.component.scss']
})
export class QuizHistoryComponent implements OnInit {

  @Input() quiz: any;
  constructor(public  quizService: QuizService) { }

  ngOnInit() {
  }

}
