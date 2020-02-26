import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config = {
    DEFAULT_MAX_QUESTION: 5,
    SUBSCRIBE_USER_MAX_QUESTION: 60,
    USE_LOCAL_QUESTIONS: true
  }

  DEFAULT_MAX_QUESTION = 5;
  SUBSCRIBE_USER_MAX_QUESTION = 60;
  USE_LOCAL_QUESTIONS = true;
  SUB_AMOUNT = 1000;
  DEMO_QUIZ_COUNT = 3;


  constructor() {

  }




}
