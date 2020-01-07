import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalQuizService {

  questions_folder = 'assets/questions/'

   EXAMS  =  {

    utme: {
      name: 'JAMB',
        data_path: `${this.questions_folder}utme/`,
    } ,

       waec: {
           name: 'WAEC',
           data_path: `${this.questions_folder}wassce/`
       } ,

       post_utme: {
           name: 'Post Jamb',
           data_path: `${this.questions_folder}post-utme/`
       }

    }
  constructor() { }

   getQuestions( exam_type:any ,
                 subject:any,
                 year:any ,
                 questions_no:any){
      let question_path = `${this.EXAMS[exam_type].data_path}${subject}/${year}.json`


       fetch(question_path)
           .then(response => {
               if (!response.ok) {
                   throw new Error("HTTP error " + response.status);
               }
               return response.json();
           })
           .then(json => {
               //this.users = json;
               console.log(json);
           })
           .catch(function () {
             //  this.dataError = true;
           })


  }
}
