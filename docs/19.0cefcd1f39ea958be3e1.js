(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{wzKw:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=e("Xfvc"),i=e("HPR3"),o=e("m2Nl"),d=function(){function l(l,n,e,u,t){this.localStorage=l,this.util=n,this.router=e,this.route=u,this.quizService=t,this.data_loaded=!1,this.quiz_journey_data=!1,this.customActionSheetOptions={header:"Select Category  (Scroll Down For More)"},this.quiz_config={category:"",difficulty:"",amount:10},this.categories=[]}return l.prototype.ngOnInit=function(){var l=this;this.localStorage.getPausedQuiz().subscribe(function(n){l.util.isEmptyObject(n)||(l.paused_quiz=n,l.paused_quiz.category=n.questions[0].category),l.data_loaded=!0}),this.quizService.getCategories().subscribe(function(n){console.log(n),l.categories=n.trivia_categories})},l.prototype.startNewQuiz=function(){this.paused_quiz=!1},l.prototype.resumePausedQuiz=function(){this.quizService.setInstantStartWithPausedQuiz(!1),this.router.navigate(["/quiz-page/"+this.paused_quiz.quiz_config.category+"/"+this.paused_quiz.quiz_config.difficulty+"/"+this.paused_quiz.quiz_config.amount+"?testes="+10*Math.random()])},l.prototype.submitQuizConfiguration=function(){if(console.log(this.quiz_config),!this.quiz_config.category||!this.quiz_config.difficulty||this.quiz_config.amount<1)return this.util.showToast("Please Enter Data For all Fields To Proceed",5e3),!1;this.localStorage.deletePausedQuiz(),this.router.navigate(["/quiz-page/"+this.quiz_config.category+"/"+this.quiz_config.difficulty+"/"+this.quiz_config.amount])},l}(),a=function(){return function(){}}(),r=e("pMnS"),c=e("oBZk"),g=e("ZZ/e"),s=e("gIcY"),f=e("Ip0R"),m=e("ZYCi"),h=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function p(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,41,"ion-card",[],null,null,null,c.N,c.d)),u["\u0275did"](1,49152,null,0,g.l,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](2,0,null,0,7,"ion-card-header",[],null,null,null,c.K,c.f)),u["\u0275did"](3,49152,null,0,g.n,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](4,0,null,0,2,"ion-card-title",[],null,null,null,c.M,c.h)),u["\u0275did"](5,49152,null,0,g.p,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,0,["Challenge"])),(l()(),u["\u0275eld"](7,0,null,0,2,"ion-card-subtitle",[],null,null,null,c.L,c.g)),u["\u0275did"](8,49152,null,0,g.o,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,0,["Level : Beginner "])),(l()(),u["\u0275eld"](10,0,null,0,31,"ion-card-content",[],null,null,null,c.J,c.e)),u["\u0275did"](11,49152,null,0,g.m,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](12,0,null,0,4,"ion-item",[["no-margin",""],["no-padding",""]],null,null,null,c.Y,c.s)),u["\u0275did"](13,49152,null,0,g.G,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](14,0,null,0,2,"ion-label",[],null,null,null,c.Z,c.t)),u["\u0275did"](15,49152,null,0,g.M,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](16,0,["Category > ",""])),(l()(),u["\u0275eld"](17,0,null,0,21,"ion-grid",[],null,null,null,c.S,c.m)),u["\u0275did"](18,49152,null,0,g.z,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](19,0,null,0,19,"ion-row",[["justify-content-center",""]],null,null,null,c.cb,c.w)),u["\u0275did"](20,49152,null,0,g.hb,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](21,0,null,0,5,"ion-col",[["size","4"]],null,null,null,c.O,c.i)),u["\u0275did"](22,49152,null,0,g.s,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](23,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Current Page"])),(l()(),u["\u0275eld"](25,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](26,null,["",""])),(l()(),u["\u0275eld"](27,0,null,0,5,"ion-col",[["size","4"]],null,null,null,c.O,c.i)),u["\u0275did"](28,49152,null,0,g.s,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](29,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Countdown"])),(l()(),u["\u0275eld"](31,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](32,null,[" ","Secs"])),(l()(),u["\u0275eld"](33,0,null,0,5,"ion-col",[["size","4"]],null,null,null,c.O,c.i)),u["\u0275did"](34,49152,null,0,g.s,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](35,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Remaining"])),(l()(),u["\u0275eld"](37,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](38,null,["",""])),(l()(),u["\u0275eld"](39,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.resumePausedQuiz()&&u),u},c.H,c.b)),u["\u0275did"](40,49152,null,0,g.j,[u.ChangeDetectorRef,u.ElementRef],{expand:[0,"expand"]},null),(l()(),u["\u0275ted"](-1,0,["Resume"]))],function(l,n){l(n,22,0,"4"),l(n,28,0,"4"),l(n,34,0,"4"),l(n,40,0,"block")},function(l,n){var e=n.component;l(n,16,0,e.paused_quiz.category),l(n,26,0,e.paused_quiz.current_index+1),l(n,32,0,e.paused_quiz.countdown),l(n,38,0,e.paused_quiz.quiz_config.amount-(e.paused_quiz.current_index+1))})}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,46,"ion-card",[],null,null,null,c.N,c.d)),u["\u0275did"](1,49152,null,0,g.l,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](2,0,null,0,7,"ion-card-header",[],null,null,null,c.K,c.f)),u["\u0275did"](3,49152,null,0,g.n,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](4,0,null,0,2,"ion-card-title",[],null,null,null,c.M,c.h)),u["\u0275did"](5,49152,null,0,g.p,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,0,["Paused Quiz"])),(l()(),u["\u0275eld"](7,0,null,0,2,"ion-card-subtitle",[],null,null,null,c.L,c.g)),u["\u0275did"](8,49152,null,0,g.o,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,0,["Paused Quiz Found "])),(l()(),u["\u0275eld"](10,0,null,0,36,"ion-card-content",[],null,null,null,c.J,c.e)),u["\u0275did"](11,49152,null,0,g.m,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](12,0,null,0,4,"ion-item",[["no-margin",""],["no-padding",""]],null,null,null,c.Y,c.s)),u["\u0275did"](13,49152,null,0,g.G,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](14,0,null,0,2,"ion-label",[],null,null,null,c.Z,c.t)),u["\u0275did"](15,49152,null,0,g.M,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](16,0,["Category > ",""])),(l()(),u["\u0275eld"](17,0,null,0,21,"ion-grid",[],null,null,null,c.S,c.m)),u["\u0275did"](18,49152,null,0,g.z,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](19,0,null,0,19,"ion-row",[["justify-content-center",""]],null,null,null,c.cb,c.w)),u["\u0275did"](20,49152,null,0,g.hb,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](21,0,null,0,5,"ion-col",[["size","4"]],null,null,null,c.O,c.i)),u["\u0275did"](22,49152,null,0,g.s,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](23,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Current Page"])),(l()(),u["\u0275eld"](25,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](26,null,["",""])),(l()(),u["\u0275eld"](27,0,null,0,5,"ion-col",[["size","4"]],null,null,null,c.O,c.i)),u["\u0275did"](28,49152,null,0,g.s,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](29,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Countdown"])),(l()(),u["\u0275eld"](31,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](32,null,[" ","Secs"])),(l()(),u["\u0275eld"](33,0,null,0,5,"ion-col",[["size","4"]],null,null,null,c.O,c.i)),u["\u0275did"](34,49152,null,0,g.s,[u.ChangeDetectorRef,u.ElementRef],{size:[0,"size"]},null),(l()(),u["\u0275eld"](35,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Remaining"])),(l()(),u["\u0275eld"](37,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u["\u0275ted"](38,null,["",""])),(l()(),u["\u0275eld"](39,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.resumePausedQuiz()&&u),u},c.H,c.b)),u["\u0275did"](40,49152,null,0,g.j,[u.ChangeDetectorRef,u.ElementRef],{expand:[0,"expand"]},null),(l()(),u["\u0275ted"](-1,0,["Resume"])),(l()(),u["\u0275eld"](42,0,null,0,1,"p",[["text-center",""]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["OR"])),(l()(),u["\u0275eld"](44,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.startNewQuiz()&&u),u},c.H,c.b)),u["\u0275did"](45,49152,null,0,g.j,[u.ChangeDetectorRef,u.ElementRef],{expand:[0,"expand"]},null),(l()(),u["\u0275ted"](-1,0,["Start New Quiz "]))],function(l,n){l(n,22,0,"4"),l(n,28,0,"4"),l(n,34,0,"4"),l(n,40,0,"block"),l(n,45,0,"block")},function(l,n){var e=n.component;l(n,16,0,e.paused_quiz.category),l(n,26,0,e.paused_quiz.current_index+1),l(n,32,0,e.paused_quiz.countdown),l(n,38,0,e.paused_quiz.quiz_config.amount-(e.paused_quiz.current_index+1))})}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,c.db,c.y)),u["\u0275did"](1,49152,null,0,g.mb,[u.ChangeDetectorRef,u.ElementRef],{value:[0,"value"]},null),(l()(),u["\u0275ted"](2,0,["",""]))],function(l,n){l(n,1,0,u["\u0275inlineInterpolate"](1,"",n.context.$implicit.id,""))},function(l,n){l(n,2,0,n.context.$implicit.name)})}function v(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,58,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var t=!0,i=l.component;return"submit"===n&&(t=!1!==u["\u0275nov"](l,2).onSubmit(e)&&t),"reset"===n&&(t=!1!==u["\u0275nov"](l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.submitQuizConfiguration()&&t),t},null,null)),u["\u0275did"](1,16384,null,0,s.j,[],null,null),u["\u0275did"](2,4210688,[["quizConfigForm",4]],0,s.g,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,s.a,null,[s.g]),u["\u0275did"](4,16384,null,0,s.f,[[4,s.a]],null,null),(l()(),u["\u0275eld"](5,0,null,null,50,"ion-list",[],null,null,null,c.bb,c.u)),u["\u0275did"](6,49152,null,0,g.N,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](7,0,null,0,1,"ion-list-header",[],null,null,null,c.ab,c.v)),u["\u0275did"](8,49152,null,0,g.O,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](9,0,null,0,13,"ion-item",[],null,null,null,c.Y,c.s)),u["\u0275did"](10,49152,null,0,g.G,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](11,0,null,0,2,"ion-label",[],null,null,null,c.Z,c.t)),u["\u0275did"](12,49152,null,0,g.M,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,0,["Category"])),(l()(),u["\u0275eld"](14,0,null,0,8,"ion-select",[["interface","action-sheet"],["name","category"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u["\u0275nov"](l,15)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==u["\u0275nov"](l,15)._handleChangeEvent(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(i.quiz_config.category=e)&&t),t},c.eb,c.x)),u["\u0275did"](15,16384,null,0,g.Kb,[u.ElementRef],null,null),u["\u0275prd"](1024,null,s.c,function(l){return[l]},[g.Kb]),u["\u0275did"](17,671744,null,0,s.h,[[2,s.a],[8,null],[8,null],[6,s.c]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,s.d,null,[s.h]),u["\u0275did"](19,16384,null,0,s.e,[[4,s.d]],null,null),u["\u0275did"](20,49152,null,0,g.lb,[u.ChangeDetectorRef,u.ElementRef],{placeholder:[0,"placeholder"],name:[1,"name"],interface:[2,"interface"],interfaceOptions:[3,"interfaceOptions"]},null),(l()(),u["\u0275and"](16777216,null,0,1,null,R)),u["\u0275did"](22,278528,null,0,f.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](23,0,null,0,20,"ion-item",[],null,null,null,c.Y,c.s)),u["\u0275did"](24,49152,null,0,g.G,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](25,0,null,0,2,"ion-label",[],null,null,null,c.Z,c.t)),u["\u0275did"](26,49152,null,0,g.M,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,0,["Difficulty Level"])),(l()(),u["\u0275eld"](28,0,null,0,15,"ion-select",[["interface","action-sheet"],["name","difficulty"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u["\u0275nov"](l,29)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==u["\u0275nov"](l,29)._handleChangeEvent(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(i.quiz_config.difficulty=e)&&t),t},c.eb,c.x)),u["\u0275did"](29,16384,null,0,g.Kb,[u.ElementRef],null,null),u["\u0275prd"](1024,null,s.c,function(l){return[l]},[g.Kb]),u["\u0275did"](31,671744,null,0,s.h,[[2,s.a],[8,null],[8,null],[6,s.c]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,s.d,null,[s.h]),u["\u0275did"](33,16384,null,0,s.e,[[4,s.d]],null,null),u["\u0275did"](34,49152,null,0,g.lb,[u.ChangeDetectorRef,u.ElementRef],{placeholder:[0,"placeholder"],name:[1,"name"],interface:[2,"interface"]},null),(l()(),u["\u0275eld"](35,0,null,0,2,"ion-select-option",[["value","hard"]],null,null,null,c.db,c.y)),u["\u0275did"](36,49152,null,0,g.mb,[u.ChangeDetectorRef,u.ElementRef],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,0,["Hard"])),(l()(),u["\u0275eld"](38,0,null,0,2,"ion-select-option",[["value","medium"]],null,null,null,c.db,c.y)),u["\u0275did"](39,49152,null,0,g.mb,[u.ChangeDetectorRef,u.ElementRef],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,0,["Medium"])),(l()(),u["\u0275eld"](41,0,null,0,2,"ion-select-option",[["value","easy"]],null,null,null,c.db,c.y)),u["\u0275did"](42,49152,null,0,g.mb,[u.ChangeDetectorRef,u.ElementRef],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,0,["Easy"])),(l()(),u["\u0275eld"](44,0,null,0,11,"ion-item",[],null,null,null,c.Y,c.s)),u["\u0275did"](45,49152,null,0,g.G,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](46,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,c.Z,c.t)),u["\u0275did"](47,49152,null,0,g.M,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,0,["Number of Question"])),(l()(),u["\u0275eld"](49,0,null,0,6,"ion-input",[["name","amount"],["slot","end"],["type","number"],["value","5"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u["\u0275nov"](l,50)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==u["\u0275nov"](l,50)._handleIonChange(e.target.value)&&t),"ngModelChange"===n&&(t=!1!==(i.quiz_config.amount=e)&&t),t},c.X,c.r)),u["\u0275did"](50,16384,null,0,g.Hb,[u.ElementRef],null,null),u["\u0275prd"](1024,null,s.c,function(l){return[l]},[g.Hb]),u["\u0275did"](52,671744,null,0,s.h,[[2,s.a],[8,null],[8,null],[6,s.c]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,s.d,null,[s.h]),u["\u0275did"](54,16384,null,0,s.e,[[4,s.d]],null,null),u["\u0275did"](55,49152,null,0,g.F,[u.ChangeDetectorRef,u.ElementRef],{name:[0,"name"],type:[1,"type"],value:[2,"value"]},null),(l()(),u["\u0275eld"](56,0,null,null,2,"ion-button",[["expand","block"],["padding-horizontal",""]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.submitQuizConfiguration()&&u),u},c.H,c.b)),u["\u0275did"](57,49152,null,0,g.j,[u.ChangeDetectorRef,u.ElementRef],{expand:[0,"expand"]},null),(l()(),u["\u0275ted"](-1,0,["START"]))],function(l,n){var e=n.component;l(n,17,0,"category",e.quiz_config.category),l(n,20,0,"Category","category","action-sheet",e.customActionSheetOptions),l(n,22,0,e.categories),l(n,31,0,"difficulty",e.quiz_config.difficulty),l(n,34,0,"Difficulty","difficulty","action-sheet"),l(n,36,0,"hard"),l(n,39,0,"medium"),l(n,42,0,"easy"),l(n,52,0,"amount",e.quiz_config.amount),l(n,55,0,"amount","number","5"),l(n,57,0,"block")},function(l,n){l(n,0,0,u["\u0275nov"](n,4).ngClassUntouched,u["\u0275nov"](n,4).ngClassTouched,u["\u0275nov"](n,4).ngClassPristine,u["\u0275nov"](n,4).ngClassDirty,u["\u0275nov"](n,4).ngClassValid,u["\u0275nov"](n,4).ngClassInvalid,u["\u0275nov"](n,4).ngClassPending),l(n,14,0,u["\u0275nov"](n,19).ngClassUntouched,u["\u0275nov"](n,19).ngClassTouched,u["\u0275nov"](n,19).ngClassPristine,u["\u0275nov"](n,19).ngClassDirty,u["\u0275nov"](n,19).ngClassValid,u["\u0275nov"](n,19).ngClassInvalid,u["\u0275nov"](n,19).ngClassPending),l(n,28,0,u["\u0275nov"](n,33).ngClassUntouched,u["\u0275nov"](n,33).ngClassTouched,u["\u0275nov"](n,33).ngClassPristine,u["\u0275nov"](n,33).ngClassDirty,u["\u0275nov"](n,33).ngClassValid,u["\u0275nov"](n,33).ngClassInvalid,u["\u0275nov"](n,33).ngClassPending),l(n,49,0,u["\u0275nov"](n,54).ngClassUntouched,u["\u0275nov"](n,54).ngClassTouched,u["\u0275nov"](n,54).ngClassPristine,u["\u0275nov"](n,54).ngClassDirty,u["\u0275nov"](n,54).ngClassValid,u["\u0275nov"](n,54).ngClassInvalid,u["\u0275nov"](n,54).ngClassPending)})}function z(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,C)),u["\u0275did"](2,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,v)),u["\u0275did"](4,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,2,0,e.paused_quiz),l(n,4,0,!e.paused_quiz)},null)}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,6,"ion-header",[],null,null,null,c.T,c.n)),u["\u0275did"](1,49152,null,0,g.A,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](2,0,null,0,4,"ion-toolbar",[],null,null,null,c.lb,c.F)),u["\u0275did"](3,49152,null,0,g.Ab,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275eld"](4,0,null,0,2,"ion-title",[["text-center",""]],null,null,null,c.jb,c.D)),u["\u0275did"](5,49152,null,0,g.yb,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275ted"](-1,0,["Quiz"])),(l()(),u["\u0275eld"](7,0,null,null,5,"ion-content",[["padding",""]],null,null,null,c.P,c.j)),u["\u0275did"](8,49152,null,0,g.t,[u.ChangeDetectorRef,u.ElementRef],null,null),(l()(),u["\u0275and"](16777216,null,0,1,null,p)),u["\u0275did"](10,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,0,1,null,z)),u["\u0275did"](12,16384,null,0,f.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,10,0,e.quiz_journey_data),l(n,12,0,e.data_loaded)},null)}function y(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-quiz-landing",[],null,null,null,b,h)),u["\u0275did"](1,114688,null,0,d,[t.a,i.a,m.m,m.a,o.a],null,null)],function(l,n){l(n,1,0)},null)}var _=u["\u0275ccf"]("app-quiz-landing",d,y,{},{},[]);e.d(n,"QuizLandingPageModuleNgFactory",function(){return E});var E=u["\u0275cmf"](a,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,_]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[u.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,s.k,s.k,[]),u["\u0275mpd"](4608,g.b,g.b,[u.NgZone,u.ApplicationRef]),u["\u0275mpd"](4608,g.Fb,g.Fb,[g.b,u.ComponentFactoryResolver,u.Injector]),u["\u0275mpd"](4608,g.Jb,g.Jb,[g.b,u.ComponentFactoryResolver,u.Injector]),u["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),u["\u0275mpd"](1073742336,s.i,s.i,[]),u["\u0275mpd"](1073742336,s.b,s.b,[]),u["\u0275mpd"](1073742336,g.Cb,g.Cb,[]),u["\u0275mpd"](1073742336,m.n,m.n,[[2,m.t],[2,m.m]]),u["\u0275mpd"](1073742336,a,a,[]),u["\u0275mpd"](1024,m.k,function(){return[[{path:"",component:d}]]},[])])})}}]);