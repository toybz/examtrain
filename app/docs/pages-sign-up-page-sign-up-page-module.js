(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-page-sign-up-page-module"],{

/***/ "./src/app/pages/sign-up-page/sign-up-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/sign-up-page/sign-up-page.module.ts ***!
  \***********************************************************/
/*! exports provided: SignUpPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPagePageModule", function() { return SignUpPagePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up-page.page */ "./src/app/pages/sign-up-page/sign-up-page.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "",
        component: _sign_up_page_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPagePage"]
    }
];
var SignUpPagePageModule = /** @class */ (function () {
    function SignUpPagePageModule() {
    }
    SignUpPagePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_sign_up_page_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPagePage"]]
        })
    ], SignUpPagePageModule);
    return SignUpPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/sign-up-page/sign-up-page.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/sign-up-page/sign-up-page.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-content no-padding=\"\">\r\n\r\n  <div   class=\"page_body\" padding=\"\">\r\n\r\n\r\n\r\n    <div style=\"\" class=\"top_div\">\r\n      <img src=\"assets/images/logo_white.png\">\r\n\r\n    </div>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <h2>Register</h2>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n        <form #registerForm=\"ngForm\" class=\"login_form\">\r\n\r\n\r\n\r\n          <ion-input [(ngModel)]=\"user.username\"  name=\"username\"  placeholder=\"Username\" required=\"\" ></ion-input>\r\n\r\n          <ion-input [(ngModel)]=\"user.email\"   name=\"email\" placeholder=\"Email\" type=\"email\" id=\"email\" required=\"\" #email=\"ngModel\"></ion-input>\r\n\r\n          <ion-input [(ngModel)]=\"user.password\" name=\"password\"  placeholder=\"Password\" type=\"password\" required=\"\"></ion-input>\r\n\r\n        </form>\r\n\r\n\r\n    <ion-row>\r\n\r\n\r\n\r\n      <ion-col>\r\n        <ion-button  expand=\"block\"  shape=\"round\" fill=\"\" size=\"large\" class=\"login_button\" (click)=\"registerUser()\"  >Sign Up</ion-button>\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n    <br>\r\n\r\n    <ion-row>\r\n\r\n      <ion-col>\r\n\r\n        <ion-button router-direction=\"forward\" expand=\"block\"  shape=\"round\" fill=\"outline\" size=\"\" class=\"button\" routerLink=\"/login\" >Login</ion-button>\r\n\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\"  shape=\"round\" fill=\"outline\" size=\"\" class=\"button\" router-direction=\"forward\"  routerLink=\"/tabs/quiz\" >Skip</ion-button>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n\r\n\r\n\r\n <!--   <ion-button (click)=\"registerUser()\" class=\"success\">Submit</ion-button>\r\n\r\n\r\n        <ion-button routerLink=\"/login\" class=\"success\">Login</ion-button>\r\n\r\n\r\n        <ion-button routerLink=\"/tabs/quiz\" class=\"success\">Skip</ion-button>\r\n-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/sign-up-page/sign-up-page.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/sign-up-page/sign-up-page.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top_div {\n  height: 17vh !important;\n  text-align: center;\n  padding: 5vh 10vw; }\n\n.page_body {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(\"/assets/images/bg1.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white !important;\n  text-align: center;\n  padding: 0 10vw; }\n\nion-input {\n  --color: white;\n  border: #f17b7b solid 1px;\n  border-radius: 10px;\n  margin-bottom: 3vh; }\n\n.login_button {\n  --color: white !important;\n  --background: #9c0808;\n  --background-activated:#9c0808;\n  --background-hover: #9c0808;\n  --background-focused: #9c0808; }\n\n.button {\n  --color: var(--ion-color-primary)\r\n; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi11cC1wYWdlL0M6XFx4YW1wcFxcaHRkb2NzXFx0b3lielxccHJvamVjdHNcXHF1aXpvXFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxzaWduLXVwLXBhZ2VcXHNpZ24tdXAtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osK0NBQStDO0VBQy9DLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBRXRCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUlqQjtFQUNFLGNBQVE7RUFDUix5QkFBeUI7RUFDekIsbUJBQW1CO0VBRW5CLGtCQUFrQixFQUFBOztBQU9wQjtFQUNFLHlCQUFRO0VBQ1IscUJBQWE7RUFDYiw4QkFBdUI7RUFDdkIsMkJBQW1CO0VBQ25CLDZCQUFxQixFQUFBOztBQUl2QjtFQUNFO0FBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24tdXAtcGFnZS9zaWduLXVwLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4udG9wX2RpdntcclxuICBoZWlnaHQ6IDE3dmggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNXZoIDEwdnc7XHJcbn1cclxuXHJcbi5wYWdlX2JvZHl7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmcxLmpwZ1wiKSAgO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDEwdnc7XHJcblxyXG59XHJcblxyXG5pb24taW5wdXR7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAjZjE3YjdiIHNvbGlkIDFweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gLy8gcGFkZGluZzogMXZoICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG59XHJcblxyXG4ubG9naW5fZm9ybXtcclxuXHJcbn1cclxuXHJcbi5sb2dpbl9idXR0b257XHJcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6ICM5YzA4MDg7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojOWMwODA4O1xyXG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogIzljMDgwODtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogIzljMDgwODtcclxuXHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/sign-up-page/sign-up-page.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-up-page/sign-up-page.page.ts ***!
  \*********************************************************/
/*! exports provided: SignUpPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPagePage", function() { return SignUpPagePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage/local-storage.service */ "./src/app/services/local-storage/local-storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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





var SignUpPagePage = /** @class */ (function () {
    // email
    function SignUpPagePage(userService, route, localStorage, loadingController, alertController) {
        this.userService = userService;
        this.route = route;
        this.localStorage = localStorage;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.test_user = 'user' + Math.floor(Math.random() * 999);
        this.user = {
            username: '',
            password: '',
            email: ''
        };
    }
    SignUpPagePage.prototype.ngOnInit = function () { };
    SignUpPagePage.prototype.validate = function () {
        var val = this.user.username && this.user.password && this.user.email ? true : false;
        return val;
    };
    SignUpPagePage.prototype.registerUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, loading, tr;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.validate()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                message: 'Please Fill all Field Correctly'
                            })];
                    case 1:
                        message = _a.sent();
                        return [4 /*yield*/, message.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please Wait...',
                            backdropDismiss: false
                        })];
                    case 4:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 5:
                        _a.sent();
                        tr = this.userService.registerUser(this.user);
                        tr.subscribe(function (new_user) { return __awaiter(_this, void 0, void 0, function () {
                            var alert;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        new_user.user.signed_in = true;
                                        this.localStorage.saveUser(new_user.user);
                                        loading.dismiss();
                                        return [4 /*yield*/, this.alertController.create({
                                                message: 'Registration Successful'
                                            })];
                                    case 1:
                                        alert = _a.sent();
                                        return [4 /*yield*/, alert.present()];
                                    case 2:
                                        _a.sent();
                                        setTimeout(function () {
                                            alert.dismiss();
                                            _this.route.navigate(['/tabs/dashboard']);
                                        }, 2000);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (response) { return __awaiter(_this, void 0, void 0, function () {
                            var error_msg, alert, err;
                            var _this = this;
                            return __generator(this, function (_a) {
                                loading.dismiss();
                                console.log(response);
                                error_msg = 'Registration Failed.Please try again<br>';
                                alert = function () { return __awaiter(_this, void 0, void 0, function () {
                                    var alert;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.alertController.create({
                                                    message: error_msg
                                                })];
                                            case 1:
                                                alert = _a.sent();
                                                return [4 /*yield*/, alert.present()];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); };
                                try {
                                    err = response.error;
                                    if (typeof err['errors']['email'] === 'string' || typeof err.errors.username === 'string') {
                                        if (typeof err.errors.email === 'string') {
                                            error_msg = error_msg + 'This email exist, please use another one <br>';
                                        }
                                        if (typeof err.errors.username === 'string') {
                                            error_msg = error_msg + 'This username exist, please use another one';
                                        }
                                    }
                                }
                                finally {
                                    alert();
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    SignUpPagePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-sign-up-page",
            template: __webpack_require__(/*! ./sign-up-page.page.html */ "./src/app/pages/sign-up-page/sign-up-page.page.html"),
            styles: [__webpack_require__(/*! ./sign-up-page.page.scss */ "./src/app/pages/sign-up-page/sign-up-page.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], SignUpPagePage);
    return SignUpPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sign-up-page-sign-up-page-module.js.map