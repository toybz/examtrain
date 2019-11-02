(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-page-feed-page-module"],{

/***/ "./src/app/pages/feed-page/details/details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/feed-page/details/details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons color=\"white\" slot=\"start\" (click)=\"goBack()\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" style=\"color: #f4f5f8\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>  </ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-header style=\"font-size: x-large;color: red;text-align: center\">\n      {{feed.title}}\n    </ion-card-header>\n\n\n\n    <ion-card-content style=\"font-size: large\" [innerHTML]=\"feed.content\" >\n\n\n\n\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/feed-page/details/details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/feed-page/details/details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQtcGFnZS9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/feed-page/details/details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/feed-page/details/details.component.ts ***!
  \**************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_feeds_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/feeds.service */ "./src/app/services/feeds.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(feedService, route, router) {
        this.feedService = feedService;
        this.route = route;
        this.router = router;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var feed_id = this.route.snapshot.params.id;
        this.feed = this.feedService.getFeed(feed_id);
    };
    DetailsComponent.prototype.goBack = function () {
        this.router.navigate([
            "/tabs/feed/"
        ]);
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/pages/feed-page/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/pages/feed-page/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_feeds_service__WEBPACK_IMPORTED_MODULE_1__["FeedsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/feed-page/feed-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/feed-page/feed-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FeedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function() { return FeedPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feeds_feeds_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feeds/feeds.component */ "./src/app/pages/feed-page/feeds/feeds.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/details.component */ "./src/app/pages/feed-page/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '',
        component: _feeds_feeds_component__WEBPACK_IMPORTED_MODULE_2__["FeedsComponent"] },
    { path: ':id',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_3__["DetailsComponent"] }
];
var FeedPageRoutingModule = /** @class */ (function () {
    function FeedPageRoutingModule() {
    }
    FeedPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FeedPageRoutingModule);
    return FeedPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/feed-page/feed-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/feed-page/feed-page.module.ts ***!
  \*****************************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _feed_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed-page-routing.module */ "./src/app/pages/feed-page/feed-page-routing.module.ts");
/* harmony import */ var _feeds_feeds_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feeds/feeds.component */ "./src/app/pages/feed-page/feeds/feeds.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/pages/feed-page/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_feeds_feeds_component__WEBPACK_IMPORTED_MODULE_3__["FeedsComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _feed_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeedPageRoutingModule"]
            ]
        })
    ], FeedPageModule);
    return FeedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/feed-page/feeds/feeds.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/feed-page/feeds/feeds.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"menu-button\" ></ion-menu-button>\n    </ion-buttons>\n\n\n    <ion-title text-center=\"\">News Feeds</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list class=''>\n\n    <ion-card *ngFor=\"let feed of feeds\" routerLink=\"./{{feed.id}}\" >\n      <ion-card-header>\n\n        <h3 class=\"feed-title\"> {{feed.title}}</h3>\n      </ion-card-header>\n\n      <ion-card-content>\n        {{feed.highlight}} <span style=\"font-style: italic;color: red\">Click To Read More</span>\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </ion-list>\n\n<!--  <ion-infinite-scroll threshold=\"10px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/feed-page/feeds/feeds.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/feed-page/feeds/feeds.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed-title {\n  color: var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZC1wYWdlL2ZlZWRzL0M6XFx4YW1wcFxcaHRkb2NzXFx0b3lielxccHJvamVjdHNcXHF1aXpvXFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxmZWVkLXBhZ2VcXGZlZWRzXFxmZWVkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVlZC1wYWdlL2ZlZWRzL2ZlZWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWQtdGl0bGV7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/feed-page/feeds/feeds.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/feed-page/feeds/feeds.component.ts ***!
  \**********************************************************/
/*! exports provided: FeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedsComponent", function() { return FeedsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_feeds_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/feeds.service */ "./src/app/services/feeds.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedsComponent = /** @class */ (function () {
    function FeedsComponent(feedService) {
        this.feedService = feedService;
    }
    FeedsComponent.prototype.ngOnInit = function () {
        this.feeds = Object.values(this.feedService.getAllFeeds());
    };
    FeedsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feeds',
            template: __webpack_require__(/*! ./feeds.component.html */ "./src/app/pages/feed-page/feeds/feeds.component.html"),
            styles: [__webpack_require__(/*! ./feeds.component.scss */ "./src/app/pages/feed-page/feeds/feeds.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_feeds_service__WEBPACK_IMPORTED_MODULE_1__["FeedsService"]])
    ], FeedsComponent);
    return FeedsComponent;
}());



/***/ }),

/***/ "./src/app/services/feeds.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/feeds.service.ts ***!
  \*******************************************/
/*! exports provided: FeedsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedsService", function() { return FeedsService; });
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

var FeedsService = /** @class */ (function () {
    function FeedsService() {
        this.feed_item = {
            id: {
                title: '',
                image: '',
                id: 2,
                highlight: '',
                content: '',
                comments: [],
                views: 100
            }
        };
        this.feeds = {
            1: {
                title: 'JAMB 2020 Registration',
                image: '',
                id: 1,
                highlight: 'The Joint Admissions and Matriculation Board (JAMB) management has finally declared around December 2020 for the commencement of sales of the 2020 UTME application forms.',
                content: 'The Joint Admissions and Matriculation Board (JAMB) management has finally declared around December 2020 for the commencement of sales of the 2020 UTME application forms <br>As Jamb 2020 registration is set to begin, the Joint Admission and Matriculation board (JAMB) has announced that all candidates who wish to sit for Jamb 2020 should go and get NIN. NIN Stands for National Identification Number.\n' +
                    '\n' +
                    'The reason to get Jamb National Identification Number (JAMB NIN) is to ensure the fingerprint/biometric and other details of a candidate are captured to check examination Malpractice.',
                comments: [],
                views: 100
            },
            2: {
                title: 'WAEC GCE Registration 2020 Has Commenced',
                image: '',
                id: 2,
                highlight: ' This is to inform intending candidates for the West African Senior School Certificate Examination (WASSCE) for Private Candidates, 2020 – First Series are hereby informed that the registration will commence on',
                content: 'This is to inform intending candidates for the West African Senior School Certificate Examination (WASSCE) for Private Candidates, 2020 – First Series are hereby informed that the registration will commence on October 15th, 2019.<br>Candidates should also note that the 2020 WAEC GCE registration procedure has been designed to accommodate biometric features that will be used for validation at the examination centres.<br> ' +
                    'WAEC GCE normal registration period is from Monday, October 15th, 2019 to Friday, December 31, 2019. <br>Candidates MUST conclude registration within two weeks of first access to the website during the registration period. They should ensure that their names, gender, passport photographs, dates of birth and subjects are correct. They are also to print the Admission Notiec/Photo Card as evidence of successful registration which will serve as identification during the examination. The Result Checker PIN will also be on the Photo Card. Only Digital Personal Scanner should be used for fingerprint registration.',
                comments: [],
                views: 100
            },
            3: {
                title: 'Candidates Must Acquire NIN Before Registration-JAMB',
                image: '',
                id: 3,
                highlight: 'The Joint Admissions and Matriculation Board (JAMB) has advised candidates who wish to take part in the 2020 Unified Tertiary Matriculation Examination (UTME) to register with the National Identity Management Commission (NIMC) to enable them obtain the National Identification Number (NIN).',
                content: 'According to JAMB, the NIN would be compulsory for UTME registration next year and only candidates with NIN would be allowed to sit for the examination next year.<br>' +
                    '<br> In view of this, all candidates desiring to register for the 2020 UTME, other JAMB processes, are urged to visit the nearest NIMC centre or its licensed agents for the NIN registration ahead of the UTME registration, if they have not done so as the board has made arrangements with NIMC for candidates who do not have the NIN to be registered at the centre by NIMC or its licensed agents.\n' +
                    '<br>' +
                    'The board also has disclosed that it would no longer need to capture the biometrics of candidates during UTME registration next year as the information of candidates required by the board would be uploaded from the data captured by the NIMC for registration.<br>' +
                    '<br>' +
                    'Commenting on this, the JAMB\'s Head of Information, Dr. Fabian Benjamin, explained that the NIN would guard against all forms of registration infractions.<br>' +
                    'He mentioned that candidates would be required to present their NIN at the point of registration.',
                comments: [],
                views: 100
            },
        };
    }
    FeedsService.prototype.getAllFeeds = function () {
        return this.feeds;
    };
    FeedsService.prototype.getFeed = function (feed_id) {
        return this.feeds[feed_id];
    };
    FeedsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FeedsService);
    return FeedsService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-feed-page-feed-page-module.js.map