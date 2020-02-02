import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config = {
    DEFAULT_MAX_QUESTION: 10,
    SUBSCRIBE_USER_MAX_QUESTION: 50,
    USE_LOCAL_QUESTIONS: true


  }

  constructor() {
  }
}
