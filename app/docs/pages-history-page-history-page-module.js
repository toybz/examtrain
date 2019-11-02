(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-page-history-page-module"],{

/***/ "./src/app/pages/history-page/history-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/history-page/history-page.module.ts ***!
  \***********************************************************/
/*! exports provided: HistoryPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPagePageModule", function() { return HistoryPagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-page.page */ "./src/app/pages/history-page/history-page.page.ts");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared-components/shared-components.module */ "./src/app/shared-components/shared-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "",
        component: _history_page_page__WEBPACK_IMPORTED_MODULE_5__["HistoryPagePage"]
    }
];
var HistoryPagePageModule = /** @class */ (function () {
    function HistoryPagePageModule() {
    }
    HistoryPagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_page_page__WEBPACK_IMPORTED_MODULE_5__["HistoryPagePage"]]
        })
    ], HistoryPagePageModule);
    return HistoryPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/history-page/history-page.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/history-page/history-page.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"menu-button\" ></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title text-center=\"\">History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding *ngIf=\"page_loaded\">\r\n\r\n  <ion-list class=\"\">\r\n\r\n    <app-quiz-history *ngFor=\"let quiz of completed_quiz\" [quiz]=\"quiz\">\r\n    </app-quiz-history>\r\n\r\n\r\n  </ion-list>\r\n\r\n  <ion-infinite-scroll threshold=\"10px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\"\r\n    >\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/history-page/history-page.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/history-page/history-page.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnktcGFnZS9oaXN0b3J5LXBhZ2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/history-page/history-page.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/history-page/history-page.page.ts ***!
  \*********************************************************/
/*! exports provided: HistoryPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPagePage", function() { return HistoryPagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage/local-storage.service */ "./src/app/services/local-storage/local-storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/quiz/quiz.service */ "./src/app/services/quiz/quiz.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoryPagePage = /** @class */ (function () {
    function HistoryPagePage(localStorage, quizService) {
        this.localStorage = localStorage;
        this.quizService = quizService;
        this.dataPerPage = 5;
        this.current_page = 1;
        this.page_loaded = false;
    }
    HistoryPagePage.prototype.ngOnInit = function () {
        this.initialize();
    };
    HistoryPagePage.prototype.initialize = function () {
        var _this = this;
        this.completed_quiz = this.localStorage.getCompletedQuiz();
        this.completed_quiz.subscribe(function (completed_quiz) {
            console.log(completed_quiz);
            _this.current_page = 1;
            _this.totalData = completed_quiz.reverse();
            _this.loadMore();
            _this.page_loaded = true;
        });
    };
    HistoryPagePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log("Done");
            _this.current_page++;
            _this.loadMore();
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (_this.completed_quiz.length == _this.totalData.length) {
                event.target.disabled = true;
            }
        }, 2000);
    };
    HistoryPagePage.prototype.loadMore = function () {
        this.completed_quiz = this.totalData.slice(0, this.current_page * this.dataPerPage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], HistoryPagePage.prototype, "infiniteScroll", void 0);
    HistoryPagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-history-page",
            template: __webpack_require__(/*! ./history-page.page.html */ "./src/app/pages/history-page/history-page.page.html"),
            styles: [__webpack_require__(/*! ./history-page.page.scss */ "./src/app/pages/history-page/history-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"],
            _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]])
    ], HistoryPagePage);
    return HistoryPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-history-page-history-page-module.js.map