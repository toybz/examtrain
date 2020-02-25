import {Injectable} from "@angular/core";
import * as url from "../urls";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs/index";
import {ConfigService} from "../config.service";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class QuizService {
    quiz_question = [];
    questions_folder = 'assets/questions/';

    changed_year

    available_data = {
        utme: {
            accounting:  [2004 , 2007 ,  2009,  ] ,
            biology: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012   ] ,
            chemistry: [2001, 2002, 2003, 2004, 2005, 2006, 2010 ] ,
           civiledu: [],
            commerce: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013 ],
            currentaffairs: [],
            crk: [2009, 2010, 2011, 2013],
            economics: [2009, 2010],
            english: [2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010  ],
            englishlit:[2008, 2009, 2010] ,
            geography: [] ,
            government: [2010, 2012, 2013] ,
            history: [],
            insurance: [],
            irk: [],
            mathematics: [] ,
            physics: [] ,

        } ,
        'post-utme' : {
            accounting:  [2010 , 2011 ,  2012, 2013  ] ,
            biology: [ ] ,
            chemistry: [] ,
            civiledu: [],
            commerce: [],
            currentaffairs: [],
            crk: [],
            economics: [2006, 2007, 2008, 2009, 2010, 2011, 2013],
            english: [],
            englishlit:[2006, 2007, 2008, 2009, 2010, 2012, 2013],
            geography: [2006, 2007, 2008, 2009, 2010, 2011, 2012,  2013] ,
            government: [2006, 2007, 2008, 2009, 2010, 2011, 2012,  2013],
           history: [],
            insurance: [],
            irk: [],
            mathematics: [2006, 2007, 2008, 2009,  2013] ,
            physics: [2006, 2007, 2009, 2010, 2011, 2012],

        } ,

        'wassce' : {
            accounting:  [2006  ,  2012, 2013  ] ,
            biology: [ ] ,
            chemistry: [] ,
            civiledu: [2011, 2012, 2013],
            commerce: [],
            currentaffairs: [],
            crk: [2005, 2008, 2009, 2010, 2011],
            economics: [2001, 2003, 2004, 2005, 2006, 2007, 2010, 2012],
            english: [],
            englishlit:[],
            geography: [] ,
            government: [],
            history: [],
            insurance: [],
            irk: [],
            mathematics: [] ,
            physics: [],

        } ,





    }


    exam_types = [
        {
            name: 'utme',
            title: 'Jamb(UTME)',
            data_path: `${this.questions_folder}utme/`,


        },
        {
            name: 'wassce',
            title: 'Waec',
            data_path: `${this.questions_folder}wassce/`,


        },
        {
            name: 'post-utme',
            title: 'Post Jamb',
            data_path: `${this.questions_folder}post-utme/`,


        },
    ];
    subjects = [
            {
                name: 'english',
                title: 'English'
            },
            {
                name: 'mathematics',
                title: 'Mathematics'
            },
            {
                name: 'commerce',
                title: 'Commerce'
            },
            {
                name: 'accounting',
                title: 'Accounting'
            },
            {
                name: 'biology',
                title: 'Biology'
            },
            {
                name: 'physics',
                title: 'Physics'
            },
            {
                name: 'chemistry',
                title: 'Chemistry'
            },
            {
                name: 'englishlit',
                title: 'English Literature'
            },
            {
                name: 'government',
                title: 'Government'
            },
            {
                name: 'crk',
                title: 'CRK'
            },
            {
                name: 'geography',
                title: 'Geography'
            },
            {
                name: 'economics',
                title: 'Economics'
            },
            {
                name: 'irk',
                title: 'IRK'
            },
            {
                name: 'civiledu',
                title: 'Civil Education'
            },
            {
                name: 'insurance',
                title: 'Insurance'
            },
            {
                name: 'currentaffairs',
                title: 'Current Affairs'
            },
            {
                name: 'history',
                title: 'History'
            },
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
    constructor(private http: HttpClient, private configService: ConfigService) {
    }

    instant_start_with_paused_quiz = true;

    fetchQuizQuestions(exam_type, subject, amount, year) {
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

        //  return this.getLocalQuestions(exam_type, subject, year, amount)

        if (this.configService.USE_LOCAL_QUESTIONS) {

            return this.getLocalQuestions(exam_type, subject, year, amount)
        } else {
            return this.http.get(url.get_question(exam_type, subject, amount, year))
        }


    }

    isDataExist(exam_type: any,
                subject: any,
                year: any,){

       const isExist =  this.available_data[exam_type] &&  this.available_data[exam_type][subject] && this.available_data[exam_type][subject].includes(year)  || false  ;

        console.log('Question Check ' , isExist)

        return !!isExist
    }

    getLocalQuestions(exam_type: any,
                      subject: any,
                      year: any,
                      questions_no: any) {

       this.changed_year = false
        // for testing
        /*  exam_type = 'utme'
          subject = 'biology'
          year = '2003'
          questions_no = 4;*/


        //check if this exam data exist
        if(!this.isDataExist(exam_type, subject, year)){
            //if data doesnt exust, change the year to an available one in the available data array by random. add a key to the response to let the user know thhat data doesnt exist but new datat wa sselected for them.
            this.changed_year = true;
            let a = this.available_data[exam_type][subject];
         let new_year =   a[Math.floor(Math.random() * a.length)];

         year = new_year;
            console.log('Updated the exam year to : ' , new_year)

        }


        let file_name = `${exam_type}-${subject}-${year}.json`;


        let selected_exam: any = this.exam_types.find((e) => {
            return e.name == exam_type
        });

        let question_path = `${selected_exam.data_path}${subject}/${file_name}`;

        return this.http.get(question_path).pipe(
            map(
                (res: any) => {


                    res.data = this.randomQuestions(res.data, questions_no);
                    res.changed_year =  this.changed_year

                    console.log("Local Fetch Response " , res)
                    return res
                }
            )
        )


        /*  fetch(question_path)
              .then(response => {
                  if (!response.ok) {
                      throw new Error("HTTP error " + response.status);
                  }
                  return response.json();
              })
              .then(json => {
                  console.log('Real response is ' , json.data);
                let randoms = {
                    data:    this.randomQuestions(json.data , questions_no)
                }

            console.log('Random response is ' , randoms);

                  return  randoms


              })
              .catch(function () {
                  //  this.dataError = true;
              })*/


    }

    randomQuestions(questions, count: number) {


        let random_data = [];

        for (let i = 1; i <= count; i++) {
            let randomQuestion = questions[Math.floor(Math.random() * questions.length)];

            //check if the question id exist and dont use if it does


            let exist = random_data.find((q) => {
                if (q.id == randomQuestion.id) {
                    console.info('Same Id found', q.id);
                    i = i - 1;
                    return true

                }
            });

            if (exist) continue;
            random_data.push(randomQuestion)
        }

        return random_data


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
    getQuizConfig() {
        let exam_types = this.getExamTypes()
        let subjects = this.getSubjects()

        return of({
            exam_types,
            subjects
        })
    }

    getExamTypeDisplayName(exam) {
        let exam_title
        this.exam_types.forEach((item) => {
            if (item.name == exam) {
                exam_title = item.title
            }

        })
        return exam_title
    }

    getSubjectDisplayName(subject) {
        let subject_title
        this.subjects.forEach((item) => {
            if (item.name == subject) {
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
