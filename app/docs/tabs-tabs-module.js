(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"]],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"dashboard\">\r\n      <ion-icon name=\"analytics\"></ion-icon>\r\n      <ion-label>Dashboard</ion-label>\r\n    </ion-tab-button>\r\n\r\n\r\n    <ion-tab-button tab=\"study\">\r\n      <ion-icon name=\"paper\"></ion-icon>\r\n      <ion-label>Study</ion-label>\r\n    </ion-tab-button>\r\n\r\n\r\n    <ion-tab-button  tab=\"quiz\">\r\n      <ion-icon name=\"play\"></ion-icon>\r\n      <ion-label>Quiz</ion-label>\r\n    </ion-tab-button>\r\n\r\n\r\n    <ion-tab-button  tab=\"feed\">\r\n      <ion-icon name=\"stats\"></ion-icon>\r\n      <ion-label>Feed</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"history\">\r\n      <ion-icon name=\"time\"></ion-icon>\r\n      <ion-label>History</ion-label>\r\n    </ion-tab-button>\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!--  <ion-tab-button tab=\"leaderboard\">\r\n      <ion-icon name=\"stats\"></ion-icon>\r\n      <ion-label>LeaderBoard</ion-label>\r\n    </ion-tab-button>-->\r\n\r\n\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blink {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite; }\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxceGFtcHBcXGh0ZG9jc1xcdG95YnpcXHByb2plY3RzXFxxdWl6b1xcYXBwL3NyY1xcYXBwXFx0YWJzXFx0YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUFxQztVQUFyQyxxQ0FBcUMsRUFBQTs7QUFHdkM7RUFDRTtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQUZkO0VBQ0U7SUFDRSxVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxpbmt7XHJcbiAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGlua2VyIHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tabs",
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "tabs",
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            {
                path: "dashboard",
                children: [
                    {
                        path: "",
                        loadChildren: "../pages/dashboard-page/dashboard-page.module#DashboardPagePageModule"
                    }
                ]
            },
            {
                path: "history",
                children: [
                    {
                        path: "",
                        loadChildren: "../pages/history-page/history-page.module#HistoryPagePageModule"
                    }
                ]
            },
            {
                path: "quiz",
                children: [
                    {
                        path: "",
                        loadChildren: "../pages/quiz-landing/quiz-landing.module#QuizLandingPageModule"
                    }
                ]
            },
            {
                path: "study",
                children: [
                    {
                        path: "",
                        loadChildren: "../pages/study-page/study-page.module#StudyPagePageModule"
                    }
                ]
            },
            {
                path: "feed",
                children: [
                    {
                        path: "",
                        loadChildren: "../pages/feed-page/feed-page.module#FeedPageModule"
                    }
                ]
            },
            {
                path: "leaderboard",
                children: [
                    {
                        path: "",
                        loadChildren: "../pages/leaderboard-page/leaderboard-page.module#LeaderboardPagePageModule"
                    }
                ]
            },
            {
                path: "",
                redirectTo: "/tabs/dashboard",
                pathMatch: "full"
            }
        ]
    },
    {
        path: "",
        redirectTo: "/tabs/dashboard",
        pathMatch: "full"
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map