(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-study-page-view-tutorial-view-tutorial-module"],{

/***/ "./src/app/pages/study-page/view-tutorial/view-tutorial.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/study-page/view-tutorial/view-tutorial.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n<ion-toolbar>\r\n\r\n  <ion-buttons color=\"white\" slot=\"start\" (click)=\"goBack()\">\r\n    <ion-button>\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back\" style=\"color: #f4f5f8\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n<ion-title>{{subject + '- ' + topic }}</ion-title>\r\n</ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card no-margin no-padding slot=\"fixed\">\r\n\r\n    <ion-card-content no-margin no-padding style=\"background-color: black\"  >\r\n\r\n      <iframe width=\"\" height=\"200\"  [src]=\"selected_sub_topic.url | safeUrl\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen style=\"width: 100%\" id=\"video_frame\"></iframe>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n    <div class=\"after_video\"></div>\r\n\r\n\r\n<ion-card>\r\n  <ion-card-content>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n\r\n\r\n          <ion-tab-button tab=\"schedule\">\r\n            <ion-icon name=\"bookmark\"></ion-icon>\r\n            <ion-label>Bookmark</ion-label>\r\n          </ion-tab-button>\r\n\r\n\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n\r\n          <ion-tab-button tab=\"schedule\">\r\n            <ion-icon name=\"share\"></ion-icon>\r\n            <ion-label>Share</ion-label>\r\n          </ion-tab-button>\r\n\r\n        </ion-col>\r\n\r\n      <ion-col>\r\n        <ion-tab-button tab=\"schedule\">\r\n          <ion-icon name=\"play-circle\"></ion-icon>\r\n          <ion-label>Assessment</ion-label>\r\n        </ion-tab-button>\r\n        </ion-col>\r\n\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-card-content>\r\n\r\n</ion-card>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n     {{selected_sub_topic.description || selected_sub_topic.topic}}\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n      <ion-list *ngIf=\"sub_topics\">\r\n\r\n   <!--     <ion-item>  <ion-icon name=\"checkmark-circle-outline\"></ion-icon>    1- Introduction      </ion-item>-->\r\n\r\n\r\n\r\n\r\n\r\n          <ion-item (click)=\"setSelectedTopic(sub)\" *ngFor=\"let sub of sub_topics ; let count = index\" >\r\n          <p class=\"sub_topics\" [class.currently_playing]=\"sub.sub_topic_id==selected_sub_topic.sub_topic_id\" >  {{ count+1 + '- ' + sub.sub_topic}} </p>\r\n                </ion-item>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </ion-list>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/study-page/view-tutorial/view-tutorial.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/study-page/view-tutorial/view-tutorial.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".currently_playing {\n  background-color: var(--ion-color-primary);\n  color: white; }\n\n.card-video-header {\n  background-color: var(--ion-color-primary); }\n\nion-icon {\n  color: var(--ion-color-primary); }\n\n.after_video {\n  margin-top: 220px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3R1ZHktcGFnZS92aWV3LXR1dG9yaWFsL0M6XFx4YW1wcFxcaHRkb2NzXFx0b3lielxccHJvamVjdHNcXHF1aXpvXFxhcHAvc3JjXFxhcHBcXHBhZ2VzXFxzdHVkeS1wYWdlXFx2aWV3LXR1dG9yaWFsXFx2aWV3LXR1dG9yaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQTBDO0VBQzFDLFlBQVksRUFBQTs7QUFFZDtFQUNFLDBDQUEwQyxFQUFBOztBQUc1QztFQUNFLCtCQUErQixFQUFBOztBQUVqQztFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3R1ZHktcGFnZS92aWV3LXR1dG9yaWFsL3ZpZXctdHV0b3JpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VycmVudGx5X3BsYXlpbmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2FyZC12aWRlby1oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24taWNvbntcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbi5hZnRlcl92aWRlb3tcclxuICBtYXJnaW4tdG9wOiAyMjBweDtcclxuIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/study-page/view-tutorial/view-tutorial.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/study-page/view-tutorial/view-tutorial.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewTutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTutorialComponent", function() { return ViewTutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_study_study_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/study/study.service */ "./src/app/services/study/study.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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







var ViewTutorialComponent = /** @class */ (function () {
    function ViewTutorialComponent(_location, router, route, study_service, sanitizer, loadingController) {
        this._location = _location;
        this.router = router;
        this.route = route;
        this.study_service = study_service;
        this.sanitizer = sanitizer;
        this.loadingController = loadingController;
    }
    ViewTutorialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page_data = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            _this.subject = params.get("subject");
            return _this.study_service.getTopicsDetails(_this.subject, params.get("topic_id"));
        }));
        this.page_data.subscribe(function (data) {
            _this.topic = data.topic_name;
            _this.description = data.description;
            _this.sub_topics = Object.values(data.sub_topics);
            _this.setSelectedTopic(_this.sub_topics[0]);
        });
    };
    ViewTutorialComponent.prototype.setSelectedTopic = function (sub_topic) {
        // sub_topic.url =  this.sanitizer.bypassSecurityTrustResourceUrl(sub_topic.url);
        this.selected_sub_topic = sub_topic;
        this.presentLoading();
        //   console.log('The SubTopic URL' , this.selected_sub_topic)
    };
    ViewTutorialComponent.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please Wait...',
                            backdropDismiss: true
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        document.getElementById('video_frame').onload = function () {
                            console.log('iframe loaded');
                            loading.dismiss();
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewTutorialComponent.prototype.goBack = function () {
        this.router.navigate([
            "/tabs/study/"
        ]);
    };
    ViewTutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-tutorial',
            template: __webpack_require__(/*! ./view-tutorial.component.html */ "./src/app/pages/study-page/view-tutorial/view-tutorial.component.html"),
            styles: [__webpack_require__(/*! ./view-tutorial.component.scss */ "./src/app/pages/study-page/view-tutorial/view-tutorial.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_study_study_service__WEBPACK_IMPORTED_MODULE_4__["StudyService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
    ], ViewTutorialComponent);
    return ViewTutorialComponent;
}());



/***/ }),

/***/ "./src/app/pages/study-page/view-tutorial/view-tutorial.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/study-page/view-tutorial/view-tutorial.module.ts ***!
  \************************************************************************/
/*! exports provided: ViewTutorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTutorialModule", function() { return ViewTutorialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_tutorial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-tutorial.component */ "./src/app/pages/study-page/view-tutorial/view-tutorial.component.ts");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared-components/shared-components.module */ "./src/app/shared-components/shared-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//study materials page  Pdf, Video, article.Contains link to test yourself on current studying topic--leads to quiz page
var routes = [
    {
        path: "",
        component: _view_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["ViewTutorialComponent"]
    }
];
var ViewTutorialModule = /** @class */ (function () {
    function ViewTutorialModule() {
    }
    ViewTutorialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["ViewTutorialComponent"]],
            entryComponents: [_view_tutorial_component__WEBPACK_IMPORTED_MODULE_5__["ViewTutorialComponent"]]
        })
    ], ViewTutorialModule);
    return ViewTutorialModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-study-page-view-tutorial-view-tutorial-module.js.map