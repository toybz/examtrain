(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-quiz-landing-quiz-landing-module"],{

/***/ "./src/app/pages/quiz-landing/quiz-landing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/quiz-landing/quiz-landing.module.ts ***!
  \***********************************************************/
/*! exports provided: QuizLandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizLandingPageModule", function() { return QuizLandingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quiz_landing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-landing.page */ "./src/app/pages/quiz-landing/quiz-landing.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: "",
        component: _quiz_landing_page__WEBPACK_IMPORTED_MODULE_5__["QuizLandingPage"]
    }
];
var QuizLandingPageModule = /** @class */ (function () {
    function QuizLandingPageModule() {
    }
    QuizLandingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_quiz_landing_page__WEBPACK_IMPORTED_MODULE_5__["QuizLandingPage"]]
        })
    ], QuizLandingPageModule);
    return QuizLandingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/quiz-landing/quiz-landing.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/quiz-landing/quiz-landing.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button class=\"menu-button\" ></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n\r\n        <ion-title text-center=\"\">Quiz</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-card *ngIf=\"quiz_journey_data\">\r\n        <ion-card-header>\r\n            <ion-card-title>Challenge</ion-card-title>\r\n\r\n            <ion-card-subtitle>Level : Beginner</ion-card-subtitle>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content>\r\n            <ion-item no-padding=\"\" no-margin=\"\">\r\n                <ion-label>Category > {{paused_quiz.category}}</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-grid>\r\n                <ion-row justify-content-center=\"\">\r\n                    <ion-col size=\"4\">\r\n                        <p>Current Page</p>\r\n                        <strong>{{paused_quiz.current_index + 1}}</strong>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"4\">\r\n                        <p>Countdown</p>\r\n                        <strong> {{paused_quiz.countdown}}Secs</strong>\r\n                    </ion-col>\r\n\r\n                    <ion-col size=\"4\">\r\n                        <p>Remaining</p>\r\n                        <strong\r\n                        >{{paused_quiz.quiz_config.amount - (paused_quiz.current_index +\r\n                            1) }}</strong\r\n                        >\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n            <ion-button expand=\"block\" (click)=\"resumePausedQuiz()\"\r\n            >Resume\r\n            </ion-button\r\n            >\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div *ngIf=\"data_loaded\">\r\n        <ion-card *ngIf=\"paused_quiz\">\r\n            <ion-card-header>\r\n                <ion-card-title class=\"primary-color\">Paused Quiz</ion-card-title>\r\n\r\n                <!-- <ion-card-subtitle>Paused Quiz Found </ion-card-subtitle>-->\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n                <ion-item no-padding=\"\" no-margin=\"\">\r\n                    <ion-label class=\"\">\r\n                        <span class=\"primary-color\"> Exam :-  </span>\r\n                        {{quizService.getExamTypeDisplayName(paused_quiz.quiz_config.type)}}\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item no-padding=\"\" no-margin=\"\">\r\n                    <ion-label >  <span class=\"primary-color\"> Subject :-  </span>{{quizService.getSubjectDisplayName(paused_quiz.quiz_config.subject)}}\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-item no-padding=\"\" no-margin=\"\">\r\n                    <ion-label class=\"\">\r\n                        <span class=\"primary-color\"> Year :-  </span>\r\n                        {{paused_quiz.quiz_config.year}}\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n                <ion-grid>\r\n                    <ion-row justify-content-center=\"\">\r\n                        <ion-col size=\"4\">\r\n                            <p  class=\"primary-color \">Questions</p>\r\n                            <strong class=\" \">{{paused_quiz.quiz_config.amount}}</strong>\r\n                        </ion-col>\r\n\r\n\r\n                        <ion-col size=\"4\">\r\n                            <p  class=\"primary-color \">Paused At</p>\r\n                            <strong class=\"\">\r\n\r\n            {{paused_quiz.current_index + 1}}\r\n                            </strong\r\n                            >\r\n                        </ion-col>\r\n\r\n\r\n\r\n                        <ion-col size=\"4\">\r\n                            <p  class=\"primary-color \">Timer</p>\r\n                            <strong class=\"\"> {{paused_quiz.countdown}} Secs </strong>\r\n                        </ion-col>\r\n\r\n\r\n                    </ion-row>\r\n                </ion-grid>\r\n                <ion-button expand=\"block\" (click)=\"resumePausedQuiz()\"\r\n                >Resume\r\n                </ion-button\r\n                >\r\n                <p text-center=\"\">OR</p>\r\n\r\n                <ion-button expand=\"block\" (click)=\"startNewQuiz()\"\r\n                >Start New Quiz\r\n                </ion-button>\r\n            </ion-card-content>\r\n        </ion-card>\r\n\r\n\r\n        <form\r\n                *ngIf=\"!paused_quiz\"\r\n                (ngSubmit)=\"submitQuizConfiguration()\"\r\n                #quizConfigForm=\"ngForm\"\r\n        >\r\n            <ion-list>\r\n                <ion-list-header></ion-list-header>\r\n\r\n                <ion-item>\r\n                    <ion-label>Exam Type</ion-label>\r\n\r\n                    <ion-select\r\n                            [interfaceOptions]=\"customActionSheetOptions\"\r\n                            interface=\"action-sheet\"\r\n                            [(ngModel)]=\"quiz_config.type\"\r\n                            name=\"type\"\r\n                            [placeholder]=\"'E.g Jamb'\"\r\n                    >\r\n                        <ion-select-option *ngFor=\"let type of exam_types\" value=\"{{type.name}}\"\r\n                        >{{type.title}}\r\n                        </ion-select-option\r\n                        >\r\n\r\n                        <ion-select-option value=\"ican\" disabled>ICAN (N/A .Coming Soon)</ion-select-option>\r\n\r\n                        <ion-select-option value=\"ccna\" disabled>CCNA (N/A. Coming Soon)</ion-select-option>\r\n\r\n                        <ion-select-option value=\"pmp\" disabled>PMP (N/A. Coming Soon)</ion-select-option>\r\n\r\n                    </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                    <ion-label>Subject</ion-label>\r\n\r\n                    <ion-select\r\n                            [interfaceOptions]=\"customActionSheetOptions\"\r\n                            interface=\"action-sheet\"\r\n                            [(ngModel)]=\"quiz_config.subject\"\r\n                            name=\"subject\"\r\n                            [placeholder]=\"'E.g English'\"\r\n                    >\r\n                        <ion-select-option *ngFor=\"let subject of subjects\" value=\"{{subject.name}}\"\r\n                        >{{subject.title}}\r\n                        </ion-select-option\r\n                        >\r\n                    </ion-select>\r\n                </ion-item>\r\n\r\n\r\n                <ion-item>\r\n                    <ion-label>Year</ion-label>\r\n\r\n                    <ion-select\r\n                            [interfaceOptions]=\"yearActionSheetOptions\"\r\n                            interface=\"action-sheet\"\r\n                            [(ngModel)]=\"quiz_config.year\"\r\n                            name=\"year\"\r\n                            [placeholder]=\"'E.g 2012'\"\r\n                    >\r\n\r\n\r\n                        <ion-select-option value=\"\">Random</ion-select-option>\r\n\r\n                        <ion-select-option *ngFor=\"let i of exam_years\" value=\"{{i}}\"\r\n                        >{{i}}\r\n                        </ion-select-option>\r\n\r\n\r\n                    </ion-select>\r\n                </ion-item>\r\n\r\n\r\n                <ion-item>\r\n                    <ion-label slot=\"start\">Questions No</ion-label>\r\n\r\n<!--\r\n                    <ion-input\r\n                            slot=\"end\"\r\n                            [min]=\"2\"\r\n                            [max]=\"max_question_count\"\r\n                            [value]=\"max_question_count\"\r\n                            type=\"number\"\r\n                            [(ngModel)]=\"quiz_config.amount\"\r\n                            name=\"amount\"\r\n                    >\r\n                    </ion-input>-->\r\n\r\n\r\n                    <ion-select\r\n                            [interfaceOptions]=\"questionNumberActionSheetOptions\"\r\n                            interface=\"action-sheet\"\r\n                            [(ngModel)]=\"quiz_config.amount\"\r\n                            name=\"amount\"\r\n                            slot=\"end\"\r\n                            placeholder=\"{{max_question_count}}\"\r\n                    >\r\n\r\n\r\n\r\n                        <ion-select-option *ngFor=\"let dummy of ' '.repeat(max_question_count).split(''), let x = index\"   value=\"{{x+1}}\" >{{x+1}}\r\n                        </ion-select-option>\r\n\r\n\r\n                    </ion-select>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                </ion-item>\r\n            </ion-list>\r\n\r\n            <ion-button\r\n                    padding-horizontal=\"\"\r\n                    expand=\"block\"\r\n                    (click)=\"submitQuizConfiguration()\"\r\n            >START\r\n            </ion-button>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </form>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/quiz-landing/quiz-landing.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/quiz-landing/quiz-landing.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXotbGFuZGluZy9xdWl6LWxhbmRpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/quiz-landing/quiz-landing.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/quiz-landing/quiz-landing.page.ts ***!
  \*********************************************************/
/*! exports provided: QuizLandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizLandingPage", function() { return QuizLandingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage/local-storage.service */ "./src/app/services/local-storage/local-storage.service.ts");
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/quiz/quiz.service */ "./src/app/services/quiz/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizLandingPage = /** @class */ (function () {
    /*getExamTypeDisplayName = this.quizService.getExamTypeDisplayName
    getSubjectDisplayName = this.quizService.getSubjectDisplayName*/
    function QuizLandingPage(localStorage, util, router, route, quizService) {
        this.localStorage = localStorage;
        this.util = util;
        this.router = router;
        this.route = route;
        this.quizService = quizService;
        this.data_loaded = false;
        this.quiz_journey_data = false;
        this.max_question_count = 5;
        this.customActionSheetOptions = {
            header: "Select Category  (Scroll Down For More)"
        };
        this.yearActionSheetOptions = {
            header: "2000 - 2013 (Scroll Down For More)"
        };
        this.questionNumberActionSheetOptions = {
            header: "Scroll Down For More"
        };
        this.exam_years = ['2000', '2001', '2002', '2003', '2004', '2005', "2006", '2007', '2008', '2009', '2010', '2011', '2012', '2013'];
        this.quiz_config = {
            type: "jamb",
            subject: "english",
            amount: this.max_question_count,
            year: '2015'
        };
        this.exam_types = [];
        this.subjects = [];
    }
    QuizLandingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.localStorage.getOtherData().subscribe(function (other_data) {
            _this.max_question_count = other_data.max_question_count;
        });
        this.localStorage.getPausedQuiz().subscribe(function (paused_quiz) {
            console.log('L Page new stream', paused_quiz);
            if (!_this.util.isEmptyObject(paused_quiz) && typeof paused_quiz.quiz_config.type === 'string') {
                console.log('Pause quiz is not empty');
                _this.paused_quiz = paused_quiz;
                _this.paused_quiz.type = paused_quiz.type;
            }
            else {
                console.log('Pause quiz is empty');
                _this.paused_quiz = null;
            }
            _this.data_loaded = true;
        });
        this.quizService.getQuizConfig().subscribe(function (config_data) {
            console.log(config_data);
            _this.exam_types = config_data.exam_types;
            _this.subjects = config_data.subjects;
        });
    };
    QuizLandingPage.prototype.startNewQuiz = function () {
        this.localStorage.deletePausedQuiz();
        this.paused_quiz = false;
    };
    QuizLandingPage.prototype.resumePausedQuiz = function () {
        this.quizService.setInstantStartWithPausedQuiz(false);
        this.router.navigate([
            "/quiz-page/" + this.paused_quiz.quiz_config.type + "/" + this.paused_quiz.quiz_config.subject + "/" + this.paused_quiz.quiz_config.amount + "/" + this.quiz_config.year + "?reload=" +
                Math.random() * 10
        ]);
    };
    QuizLandingPage.prototype.submitQuizConfiguration = function () {
        console.log(this.quiz_config);
        if (!this.quiz_config.type ||
            !this.quiz_config.subject ||
            this.quiz_config.amount < 1) {
            this.util.showToast("Please Enter Data For all Fields To Proceed", 5000);
            return false;
        }
        this.localStorage.deletePausedQuiz();
        this.router.navigate([
            "/quiz-page/" + this.quiz_config.type + "/" + this.quiz_config.subject + "/" + this.quiz_config.amount + "/" + this.quiz_config.year
        ]);
    };
    QuizLandingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-quiz-landing",
            template: __webpack_require__(/*! ./quiz-landing.page.html */ "./src/app/pages/quiz-landing/quiz-landing.page.html"),
            styles: [__webpack_require__(/*! ./quiz-landing.page.scss */ "./src/app/pages/quiz-landing/quiz-landing.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"],
            _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"]])
    ], QuizLandingPage);
    return QuizLandingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-quiz-landing-quiz-landing-module.js.map