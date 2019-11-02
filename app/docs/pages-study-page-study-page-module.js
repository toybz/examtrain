(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-study-page-study-page-module"],{

/***/ "./src/app/pages/study-page/completed/completed.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/study-page/completed/completed.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  completed works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/study-page/completed/completed.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/study-page/completed/completed.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWR5LXBhZ2UvY29tcGxldGVkL2NvbXBsZXRlZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/study-page/completed/completed.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/study-page/completed/completed.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedComponent", function() { return CompletedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompletedComponent = /** @class */ (function () {
    function CompletedComponent() {
    }
    CompletedComponent.prototype.ngOnInit = function () {
    };
    CompletedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completed',
            template: __webpack_require__(/*! ./completed.component.html */ "./src/app/pages/study-page/completed/completed.component.html"),
            styles: [__webpack_require__(/*! ./completed.component.scss */ "./src/app/pages/study-page/completed/completed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CompletedComponent);
    return CompletedComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-page/explore/explore.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/study-page/explore/explore.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-row>\r\n  <ion-col size=\"11\" >\r\n    <ion-slides  [options]=\"slideOpts\">\r\n\r\n      <ion-slide *ngFor=\"let subject of subjects\"  (click)=\"showTopicsFor(subject)\">\r\n        <ion-button color=\"primary\" class=\"subject-slide\" style=\" letter-spacing : 0.0em !important;padding-start: 2.1em !important;max-width: 30vw !important;width: 30vw !important;\">{{subject}}</ion-button>\r\n      </ion-slide>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </ion-slides>\r\n\r\n  </ion-col>\r\n\r\n  <ion-col size=\"1\" no-padding>\r\n    <div class=\"next_button\" (click)=\"slide('next')\">\r\n\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 44\"><path d=\"M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z\"></path></svg>\r\n\r\n\r\n    </div>\r\n\r\n  </ion-col>\r\n\r\n</ion-row>\r\n\r\n\r\n\r\n\r\n\r\n<div style=\"margin-top: 30px\"></div>\r\n\r\n<ion-text class=\"selected-subject\">\r\n  <h1>{{selected_subject}}</h1>\r\n\r\n</ion-text>\r\n\r\n\r\n  <ion-card *ngFor=\"let topic of subject_topics\" routerLink=\"/view-tutorial-page/{{selected_subject}}/{{topic[0]}}\">\r\n    <ion-card-content>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n\r\n            <h2 class=\"topic\">{{topic[1].topic}}</h2>\r\n\r\n            <p>\r\n             <span>{{topic[1].description}}</span>\r\n\r\n            </p>\r\n\r\n            <br>\r\n           <!-- <ion-progress-bar value=\"{{topic[1].progress}}\"></ion-progress-bar>-->\r\n\r\n\r\n          </ion-col>\r\n\r\n       <!--   <ion-col class=\"ion-align-self-center ion-justify-content-center\">\r\n            <ion-img src=\"{{getSubjectImage() || 'assets/images/book.jpg' }}\">\r\n\r\n            </ion-img>\r\n          </ion-col>-->\r\n\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n"

/***/ }),

/***/ "./src/app/pages/study-page/explore/explore.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/study-page/explore/explore.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-subject, .topic {\n  color: var(--ion-color-primary) !important; }\n\n.next_button {\n  fill: #a90808; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZHktcGFnZS9leHBsb3JlL0M6XFx4YW1wcFxcaHRkb2NzXFx0b3lielxccHJvamVjdHNcXHF1aXpvXFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxzdHVkeS1wYWdlXFxleHBsb3JlXFxleHBsb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQTBDLEVBQUE7O0FBSTVDO0VBRUUsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZHktcGFnZS9leHBsb3JlL2V4cGxvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtc3ViamVjdCAsIC50b3BpY3tcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubmV4dF9idXR0b257XHJcblxyXG4gIGZpbGw6ICNhOTA4MDg7XHJcbiAvLyBwYWRkaW5nOiAwcHg7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/study-page/explore/explore.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/study-page/explore/explore.component.ts ***!
  \***************************************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_study_study_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/study/study.service */ "./src/app/services/study/study.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExploreComponent = /** @class */ (function () {
    function ExploreComponent(study_service) {
        this.study_service = study_service;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 2,
        };
        /*  subjects = [
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
          ];*/
        this.subjects = [];
    }
    ExploreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.study_service.getSubjects().subscribe(function (subjects) {
            _this.subjects = subjects;
            _this.showTopicsFor(_this.subjects[1]);
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            position: 'center',
            type: 'info',
            title: 'We are constantly updating the tutorials, please always check back for updates',
            showConfirmButton: false,
            timer: 5000,
            backdrop: false,
            toast: true,
            width: '100%',
            customClass: {
                container: 'swal-toast-container-class',
                icon: 'swal-toast-icon-class',
            }
        });
    };
    ExploreComponent.prototype.showTopicsFor = function (subject) {
        var _this = this;
        console.log(subject);
        this.selected_subject = subject;
        this.study_service.getSubjectTopics(subject).subscribe(function (topics) {
            _this.subject_topics = topics;
            _this.subject_topics.map(function (topic) {
                topic[1].progress = parseFloat((Math.random()).toFixed(1));
            });
            console.log(_this.subject_topics);
        });
    };
    //todo: refactor this
    ExploreComponent.prototype.getSubjectImage = function () {
        return this.study_service.getSubjectImage(this.selected_subject);
    };
    ExploreComponent.prototype.slide = function (direction) {
        if (direction == 'next') {
            this.slider.slideNext();
        }
        else {
            this.slider.slidePrev();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], ExploreComponent.prototype, "slider", void 0);
    ExploreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! ./explore.component.html */ "./src/app/pages/study-page/explore/explore.component.html"),
            styles: [__webpack_require__(/*! ./explore.component.scss */ "./src/app/pages/study-page/explore/explore.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_study_study_service__WEBPACK_IMPORTED_MODULE_1__["StudyService"]])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-page/in-progress/in-progress.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/study-page/in-progress/in-progress.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  in-progress works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/study-page/in-progress/in-progress.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/study-page/in-progress/in-progress.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWR5LXBhZ2UvaW4tcHJvZ3Jlc3MvaW4tcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/study-page/in-progress/in-progress.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/study-page/in-progress/in-progress.component.ts ***!
  \***********************************************************************/
/*! exports provided: InProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressComponent", function() { return InProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InProgressComponent = /** @class */ (function () {
    function InProgressComponent() {
    }
    InProgressComponent.prototype.ngOnInit = function () {
    };
    InProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-in-progress',
            template: __webpack_require__(/*! ./in-progress.component.html */ "./src/app/pages/study-page/in-progress/in-progress.component.html"),
            styles: [__webpack_require__(/*! ./in-progress.component.scss */ "./src/app/pages/study-page/in-progress/in-progress.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InProgressComponent);
    return InProgressComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-page/study-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/study-page/study-page.module.ts ***!
  \*******************************************************/
/*! exports provided: StudyPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyPagePageModule", function() { return StudyPagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _study_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./study-page.page */ "./src/app/pages/study-page/study-page.page.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/pages/study-page/explore/explore.component.ts");
/* harmony import */ var _completed_completed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./completed/completed.component */ "./src/app/pages/study-page/completed/completed.component.ts");
/* harmony import */ var _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./in-progress/in-progress.component */ "./src/app/pages/study-page/in-progress/in-progress.component.ts");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared-components/shared-components.module */ "./src/app/shared-components/shared-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: "",
        component: _study_page_page__WEBPACK_IMPORTED_MODULE_5__["StudyPagePage"]
    },
    {
        //select exam, subject, topic etc
        path: "select-study",
        component: _study_page_page__WEBPACK_IMPORTED_MODULE_5__["StudyPagePage"]
    },
];
var StudyPagePageModule = /** @class */ (function () {
    function StudyPagePageModule() {
    }
    StudyPagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_study_page_page__WEBPACK_IMPORTED_MODULE_5__["StudyPagePage"], _explore_explore_component__WEBPACK_IMPORTED_MODULE_6__["ExploreComponent"], _completed_completed_component__WEBPACK_IMPORTED_MODULE_7__["CompletedComponent"], _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_8__["InProgressComponent"]],
            entryComponents: [_study_page_page__WEBPACK_IMPORTED_MODULE_5__["StudyPagePage"], _explore_explore_component__WEBPACK_IMPORTED_MODULE_6__["ExploreComponent"], _completed_completed_component__WEBPACK_IMPORTED_MODULE_7__["CompletedComponent"], _in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_8__["InProgressComponent"]]
        })
    ], StudyPagePageModule);
    return StudyPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/study-page/study-page.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/study-page/study-page.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button class=\"menu-button\" ></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"no-centralize\">\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n\r\n          <ion-col>\r\n\r\n            <ion-select [interfaceOptions]=\"customPopoverOptionsCategory\" interface=\"popover\" [(ngModel)]=\"selected_category\" name=\"selected_category\">\r\n              <ion-select-option value=\"explore\" selected>Explore</ion-select-option>\r\n              <!--<ion-select-option value=\"in-progress\">In Progress</ion-select-option>\r\n              <ion-select-option value=\"completed\">Completed</ion-select-option>-->\r\n            </ion-select>\r\n          </ion-col>\r\n\r\n          <ion-col *ngIf=\"selected_category == 'explore'\">\r\n            <ion-select placeholder=\"Select Exam\" [interfaceOptions]=\"customPopoverOptionsExamType\" interface=\"popover\" [(ngModel)]=\"selected_exam\" name=\"selected_exam\">\r\n              <ion-select-option value=\"jamb\" selected>JAMB</ion-select-option>\r\n              <ion-select-option value=\"waec\">WAEC</ion-select-option>\r\n              <ion-select-option value=\"post_jamb\">Post JAMB</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </ion-title>\r\n\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n\r\n\r\n    <app-explore *ngIf=\"selected_category == 'explore'\"></app-explore>\r\n\r\n    <app-completed *ngIf=\"selected_category == 'completed'\"></app-completed>\r\n\r\n    <app-in-progress *ngIf=\"selected_category == 'in-progress'\"></app-in-progress>\r\n\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/study-page/study-page.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/study-page/study-page.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0dWR5LXBhZ2Uvc3R1ZHktcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/study-page/study-page.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/study-page/study-page.page.ts ***!
  \*****************************************************/
/*! exports provided: StudyPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyPagePage", function() { return StudyPagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudyPagePage = /** @class */ (function () {
    function StudyPagePage() {
        this.customPopoverOptionsCategory = {
            header: 'Select Category',
            subHeader: '',
            message: ''
        };
        this.customPopoverOptionsExamType = {
            header: 'Select Exam Type',
            subHeader: '',
            message: ''
        };
        this.selected_category = "explore";
        this.selected_exam = "jamb";
    }
    StudyPagePage.prototype.ngOnInit = function () { };
    StudyPagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-study-page",
            template: __webpack_require__(/*! ./study-page.page.html */ "./src/app/pages/study-page/study-page.page.html"),
            styles: [__webpack_require__(/*! ./study-page.page.scss */ "./src/app/pages/study-page/study-page.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StudyPagePage);
    return StudyPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-study-page-study-page-module.js.map