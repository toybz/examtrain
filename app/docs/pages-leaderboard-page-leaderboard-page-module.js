(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaderboard-page-leaderboard-page-module"],{

/***/ "./src/app/pages/leaderboard-page/leaderboard-page.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/leaderboard-page/leaderboard-page.module.ts ***!
  \*******************************************************************/
/*! exports provided: LeaderboardPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardPagePageModule", function() { return LeaderboardPagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leaderboard_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leaderboard-page.page */ "./src/app/pages/leaderboard-page/leaderboard-page.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: "",
        component: _leaderboard_page_page__WEBPACK_IMPORTED_MODULE_5__["LeaderboardPagePage"]
    }
];
var LeaderboardPagePageModule = /** @class */ (function () {
    function LeaderboardPagePageModule() {
    }
    LeaderboardPagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_leaderboard_page_page__WEBPACK_IMPORTED_MODULE_5__["LeaderboardPagePage"]]
        })
    ], LeaderboardPagePageModule);
    return LeaderboardPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/leaderboard-page/leaderboard-page.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/leaderboard-page/leaderboard-page.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "LeaderBoard Page\r\n"

/***/ }),

/***/ "./src/app/pages/leaderboard-page/leaderboard-page.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/leaderboard-page/leaderboard-page.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYWRlcmJvYXJkLXBhZ2UvbGVhZGVyYm9hcmQtcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/leaderboard-page/leaderboard-page.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/leaderboard-page/leaderboard-page.page.ts ***!
  \*****************************************************************/
/*! exports provided: LeaderboardPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardPagePage", function() { return LeaderboardPagePage; });
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

var LeaderboardPagePage = /** @class */ (function () {
    function LeaderboardPagePage() {
    }
    LeaderboardPagePage.prototype.ngOnInit = function () { };
    LeaderboardPagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-leaderboard-page",
            template: __webpack_require__(/*! ./leaderboard-page.page.html */ "./src/app/pages/leaderboard-page/leaderboard-page.page.html"),
            styles: [__webpack_require__(/*! ./leaderboard-page.page.scss */ "./src/app/pages/leaderboard-page/leaderboard-page.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaderboardPagePage);
    return LeaderboardPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-leaderboard-page-leaderboard-page-module.js.map