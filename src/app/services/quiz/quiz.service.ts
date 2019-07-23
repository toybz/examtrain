import { Injectable } from "@angular/core";
import * as url from "../urls";
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs/index";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  quiz_question = [];
  exam_types = [
      {
          name: 'utme',
          title: 'Jamb(UTME)'

      },
      {
          name: 'wassce',
          title: 'Waec'

      },
      {
          name: 'post-utme',
          title: 'Post Jamb'

      },
  ];
  subjects = [
      {
          name: 'english',
          title: 'English'
      } ,
      {
          name: 'mathematics',
          title: 'Mathematics'
      } ,
      {
          name: 'commerce',
          title: 'Commerce'
      } ,
      {
          name: 'accounting',
          title: 'Accounting'
      } ,
      {
          name: 'biology',
          title: 'Biology'
      } ,
      {
          name: 'physics',
          title: 'Physics'
      } ,
      {
          name: 'chemistry',
          title: 'Chemistry'
      } ,
      {
          name: 'englishlit',
          title: 'English Literature'
      } ,
      {
          name: 'government',
          title: 'Government'
      } ,
      {
          name: 'crk',
          title: 'CRK'
      } ,
      {
          name: 'geography',
          title: 'Geography'
      } ,
      {
          name: 'economics',
          title: 'Economics'
      } ,
      {
          name: 'irk',
          title: 'IRK'
      } ,
      {
          name: 'civiledu',
          title: 'Civil Education'
      } ,
      {
          name: 'insurance',
          title: 'Insurance'
      } ,
      {
          name: 'currentaffairs',
          title: 'Current Affairs'
      } ,
      {
          name: 'history',
          title: 'History'
      } ,
  ];

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
  constructor(private http: HttpClient) {}

  instant_start_with_paused_quiz = true;

  fetchQuizQuestions(exam_type, subject, amount) {
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

    return this.http.get(url.get_question(exam_type, subject, amount))
  }

  getQuizQuestions() {
    console.log(this.quiz_question);

    if (this.quiz_question) {
      return this.quiz_question;
    }
  }

  getCategories() {
    return this.http.get(url.get_categories);
  }

    getExamTypes() {
       return this.exam_types
    }

    getSubjects() {

    return this.subjects




    }
    getQuizConfig(){
     let exam_types = this.getExamTypes()
        let subjects = this.getSubjects()

        return  of({
            exam_types,
            subjects
        })
    }

    getExamTypeDisplayName(exam){
        let exam_title
        this.exam_types.forEach((item)=>{
            if(item.name == exam){
                exam_title = item.title
            }

        })
        return exam_title
    }

    getSubjectDisplayName(subject){
        let subject_title
        this.subjects.forEach((item)=>{
            if(item.name == subject){
                subject_title = item.title
            }

        })
        return subject_title
    }

  setInstantStartWithPausedQuiz(val: boolean) {
    this.instant_start_with_paused_quiz = val;
  }

  getInstantStartWithPausedQuiz() {
    return this.instant_start_with_paused_quiz;
  }
}
