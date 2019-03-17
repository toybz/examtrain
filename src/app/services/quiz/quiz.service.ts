import { Injectable } from '@angular/core';
import * as url from '../../api_url';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class QuizService {

  quiz_question = [];






  /*
 {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "A doctor with a PhD is a doctor of what?",
            "correct_answer": "Philosophy",
            "incorrect_answers": [
                "Psychology",
                "Phrenology",
                "Physical Therapy"
            ]
        },
   */
  constructor( private http: HttpClient) { }

  instant_start_with_paused_quiz = true

  fetchQuizQuestions (category_id , difficulty  , amount){

      /*
    this.quiz_question = [
        {
          'question' : "How Are you",
            'option' : ['Good' , 'Bad' ],
            'correct_option' : 'Happy' ,
            'question_id' : 1
        } ,
        {
            'question' : "How Are you",
            'option' : ['Good' , 'Bad' ],
            'correct_option' : 'Happy' ,
            'question_id' : 1
        } ,
        {
            'question' : "How Are you",
            'option' : ['Good' , 'Bad' ],
            'correct_option' : 'Happy' ,
            'question_id' : 1
        } ,
        {
            'question' : "How Are you",
            'option' : ['Good' , 'Bad' ],
            'correct_option' : 'Happy' ,
            'question_id' : 1
        } ,
        {
            'question' : "How Are you",
            'option' : ['Good' , 'Bad' ],
            'correct_option' : 'Happy' ,
            'question_id' : 1
        } ,
        {
            'question' : "How Are you",
            'option' : ['Good' , 'Bad' ],
            'correct_option' : 'Happy' ,
            'question_id' : 1
        }
    ] ;
*/

    return this.http.get( url.get_question(category_id , difficulty , amount) );



  }

  getQuizQuestions () {
      console.log(this.quiz_question)


      if (this.quiz_question) {
          return this.quiz_question;
      }

  }

  getCategories (){
      return  this.http.get( url.get_categories)

}

 setInstantStartWithPausedQuiz(val: boolean){
      this.instant_start_with_paused_quiz = val
 }

    getInstantStartWithPausedQuiz(){
      return this.instant_start_with_paused_quiz
 }






}
