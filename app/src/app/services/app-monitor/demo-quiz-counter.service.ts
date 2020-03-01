import {Injectable} from '@angular/core';
import {ConfigService} from "../config.service";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {UserService} from "../user/user.service";
import {LocalStorageService} from "../local-storage/local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class DemoQuizCounterService {

    max_allowed_demo_quiz = this.configServe.DEMO_QUIZ_COUNT;
    user_quiz_count_today = 0
    played_quiz;
    todaysDate: string = new Date().toDateString().split(' ').join('_'); //get date from object

    constructor(private configServe: ConfigService, private localStorageService: LocalStorageService, private userService: UserService) {
        localStorageService.getDemoPlayedQuiz().subscribe(
            (value: {}) => {
                if (value.hasOwnProperty(this.todaysDate)) {
                    console.log('Demo Count', value[this.todaysDate])
                    this.user_quiz_count_today = value[this.todaysDate]
                } else {
                    let val = {[this.todaysDate]: 0}
                    localStorageService.saveDemoPlayedQuiz(val)
                }
            }
        )
    }

//save to server
// fetch from server


    getUserPlayedQuizCount() {
        return this.user_quiz_count_today
    }

    increaseUserPlayedQuizCount() {
        let val = {[this.todaysDate]: this.getUserPlayedQuizCount() + 1}
        this.localStorageService.saveDemoPlayedQuiz(val)
    }

    canUserPlay(): boolean {

        return this.getUserPlayedQuizCount() < this.max_allowed_demo_quiz


    }


}
