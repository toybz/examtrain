(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-quiz-page-quiz-page-module"],{

/***/ "./src/app/pages/quiz-page/answer-explanation/answer-explanation.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/quiz-page/answer-explanation/answer-explanation.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header id=\"\">\r\n  <ion-toolbar>\r\n    <ion-title text-center>\r\n      Explanation\r\n    </ion-title>\r\n\r\n    <ion-buttons color=\"white\" slot=\"start\" (click)=\"goBack()\">\r\n      <ion-button style=\"color: #f4f5f8\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"trophy_card\" text-center=\"\">\r\n    Explanation Section\r\n    <p>\r\n      ghvjbk dhbjkn dvibn duvhbijonkojhvkbjhvb dhvjbkljhv\r\n    </p>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"trophy_card\" text-center=\"\">\r\n    <ion-card-header>\r\n      Video Section\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n\r\n      <video height=\"200\" width=\"200\">\r\n\r\n      </video>\r\n\r\n    </ion-card-content>\r\n\r\n\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-header>Options</ion-card-header>\r\n    <ion-card-content>\r\n      <ion-list>\r\n\r\n\r\n\r\n        <ion-item\r\n                margin=\"\"\r\n                text-center=\"\"\r\n                color=\"danger\"\r\n                class=\"options_item\"\r\n                lines=\"none\"\r\n        >\r\n          <ion-label>Bookmark</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item\r\n                margin=\"\"\r\n                text-center=\"\"\r\n                color=\"danger\"\r\n                class=\"options_item\"\r\n                lines=\"none\"\r\n        >\r\n          <ion-label>Share To Feed</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item\r\n                margin=\"\"\r\n                text-center=\"\"\r\n                color=\"danger\"\r\n                class=\"options_item\"\r\n                lines=\"none\"\r\n        >\r\n          <ion-label>Screenshot</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item\r\n                margin=\"\"\r\n                text-center=\"\"\r\n                color=\"danger\"\r\n                class=\"options_item\"\r\n                lines=\"none\"\r\n        >\r\n          <ion-label>Report</ion-label>\r\n        </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </ion-list>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/quiz-page/answer-explanation/answer-explanation.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/quiz-page/answer-explanation/answer-explanation.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXotcGFnZS9hbnN3ZXItZXhwbGFuYXRpb24vYW5zd2VyLWV4cGxhbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/quiz-page/answer-explanation/answer-explanation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/quiz-page/answer-explanation/answer-explanation.component.ts ***!
  \************************************************************************************/
/*! exports provided: AnswerExplanationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerExplanationComponent", function() { return AnswerExplanationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerExplanationComponent = /** @class */ (function () {
    function AnswerExplanationComponent(modalController) {
        this.modalController = modalController;
    }
    AnswerExplanationComponent.prototype.ngOnInit = function () {
    };
    AnswerExplanationComponent.prototype.goBack = function () {
        this.modalController.dismiss({});
    };
    AnswerExplanationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer-explanation',
            template: __webpack_require__(/*! ./answer-explanation.component.html */ "./src/app/pages/quiz-page/answer-explanation/answer-explanation.component.html"),
            styles: [__webpack_require__(/*! ./answer-explanation.component.scss */ "./src/app/pages/quiz-page/answer-explanation/answer-explanation.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], AnswerExplanationComponent);
    return AnswerExplanationComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz-page/memes.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/quiz-page/memes.service.ts ***!
  \**************************************************/
/*! exports provided: MemesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemesService", function() { return MemesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemesService = /** @class */ (function () {
    function MemesService($http) {
        this.$http = $http;
        this.memes_url = "https://api.gfycat.com/v1/reactions/populated?tagName=";
        this.impressions = {
            10: ["Frown", "Rofl", "Shocked", "Haha", "You Got This"],
            20: ["Seriously", "Rofl", "Shocked", "Haha", "You Got This"],
            30: ["lol", "Rofl", "Haha", "Hugs", "You Got This"],
            40: ["Sigh", "High Five", "Slow Clap", "Hugs", "You Got This"],
            50: ["High Five", "Good Job", "Slow Clap", "You Got This"],
            60: ["Good Job", "Celebrate", "High Five", "Slow Clap"],
            70: [, "Happy", "Great", "Celebrate", "Slow Clap"],
            80: ["Fist Bump", "Happy", "Great", "Happy Dance"],
            90: ["Good", "Happy", "Great", "Happy Dance"],
            100: ["Awesome", "Happy", "Great", "Happy Dance", "Nailed It", "Perfect"]
        };
        this.$memesData = new rxjs_index__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    MemesService.prototype.getMemes = function (impression) {
        var _this = this;
        var url = this.memes_next_page_cursor
            ? this.memes_url + (impression + "&cursor=" + this.memes_next_page_cursor)
            : this.memes_url + impression;
        this.$http.get(url).subscribe(function (response) {
            //image not found
            _this.memes_next_page_cursor = response.cursor;
            if (!response.cursor) {
                _this.getMemes(impression);
                return;
            }
            _this.memes_next_page_cursor = response.cursor;
            console.log("new url" + response.gfycats[0].mp4Url);
            _this.$memesData.next(response.gfycats[0].mp4Url);
        });
    };
    MemesService.prototype.generateMemes = function (score_in_percent) {
        this.$memesData.next("assets/media/giphy.mp4");
        for (var _i = 0, _a = Object.entries(this.impressions); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key >= score_in_percent) {
                console.log({ key: value });
                var selected_impression = value[Math.floor(Math.random() * value.length)];
                this.getMemes(selected_impression.toLowerCase());
                return this.$memesData;
            }
        }
    };
    MemesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MemesService);
    return MemesService;
}());



/***/ }),

/***/ "./src/app/pages/quiz-page/paused/paused.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/quiz-page/paused/paused.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-card no-margin=\"\">\r\n    <ion-card-header color=\"primary\" text-center=\"\">\r\n      <ion-card-title>\r\n        Paused Quiz\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-item no-padding=\"\" no-margin=\"\">\r\n        <ion-label>Exam Type :-  {{ quizService.getExamTypeDisplayName( data.quiz_config.type) }}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item no-padding=\"\" no-margin=\"\">\r\n        <ion-label>Subject :-  {{ quizService.getSubjectDisplayName( data.quiz_config.subject) }}</ion-label>\r\n      </ion-item>\r\n\r\n\r\n      <ion-item no-padding=\"\" no-margin=\"\">\r\n        <ion-label>Year :-  {{ data.quiz_config.year}}</ion-label>\r\n      </ion-item>\r\n\r\n\r\n\r\n      <ion-grid>\r\n        <ion-row justify-content-center=\"\">\r\n\r\n          <ion-col>\r\n            <p>Questions</p>\r\n            <p>{{ data.quiz_config.amount  }}</p>\r\n          </ion-col>\r\n\r\n\r\n\r\n          <ion-col>\r\n            <p>Current</p>\r\n            <p>{{ data.current_index + 1 }}</p>\r\n          </ion-col>\r\n\r\n\r\n\r\n          <ion-col>\r\n            <p>Timer</p>\r\n            <p>{{ data.countdown }} sec</p>\r\n          </ion-col>\r\n\r\n\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <hr />\r\n\r\n      <ion-button expand=\"block\" margin-bottom=\"\" (click)=\"resumeQuiz()\"\r\n        >Resume</ion-button\r\n      >\r\n\r\n      <ion-button expand=\"block\" margin-bottom=\"\" (click)=\"restartQuiz()\"\r\n        >Restart Quiz</ion-button\r\n      >\r\n\r\n      <ion-button expand=\"block\" margin-bottom=\"\" (click)=\"submitQuiz()\"\r\n      >Submit Quiz</ion-button\r\n      >\r\n\r\n\r\n      <ion-button expand=\"block\" margin-bottom=\"\" (click)=\"backToDashboard()\"\r\n        >Back To Dashboard</ion-button\r\n      >\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/quiz-page/paused/paused.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/quiz-page/paused/paused.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXotcGFnZS9wYXVzZWQvcGF1c2VkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/quiz-page/paused/paused.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/quiz-page/paused/paused.component.ts ***!
  \************************************************************/
/*! exports provided: PausedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PausedComponent", function() { return PausedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/local-storage/local-storage.service */ "./src/app/services/local-storage/local-storage.service.ts");
/* harmony import */ var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/quiz/quiz.service */ "./src/app/services/quiz/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PausedComponent = /** @class */ (function () {
    function PausedComponent(modalController, localStorage, quizService) {
        this.modalController = modalController;
        this.localStorage = localStorage;
        this.quizService = quizService;
    }
    PausedComponent.prototype.ngOnInit = function () {
        console.log('Pause component init called');
        this.localStorage.savePausedQuiz(this.data);
    };
    PausedComponent.prototype.resumeQuiz = function () {
        this.localStorage.deletePausedQuiz();
        this.modalController.dismiss({
            action: "resume"
        });
    };
    PausedComponent.prototype.restartQuiz = function () {
        this.localStorage.deletePausedQuiz();
        this.modalController.dismiss({
            action: "reload"
        });
    };
    PausedComponent.prototype.submitQuiz = function () {
        this.localStorage.deletePausedQuiz();
        this.modalController.dismiss({
            action: "submit"
        });
    };
    PausedComponent.prototype.backToDashboard = function () {
        this.modalController.dismiss({
            action: "navigateToDashboard"
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PausedComponent.prototype, "data", void 0);
    PausedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-paused",
            template: __webpack_require__(/*! ./paused.component.html */ "./src/app/pages/quiz-page/paused/paused.component.html"),
            styles: [__webpack_require__(/*! ./paused.component.scss */ "./src/app/pages/quiz-page/paused/paused.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"],
            _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]])
    ], PausedComponent);
    return PausedComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz-page/quiz-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/quiz-page/quiz-page.module.ts ***!
  \*****************************************************/
/*! exports provided: QuizPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPagePageModule", function() { return QuizPagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _quiz_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz-page.page */ "./src/app/pages/quiz-page/quiz-page.page.ts");
/* harmony import */ var _quiz_review_quiz_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz-review/quiz-review.component */ "./src/app/pages/quiz-page/quiz-review/quiz-review.component.ts");
/* harmony import */ var _paused_paused_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paused/paused.component */ "./src/app/pages/quiz-page/paused/paused.component.ts");
/* harmony import */ var _answer_explanation_answer_explanation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./answer-explanation/answer-explanation.component */ "./src/app/pages/quiz-page/answer-explanation/answer-explanation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: "",
        component: _quiz_page_page__WEBPACK_IMPORTED_MODULE_6__["QuizPagePage"]
    }
];
var QuizPagePageModule = /** @class */ (function () {
    function QuizPagePageModule() {
    }
    QuizPagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_5__["RoundProgressModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_quiz_page_page__WEBPACK_IMPORTED_MODULE_6__["QuizPagePage"], _quiz_review_quiz_review_component__WEBPACK_IMPORTED_MODULE_7__["QuizReviewComponent"], _paused_paused_component__WEBPACK_IMPORTED_MODULE_8__["PausedComponent"], _answer_explanation_answer_explanation_component__WEBPACK_IMPORTED_MODULE_9__["AnswerExplanationComponent"]],
            entryComponents: [_quiz_page_page__WEBPACK_IMPORTED_MODULE_6__["QuizPagePage"], _quiz_review_quiz_review_component__WEBPACK_IMPORTED_MODULE_7__["QuizReviewComponent"], _paused_paused_component__WEBPACK_IMPORTED_MODULE_8__["PausedComponent"], _answer_explanation_answer_explanation_component__WEBPACK_IMPORTED_MODULE_9__["AnswerExplanationComponent"]]
        })
    ], QuizPagePageModule);
    return QuizPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/quiz-page/quiz-page.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/quiz-page/quiz-page.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"page_ready\">\r\n  <ion-toolbar>\r\n    <ion-title text-center=\"\">Quiz Page</ion-title>\r\n\r\n    <ion-button style=\"color: white\" slot=\"end\" (click)=\"pauseQuiz()\"\r\n      ><ion-icon name=\"pause\"></ion-icon\r\n    ></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding *ngIf=\"page_ready\">\r\n  <ion-card no-margin=\"\">\r\n    <ion-card-header>\r\n      <ion-item lines=\"full\" no-padding=\"\" no-margin=\"\">\r\n        <ion-label slot=\"start\" style=\"overflow: visible\">\r\n          Que : {{ current_page + 1 }} / {{quiz_config.amount}}\r\n        </ion-label>\r\n\r\n        <div slot=\"end\" class=\"progress-percentage-wrapper\">\r\n          <div class=\"progress-percentage ng-cloak\">\r\n            {{countdown}}\r\n          </div>\r\n\r\n          <round-progress\r\n            [current]=\"quiz_time - countdown\"\r\n            [max]=\"quiz_time\"\r\n            [color]=\"progress_color\"\r\n            [background]=\"'#eaeaea'\"\r\n            [radius]=\"22\"\r\n            [stroke]=\"2\"\r\n            [semicircle]=\"true\"\r\n            [rounded]=\"true\"\r\n            [clockwise]=\"false\"\r\n            [responsive]=\"false\"\r\n            [duration]=\"800\"\r\n            [animation]=\"'easeInOutQuart'\"\r\n            [animationDelay]=\"0\"\r\n          ></round-progress>\r\n        </div>\r\n      </ion-item>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n      <ion-text color=\"dark\" text-center=\"\">\r\n        <h1 [innerHTML]=\"questions[current_page].question\"></h1>\r\n      </ion-text>\r\n\r\n      <br />\r\n\r\n      <ion-list>\r\n        <ion-item\r\n          margin-bottom=\"\"\r\n          color=\"{{getOptionColor(option)}}\"\r\n          *ngFor=\"let option of questions[ current_page ].options\"\r\n          (click)=\"setAnswer(current_page , option)\"\r\n          text-center=\"\"\r\n          class=\"options_item\"\r\n          lines=\"none\"\r\n        >\r\n          <ion-label [innerHTML]=\"option\" class=\"\"></ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!--\r\n\r\n  <ion-button [disabled]=\"current_page <= 0\" (click)=\"goPrev()\" >Previous</ion-button>\r\n\r\n\r\n  <ion-button *ngIf=\"current_page < (quiz_config.amount - 1)\" (click)=\"goNext()\" >Next</ion-button>\r\n\r\n\r\n  <ion-button *ngIf=\"current_page == (quiz_config.amount - 1)\" (click)=\"submitQuiz()\" >Submit</ion-button>\r\n\r\n-->\r\n\r\n  <br />\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/quiz-page/quiz-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/quiz-page/quiz-page.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-percentage-wrapper {\n  position: relative; }\n\n.progress-percentage {\n  pleft: 10px;\n  top: 40%;\n  position: absolute;\n  width: 100%;\n  text-align: center; }\n\nion-backdrop {\n  opacity: 0.8 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei1wYWdlL0M6XFx4YW1wcFxcaHRkb2NzXFx0b3lielxccHJvamVjdHNcXHF1aXpvXFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxxdWl6LXBhZ2VcXHF1aXotcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWl6LXBhZ2UvcXVpei1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucHJvZ3Jlc3MtcGVyY2VudGFnZS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2dyZXNzLXBlcmNlbnRhZ2Uge1xyXG4gIHBsZWZ0OiAxMHB4O1xyXG4gIHRvcDogNDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbmlvbi1iYWNrZHJvcHtcclxuICBvcGFjaXR5OiAwLjggIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/quiz-page/quiz-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/quiz-page/quiz-page.page.ts ***!
  \***************************************************/
/*! exports provided: QuizPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPagePage", function() { return QuizPagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/quiz/quiz.service */ "./src/app/services/quiz/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quiz_review_quiz_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-review/quiz-review.component */ "./src/app/pages/quiz-page/quiz-review/quiz-review.component.ts");
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/local-storage/local-storage.service */ "./src/app/services/local-storage/local-storage.service.ts");
/* harmony import */ var _paused_paused_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paused/paused.component */ "./src/app/pages/quiz-page/paused/paused.component.ts");
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/utils/utils.service */ "./src/app/services/utils/utils.service.ts");
/* harmony import */ var _memes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./memes.service */ "./src/app/pages/quiz-page/memes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var QuizPagePage = /** @class */ (function () {
    //initialize all in init
    function QuizPagePage(quizService, router, route, modalController, loadingController, localStorage, util, popoverController, memesService, alertController) {
        this.quizService = quizService;
        this.router = router;
        this.route = route;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.localStorage = localStorage;
        this.util = util;
        this.popoverController = popoverController;
        this.memesService = memesService;
        this.alertController = alertController;
        this.page_ready = false;
        this.paused = false;
        this.custom_navigator = window.navigator;
    }
    QuizPagePage.prototype.ngOnInit = function () {
        this.initialise();
    };
    QuizPagePage.prototype.initialise = function () {
        var _this = this;
        console.log("ngIni Called");
        this.start_with_existing_data = false;
        this.existing_data = {};
        this.showPausedComponet = false;
        this.showLoadingBar().then(function (data) {
            _this.localStorage.getOnePausedQuiz().subscribe(function (paused_quiz) {
                //paused_quiz = quiz
                console.log(paused_quiz);
                if (!_this.util.isEmptyObject(paused_quiz)) {
                    console.log("Found Paused Quiz" + paused_quiz);
                    _this.start_with_existing_data = true;
                    _this.existing_data = paused_quiz;
                }
                else {
                    console.log("No Paused Quiz, next line");
                }
                _this.questions = _this.start_with_existing_data
                    ? _this.existing_data.questions
                    : [];
                console.log(_this.questions);
                _this.paused = _this.start_with_existing_data ? false : false;
                _this.current_page = _this.start_with_existing_data
                    ? _this.existing_data.current_index
                    : 0;
                _this.quiz_config = _this.start_with_existing_data
                    ? _this.existing_data.quiz_config
                    : {
                        type: "",
                        subject: "",
                        amount: 0
                    };
                _this.quiz_time = _this.start_with_existing_data
                    ? _this.existing_data.quiz_config.amount * 10
                    : _this.quiz_config.amount * 10;
                _this.countdown = _this.start_with_existing_data
                    ? _this.existing_data.countdown
                    : _this.quiz_config.amount * 10;
                var dismiss = function () {
                    _this.page_ready = true;
                    data.dismiss().then(function () {
                        _this.countdownController("start");
                        _this.showPausedComponet = _this.quizService.getInstantStartWithPausedQuiz();
                        if (_this.showPausedComponet && _this.start_with_existing_data) {
                            _this.pauseQuiz();
                        }
                    });
                };
                if (_this.start_with_existing_data) {
                    dismiss();
                }
                else {
                    _this.questions$ = _this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
                        _this.quiz_config.type = params.get("exam_type");
                        _this.quiz_config.subject = params.get("subject");
                        _this.quiz_config.amount = parseInt(params.get("amount"));
                        _this.quiz_config.year = parseInt(params.get("year"));
                        _this.quiz_time = _this.quiz_config.amount * 10;
                        _this.countdown = _this.quiz_config.amount * 10;
                        return _this.quizService.fetchQuizQuestions(_this.quiz_config.type, _this.quiz_config.subject, _this.quiz_config.amount, _this.quiz_config.year);
                    }));
                    _this.questions$.subscribe(function (response) {
                        _this.questions = response.data;
                        console.log(_this.questions);
                        /*  data_example = {answer: "c"
                              examtype: "utme"
                              examyear: "2002"
                              id: 45
                              image: ""
                              option: {a: "4 moles of chlorine", b: "3 moles of ozone", c: "1 mole of butane", d: "7 moles of argon"}
                              question: "Which of the following gases contains the least number of atoms at s.t.p"
                              section: ""
                              solution: ""}*/
                        _this.questions.map(function (question) {
                            var options = Object.values(question.option);
                            question.correct_answer = question.option[question.answer];
                            question.question = question.section ? "(" + (question.section[0].toUpperCase() + question.section.substring(1)) + ")  <br/>  " + question.question : question.question;
                            question.type = '', question.category = '', question.difficulty = '';
                            question.options = _this.reArrangeOptions(options);
                        });
                        dismiss();
                    }, function () { return __awaiter(_this, void 0, void 0, function () {
                        var alert;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.loading.dismiss();
                                    return [4 /*yield*/, this.alertController.create({
                                            message: 'Something went wrong.Please check your internet connection and  try again',
                                            backdropDismiss: false
                                        })];
                                case 1:
                                    alert = _a.sent();
                                    return [4 /*yield*/, alert.present()];
                                case 2:
                                    _a.sent();
                                    setTimeout(function () {
                                        alert.dismiss();
                                        _this.router.navigate(['tabs/quiz']);
                                    }, 2000);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
            });
        });
    };
    QuizPagePage.prototype.showLoadingBar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: "Loading",
                                animated: true,
                                showBackdrop: true
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, this.loading];
                }
            });
        });
    };
    QuizPagePage.prototype.countdownController = function (operation) {
        var _this = this;
        switch (operation) {
            case "start":
                this.counter = setInterval(function () {
                    console.log(_this.countdown);
                    if (_this.countdown == 0) {
                        _this.submitQuiz();
                    }
                    var mid_time = _this.quiz_time / 2;
                    var quater_time = _this.quiz_time / 4;
                    if (_this.countdown > mid_time) {
                        _this.progress_color = "#278A09";
                    }
                    else if (_this.countdown < mid_time &&
                        _this.countdown > quater_time) {
                        _this.progress_color = "#BF9513";
                    }
                    else {
                        _this.progress_color = "#A80B10";
                    }
                    if (!_this.paused) {
                        _this.countdown--;
                    }
                }, 1000);
                break;
            case "pause":
                break;
            case "stop":
                break;
        }
    };
    QuizPagePage.prototype.submitQuiz = function () {
        return __awaiter(this, void 0, void 0, function () {
            var correct_answers_count, review_modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.localStorage.deletePausedQuiz();
                        clearInterval(this.counter);
                        this.counter = null;
                        correct_answers_count = 0;
                        this.questions.map(function (question) {
                            if (question.correct_answer == question.selected_answer) {
                                correct_answers_count++;
                            }
                        });
                        this.localStorage.saveCompletedQuiz({
                            correct_answers_count: correct_answers_count,
                            questions: this.questions,
                            quiz_config: this.quiz_config,
                            date_time: Date.now()
                        });
                        return [4 /*yield*/, this.modalController.create({
                                component: _quiz_review_quiz_review_component__WEBPACK_IMPORTED_MODULE_5__["QuizReviewComponent"],
                                componentProps: {
                                    correct_answers_count: correct_answers_count,
                                    questions: this.questions,
                                    quiz_config: this.quiz_config
                                },
                                animated: true
                            })];
                    case 1:
                        review_modal = _a.sent();
                        review_modal.onDidDismiss().then(function (res) {
                            console.log(res);
                            if (res.data.action == "reload") {
                                _this.page_ready = false;
                                _this.initialise();
                            }
                            else if (res.data.action == "new_quiz") {
                                _this.router.navigate(["/tabs/quiz/"]);
                            }
                            else if (res.data.action == "dashboard") {
                                _this.router.navigate(["/tabs/dashboard/"]);
                            }
                        });
                        return [4 /*yield*/, review_modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuizPagePage.prototype.goNext = function () {
        if (this.paused) {
            return false;
        }
        if (this.current_page + 1 == this.quiz_config.amount) {
            this.submitQuiz();
            return false;
        }
        this.current_page++;
    };
    QuizPagePage.prototype.goPrev = function () {
        if (this.paused) {
            return false;
        }
        this.current_page--;
    };
    QuizPagePage.prototype.pauseQuiz = function () {
        return __awaiter(this, void 0, void 0, function () {
            var paused_meta, pause_quiz_modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //Pause Quiz
                        this.paused = true;
                        paused_meta = {
                            countdown: this.countdown,
                            current_index: this.current_page,
                            quiz_config: this.quiz_config,
                            questions: this.questions
                        };
                        return [4 /*yield*/, this.popoverController.create({
                                component: _paused_paused_component__WEBPACK_IMPORTED_MODULE_7__["PausedComponent"],
                                componentProps: {
                                    data: paused_meta
                                },
                                animated: true,
                                translucent: true,
                                backdropDismiss: false,
                                showBackdrop: true
                            })];
                    case 1:
                        pause_quiz_modal = _a.sent();
                        pause_quiz_modal.onDidDismiss().then(function (res) {
                            console.log(res);
                            if (res.data.action == "reload") {
                                clearInterval(_this.counter);
                                _this.counter = null;
                                _this.page_ready = false;
                                _this.initialise();
                            }
                            else if (res.data.action == "resume") {
                                _this.paused = false;
                            }
                            else if (res.data.action == "submit") {
                                _this.submitQuiz();
                            }
                            else if (res.data.action == "navigateToDashboard") {
                                clearInterval(_this.counter);
                                _this.counter = null;
                                _this.router.navigate(["/tabs/dashboard"]);
                            }
                        });
                        return [4 /*yield*/, pause_quiz_modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuizPagePage.prototype.reArrangeOptions = function (options) {
        var re_arranged_options = options.sort();
        return re_arranged_options;
    };
    QuizPagePage.prototype.setAnswer = function (question_index, selected_option) {
        var _this = this;
        if (this.custom_navigator.vibrate) {
            var vibrate = this.custom_navigator.vibrate([1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500]);
            console.log('vibrate', vibrate);
        }
        this.questions[question_index].selected_answer = selected_option;
        setTimeout(function () {
            _this.goNext();
        }, 800);
    };
    QuizPagePage.prototype.getOptionColor = function (option) {
        var current_question = this.questions[this.current_page];
        //answer has been selected
        if (current_question.selected_answer) {
            if (option == current_question.selected_answer) {
                if (option == current_question.correct_answer) {
                    return "success";
                }
                else {
                    return "danger";
                }
            }
            if (option == current_question.correct_answer) {
                return "success";
            }
        }
        else {
            return "";
        }
    };
    QuizPagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-quiz-page",
            template: __webpack_require__(/*! ./quiz-page.page.html */ "./src/app/pages/quiz-page/quiz-page.page.html"),
            styles: [__webpack_require__(/*! ./quiz-page.page.scss */ "./src/app/pages/quiz-page/quiz-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
            _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_8__["UtilsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _memes_service__WEBPACK_IMPORTED_MODULE_9__["MemesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], QuizPagePage);
    return QuizPagePage;
}());



/***/ }),

/***/ "./src/app/pages/quiz-page/quiz-review/quiz-review.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/quiz-page/quiz-review/quiz-review.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header id=\"top_section\">\r\n  <ion-toolbar>\r\n    <ion-title text-center>\r\n      Quiz Review\r\n    </ion-title>\r\n\r\n    <ion-buttons color=\"white\" slot=\"end\" (click)=\"showOptions()\">\r\n      <ion-button style=\"color: #f4f5f8\">\r\n        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"trophy_card\" text-center=\"\">\r\n    <div>\r\n      <img\r\n              *ngIf=\"!showMemes\"\r\n              class=\"trophy_image\"\r\n              margin-horizontal=\"\"\r\n              src=\"assets/images/animated_trophy_5.gif\"\r\n      />\r\n\r\n      <!-- <picture\r\n        margin-horizontal\r\n        class=\"trophy_image\"\r\n        *ngIf=\"(showMemes && $memesUrl | async) as memes\"\r\n      >\r\n        <source srcset=\"{{memes }}\" type=\"image/webp\" />\r\n\r\n        <img src=\"/assets/images/animated_trophy_5.gif\" />\r\n      </picture> -->\r\n\r\n      <video\r\n        *ngIf=\"(showMemes && $memesUrl | async) as memes\"\r\n              width=\"320\"\r\n              height=\"240\"\r\n              autoplay\r\n              loop\r\n              muted\r\n              playsinline\r\n        [src]=\"memes\"\r\n        #videoElement\r\n      ></video>\r\n\r\n      <ion-text *ngIf=\"(showMemes && !$memesUrl | async)\">Loading... </ion-text>\r\n    </div>\r\n\r\n    <ion-card-header>\r\n      <ion-card-title text-center=\"\"> {{ review }} </ion-card-title>\r\n      <p text-center=\"\">\r\n        You Scored {{ correct_answers_count }} Out Of {{ quiz_config.amount }}\r\n      </p>\r\n    </ion-card-header>\r\n  </ion-card>\r\n\r\n  <ion-item>\r\n    <ion-label>Always Show Memes Reaction? </ion-label>\r\n    <ion-toggle\r\n            [(ngModel)]=\"showMemes\"\r\n            (ionChange)=\"updateMemesSettings()\"\r\n    ></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n\r\n      <ion-button class=\"\" class=\"share_button\" (click)=\"share()\"  expand=\"block\" >\r\n        Share\r\n        <ion-icon slot=\"end\" name=\"share\"></ion-icon>\r\n      </ion-button>\r\n\r\n      <ion-button expand=\"block\" (click)=\"dismissModal({ action: 'reload' })\">\r\n        Play Again\r\n        <ion-icon slot=\"end\" name=\"refresh\"></ion-icon>\r\n      </ion-button>\r\n\r\n      <ion-button expand=\"block\" (click)=\"dismissModal({ action: 'new_quiz' })\">\r\n        New Quiz\r\n        <ion-icon slot=\"end\" name=\"play\"></ion-icon>\r\n      </ion-button>\r\n\r\n      <ion-button\r\n              expand=\"block\"\r\n              (click)=\"showCorrections('correction_section')\"\r\n      >\r\n        View Corrections\r\n      </ion-button>\r\n\r\n\r\n      <ion-button\r\n              expand=\"block\"\r\n              (click)=\"dismissModal({ action: 'dashboard' })\"\r\n      >\r\n        Exit\r\n      </ion-button>\r\n\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div *ngIf=\"show_corrections\" id=\"correction_section\">\r\n    <ion-card *ngFor=\"let question of questions; let i = index\">\r\n      <ion-card-header>\r\n        <ion-card-subtitle> Question : {{ i + 1 }} </ion-card-subtitle>\r\n      </ion-card-header>\r\n\r\n      <ion-card-content>\r\n        <ion-text color=\"dark\" text-center=\"\">\r\n          <h1 [innerHTML]=\"question.question\"></h1>\r\n        </ion-text>\r\n\r\n        <ion-list>\r\n\r\n          <ion-item\r\n                  margin=\"\"\r\n                  text-center=\"\"\r\n                  color=\"success\"\r\n                  class=\"options_item\"\r\n                  lines=\"none\"\r\n          >\r\n            <ion-label [innerHTML]=\"question.correct_answer\"> </ion-label>\r\n          </ion-item>\r\n\r\n\r\n          <ion-item\r\n                  margin=\"\"\r\n                  text-center=\"\"\r\n                  *ngIf=\"question.selected_answer != question.correct_answer\"\r\n                  color=\"danger\"\r\n                  class=\"options_item\"\r\n                  lines=\"none\"\r\n          >\r\n            <ion-label\r\n                    [innerHTML]=\"\r\n                question.selected_answer\r\n                  ? question.selected_answer\r\n                  : 'No Option Selected'\r\n              \"\r\n            >\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n\r\n          <!--   <ion-item color=\"tertiary\" (click)=\"showExplanation(question)\">\r\n               <ion-label style=\"text-align: center;\">\r\n                <span style=\"vertical-align: super;\">See Explanation</span>\r\n                 <ion-icon name=\"bulb\" style=\"color: white\"></ion-icon>\r\n               </ion-label>\r\n\r\n             </ion-item>-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </ion-list>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div class=\"fix-bottom\">\r\n      <ion-fab\r\n              (click)=\"showCorrections('top_section')\"\r\n              vertical=\"bottom\"\r\n              horizontal=\"end\"\r\n      >\r\n        <ion-fab-button\r\n        ><ion-icon name=\"arrow-round-up\"></ion-icon\r\n        ></ion-fab-button>\r\n      </ion-fab>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/quiz-page/quiz-review/quiz-review.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/quiz-page/quiz-review/quiz-review.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mid-width-button {\n  max-width: 50vw !important; }\n\n.fix-bottom {\n  position: fixed;\n  bottom: 5px;\n  right: 5px; }\n\n.trophy_image {\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.trophy_card {\n  background-color: #fbfbf3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei1wYWdlL3F1aXotcmV2aWV3L0M6XFx4YW1wcFxcaHRkb2NzXFx0b3lielxccHJvamVjdHNcXHF1aXpvXFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxxdWl6LXBhZ2VcXHF1aXotcmV2aWV3XFxxdWl6LXJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdaO0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBSXBCO0VBR0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWl6LXBhZ2UvcXVpei1yZXZpZXcvcXVpei1yZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkLXdpZHRoLWJ1dHRvbntcclxuICBtYXgtd2lkdGg6IDUwdncgIWltcG9ydGFudDtcclxufVxyXG4uZml4LWJvdHRvbXtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLnRyb3BoeV9pbWFnZXtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLnRyb3BoeV9jYXJke1xyXG4gIC8vbWF4LWhlaWdodDogNTB2aDtcclxuICAvL2hlaWdodDogNTB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmYzO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/quiz-page/quiz-review/quiz-review.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/quiz-page/quiz-review/quiz-review.component.ts ***!
  \**********************************************************************/
/*! exports provided: QuizReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizReviewComponent", function() { return QuizReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _memes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../memes.service */ "./src/app/pages/quiz-page/memes.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/local-storage/local-storage.service */ "./src/app/services/local-storage/local-storage.service.ts");
/* harmony import */ var _services_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/urls */ "./src/app/services/urls.ts");
/* harmony import */ var _answer_explanation_answer_explanation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../answer-explanation/answer-explanation.component */ "./src/app/pages/quiz-page/answer-explanation/answer-explanation.component.ts");
/* harmony import */ var _services_app_monitor_share_monitor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/app-monitor/share-monitor.service */ "./src/app/services/app-monitor/share-monitor.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var QuizReviewComponent = /** @class */ (function () {
    function QuizReviewComponent(modalController, actionSheetController, memesService, localStorage, shareService) {
        this.modalController = modalController;
        this.actionSheetController = actionSheetController;
        this.memesService = memesService;
        this.localStorage = localStorage;
        this.shareService = shareService;
        this.show_corrections = false;
        this.showMemes = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.app_url = _services_urls__WEBPACK_IMPORTED_MODULE_5__["app_url"];
        this.custom_navigator = window.navigator;
    }
    QuizReviewComponent.prototype.ngAfterViewInit = function () {
        this.video_elem = this.someInput.nativeElement;
        this.video_elem.muted = true;
    };
    QuizReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ng ini called");
        /*  const shareBtn = document.querySelector('.share_button');
  
          shareBtn.addEventListener('click', () => {
  
              console.log("share listener triggerd")
  
  
              if (this.custom_navigator.share ) {
  
                  this.custom_navigator.share({
                      title: 'Examtrain.NG',
                      text: this.share_text,
                      url: 'https://app.examtrain.ng'
                  }).then(() => {
                      console.log('Thanks for sharing!');
                  })
                      .catch(err => {
                          console.log(`Couldn't share because of`, err.message);
                      });
              } else {
                  var win = window.open(this.whatsapp_share_url, "_blank");
  
              }
  
          });*/
        var score_in_percent = (this.correct_answers_count / this.quiz_config.amount) * 100;
        console.log(score_in_percent);
        if (score_in_percent <= 30) {
            // very poorr
            this.review = "Uh Oh";
        }
        else if (score_in_percent <= 50) {
            // ok
            this.review = "Nice one";
        }
        else if (score_in_percent <= 70) {
            // average
            this.review = "That's Great";
        }
        else if (score_in_percent <= 100) {
            // very poorr
            this.review = "You The Champ. Great Job";
        }
        this.localStorage.getOtherData().subscribe(function (other_data) {
            _this.showMemes.next(other_data.show_memes);
        });
        this.$memesUrl = this.memesService.generateMemes(score_in_percent);
        this.share_text = encodeURIComponent("Hi I scored " + this.correct_answers_count + " out of " + this.quiz_config.amount + " in a test on ExamTrain.NG .Join me to prepare for all exams with past questions and video tutorials for free");
        this.whatsapp_share_url = "https://api.whatsapp.com/send?text=" + this.share_text;
    };
    QuizReviewComponent.prototype.updateMemesSettings = function () {
        console.log(this.showMemes);
        this.localStorage.saveOtherData({ show_memes: this.showMemes });
    };
    QuizReviewComponent.prototype.dismissModal = function (data) {
        //show share after first quiz for now
        var _this = this;
        this.localStorage.getOtherData()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
            .subscribe(function (other_data) {
            console.log("QUIZREVIEW PAGE", other_data);
            var user_has_shared = other_data.has_shared;
            if (user_has_shared) {
                _this.modalController.dismiss(data);
            }
            else {
                var shareModal_1;
                console.log('dismissed modal called');
                _this.shareService.showShare().then(function (modal) {
                    shareModal_1 = modal;
                    console.log(shareModal_1);
                    shareModal_1.onDidDismiss().then(function (res) {
                        console.log('ShareModalDismissed', res);
                        _this.modalController.dismiss(data);
                        /* if (res.data.action == "reload") {
   
                         } else if (res.data.action == "new_quiz") {
                             //   this.router.navigate(["/tabs/quiz/"]);
                         } else if (res.data.action == "dashboard") {
                             //    this.router.navigate(["/tabs/dashboard/"]);
                         }*/
                    });
                });
            }
        });
    };
    QuizReviewComponent.prototype.showOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Options",
                            buttons: [
                                {
                                    text: "Play Again",
                                    role: "destructive",
                                    icon: "refresh",
                                    handler: function () {
                                        _this.dismissModal({
                                            action: "reload"
                                        });
                                    }
                                },
                                {
                                    text: "New Quiz",
                                    icon: "play",
                                    handler: function () {
                                        _this.dismissModal({
                                            action: "new_quiz"
                                        });
                                    }
                                },
                                {
                                    text: "Share",
                                    icon: "share",
                                    handler: function () {
                                        _this.share();
                                    }
                                },
                                {
                                    text: "Dashboard",
                                    icon: "analytics",
                                    handler: function () {
                                        _this.dismissModal({
                                            action: "dashboard"
                                        });
                                    }
                                },
                                {
                                    text: "Cancel",
                                    icon: "close",
                                    role: "cancel",
                                    handler: function () {
                                        console.log("Cancel clicked");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QuizReviewComponent.prototype.share = function () {
        if (this.custom_navigator.share) {
            this.custom_navigator.share({
                title: 'Examtrain.NG',
                text: decodeURI(this.share_text),
                url: 'https://app.examtrain.ng'
            }).then(function () {
                console.log('Thanks for sharing!');
            })
                .catch(function (err) {
                console.log("Couldn't share because of", err.message);
            });
        }
        else {
            var win = window.open(this.whatsapp_share_url, "_blank");
        }
    };
    QuizReviewComponent.prototype.showCorrections = function (id) {
        this.show_corrections = !this.show_corrections;
        if (this.show_corrections) {
            setTimeout(function () {
                var el = document.getElementById(id);
                console.log(el);
                el.scrollIntoView({ behavior: "smooth" });
            }, 500);
        }
        else {
            var el = document.getElementById(id);
            console.log(el);
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    QuizReviewComponent.prototype.showExplanation = function (question) {
        return __awaiter(this, void 0, void 0, function () {
            var explanation_modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(question);
                        return [4 /*yield*/, this.modalController.create({
                                component: _answer_explanation_answer_explanation_component__WEBPACK_IMPORTED_MODULE_6__["AnswerExplanationComponent"],
                                componentProps: {
                                    question: question
                                },
                                animated: true
                            })];
                    case 1:
                        explanation_modal = _a.sent();
                        explanation_modal.onDidDismiss().then(function (res) {
                            console.log(res);
                            if (res.data.action == "reload") {
                            }
                        });
                        return [4 /*yield*/, explanation_modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QuizReviewComponent.prototype, "correct_answers_count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuizReviewComponent.prototype, "questions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuizReviewComponent.prototype, "quiz_config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoElement'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuizReviewComponent.prototype, "someInput", void 0);
    QuizReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-quiz-review",
            template: __webpack_require__(/*! ./quiz-review.component.html */ "./src/app/pages/quiz-page/quiz-review/quiz-review.component.html"),
            styles: [__webpack_require__(/*! ./quiz-review.component.scss */ "./src/app/pages/quiz-page/quiz-review/quiz-review.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _memes_service__WEBPACK_IMPORTED_MODULE_2__["MemesService"],
            _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _services_app_monitor_share_monitor_service__WEBPACK_IMPORTED_MODULE_7__["ShareMonitorService"]])
    ], QuizReviewComponent);
    return QuizReviewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-quiz-page-quiz-page-module.js.map