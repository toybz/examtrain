(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{RNkh:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){function l(){this.customPopoverOptionsCategory={header:"Select Category",subHeader:"",message:""},this.customPopoverOptionsExamType={header:"Select Exam Type",subHeader:"",message:""},this.selected_category="explore",this.selected_exam="jamb"}return l.prototype.ngOnInit=function(){},l}(),o=function(){return function(){}}(),i=e("pMnS"),c=e("oBZk"),d=e("ZZ/e"),a=e("gIcY"),r=e("ZYCi"),s=e("Ip0R"),p=e("VURu"),g=e("PSD3"),f=e.n(g),m=function(){function l(l){this.study_service=l,this.slideOpts={initialSlide:0,speed:400,slidesPerView:2},this.subjects=[]}return l.prototype.ngOnInit=function(){var l=this;this.study_service.getSubjects().subscribe(function(n){l.subjects=n,l.showTopicsFor(l.subjects[0])}),f.a.fire({position:"center",type:"info",title:"We are constantly updating the tutorials, please always check back for updates",showConfirmButton:!1,timer:5e3,backdrop:!1,toast:!0,width:"100%",customClass:{container:"swal-toast-container-class",icon:"swal-toast-icon-class"}})},l.prototype.showTopicsFor=function(l){var n=this;console.log(l),this.selected_subject=l,this.study_service.getSubjectTopics(l).subscribe(function(l){n.subject_topics=l,n.subject_topics.map(function(l){l[1].progress=parseFloat(Math.random().toFixed(1))}),console.log(n.subject_topics)})},l.prototype.getSubjectImage=function(){return this.study_service.getSubjectImage(this.selected_subject)},l}(),v=u["\u0275crt"]({encapsulation:0,styles:[[".selected-subject[_ngcontent-%COMP%], .topic[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important}"]],data:{}});function h(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,4,"ion-slide",[],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.showTopicsFor(l.context.$implicit)&&u),u},c.hb,c.z)),u["\u0275did"](1,49152,null,0,d.ob,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](2,0,null,0,2,"ion-button",[["class","subject-slide"],["color","primary"],["style"," letter-spacing : 0.0em !important;padding-start: 2.1em !important;max-width: 30vw !important;width: 30vw !important;"]],null,null,null,c.J,c.b)),u["\u0275did"](3,49152,null,0,d.j,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"]},null),(l()(),u["\u0275ted"](4,0,["",""]))],function(l,n){l(n,3,0,"primary")},function(l,n){l(n,4,0,n.context.$implicit)})}function b(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,17,"ion-card",[],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,2).onClick()&&t),"click"===n&&(t=!1!==u["\u0275nov"](l,3).onClick(e)&&t),t},c.P,c.d)),u["\u0275did"](1,49152,null,0,d.l,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),u["\u0275did"](2,16384,null,0,r.n,[r.m,r.a,[8,null],u.Renderer2,u.ElementRef],{routerLink:[0,"routerLink"]},null),u["\u0275did"](3,737280,null,0,d.Kb,[s.LocationStrategy,d.Gb,u.ElementRef,r.m,[2,r.n]],null,null),(l()(),u["\u0275eld"](4,0,null,0,13,"ion-card-content",[],null,null,null,c.L,c.e)),u["\u0275did"](5,49152,null,0,d.m,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](6,0,null,0,11,"ion-grid",[],null,null,null,c.U,c.m)),u["\u0275did"](7,49152,null,0,d.z,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](8,0,null,0,9,"ion-row",[],null,null,null,c.eb,c.w)),u["\u0275did"](9,49152,null,0,d.hb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](10,0,null,0,7,"ion-col",[],null,null,null,c.Q,c.i)),u["\u0275did"](11,49152,null,0,d.s,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](12,0,null,0,1,"h2",[["class","topic"]],null,null,null,null,null)),(l()(),u["\u0275ted"](13,null,["",""])),(l()(),u["\u0275eld"](14,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](16,null,["",""])),(l()(),u["\u0275eld"](17,0,null,0,0,"br",[],null,null,null,null,null))],function(l,n){l(n,2,0,u["\u0275inlineInterpolate"](2,"/view-tutorial-page/",n.component.selected_subject,"/",n.context.$implicit[0],"")),l(n,3,0)},function(l,n){l(n,13,0,n.context.$implicit[1].topic),l(n,16,0,n.context.$implicit[1].description)})}function C(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,3,"ion-slides",[],null,null,null,c.ib,c.A)),u["\u0275did"](1,49152,null,0,d.pb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{options:[0,"options"]},null),(l()(),u["\u0275and"](16777216,null,0,1,null,h)),u["\u0275did"](3,278528,null,0,s.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275eld"](4,0,null,null,0,"div",[["style","margin-top: 30px"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,3,"ion-text",[["class","selected-subject"]],null,null,null,c.mb,c.E)),u["\u0275did"](6,49152,null,0,d.vb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](7,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u["\u0275ted"](8,null,["",""])),(l()(),u["\u0275and"](16777216,null,null,1,null,b)),u["\u0275did"](10,278528,null,0,s.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,1,0,e.slideOpts),l(n,3,0,e.subjects),l(n,10,0,e.subject_topics)},function(l,n){l(n,8,0,n.component.selected_subject)})}function R(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-explore",[],null,null,null,C,v)),u["\u0275did"](1,114688,null,0,m,[p.a],null,null)],function(l,n){l(n,1,0)},null)}var y=u["\u0275ccf"]("app-explore",m,R,{},{},[]),_=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),E=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function N(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" completed works!\n"]))],null,null)}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-completed",[],null,null,null,N,E)),u["\u0275did"](1,114688,null,0,_,[],null,null)],function(l,n){l(n,1,0)},null)}var x=u["\u0275ccf"]("app-completed",_,w,{},{},[]),D=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),j=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function I(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" in-progress works!\n"]))],null,null)}function Z(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-in-progress",[],null,null,null,I,j)),u["\u0275did"](1,114688,null,0,D,[],null,null)],function(l,n){l(n,1,0)},null)}var O=u["\u0275ccf"]("app-in-progress",D,Z,{},{},[]),k=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function F(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,17,"ion-col",[],null,null,null,c.Q,c.i)),u["\u0275did"](1,49152,null,0,d.s,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](2,0,null,0,15,"ion-select",[["interface","popover"],["name","selected_exam"],["placeholder","Select Exam"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u["\u0275nov"](l,3)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u["\u0275nov"](l,3)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.selected_exam=e)&&t),t},c.gb,c.x)),u["\u0275did"](3,16384,null,0,d.Lb,[u.ElementRef],null,null),u["\u0275prd"](1024,null,a.c,function(l){return[l]},[d.Lb]),u["\u0275did"](5,671744,null,0,a.h,[[8,null],[8,null],[8,null],[6,a.c]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,a.d,null,[a.h]),u["\u0275did"](7,16384,null,0,a.e,[[4,a.d]],null,null),u["\u0275did"](8,49152,null,0,d.lb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{interface:[0,"interface"],interfaceOptions:[1,"interfaceOptions"],name:[2,"name"],placeholder:[3,"placeholder"]},null),(l()(),u["\u0275eld"](9,0,null,0,2,"ion-select-option",[["selected",""],["value","jamb"]],null,null,null,c.fb,c.y)),u["\u0275did"](10,49152,null,0,d.mb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{selected:[0,"selected"],value:[1,"value"]},null),(l()(),u["\u0275ted"](-1,0,["JAMB"])),(l()(),u["\u0275eld"](12,0,null,0,2,"ion-select-option",[["value","waec"]],null,null,null,c.fb,c.y)),u["\u0275did"](13,49152,null,0,d.mb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,0,["WAEC"])),(l()(),u["\u0275eld"](15,0,null,0,2,"ion-select-option",[["value","post_jamb"]],null,null,null,c.fb,c.y)),u["\u0275did"](16,49152,null,0,d.mb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,0,["Post JAMB"]))],function(l,n){var e=n.component;l(n,5,0,"selected_exam",e.selected_exam),l(n,8,0,"popover",e.customPopoverOptionsExamType,"selected_exam","Select Exam"),l(n,10,0,"","jamb"),l(n,13,0,"waec"),l(n,16,0,"post_jamb")},function(l,n){l(n,2,0,u["\u0275nov"](n,7).ngClassUntouched,u["\u0275nov"](n,7).ngClassTouched,u["\u0275nov"](n,7).ngClassPristine,u["\u0275nov"](n,7).ngClassDirty,u["\u0275nov"](n,7).ngClassValid,u["\u0275nov"](n,7).ngClassInvalid,u["\u0275nov"](n,7).ngClassPending)})}function M(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-explore",[],null,null,null,C,v)),u["\u0275did"](1,114688,null,0,m,[p.a],null,null)],function(l,n){l(n,1,0)},null)}function P(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-completed",[],null,null,null,N,E)),u["\u0275did"](1,114688,null,0,_,[],null,null)],function(l,n){l(n,1,0)},null)}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-in-progress",[],null,null,null,I,j)),u["\u0275did"](1,114688,null,0,D,[],null,null)],function(l,n){l(n,1,0)},null)}function L(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,23,"ion-header",[],null,null,null,c.V,c.n)),u["\u0275did"](1,49152,null,0,d.A,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](2,0,null,0,21,"ion-toolbar",[],null,null,null,c.pb,c.H)),u["\u0275did"](3,49152,null,0,d.Ab,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](4,0,null,0,19,"ion-title",[],null,null,null,c.nb,c.F)),u["\u0275did"](5,49152,null,0,d.yb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](6,0,null,0,17,"ion-grid",[],null,null,null,c.U,c.m)),u["\u0275did"](7,49152,null,0,d.z,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](8,0,null,0,15,"ion-row",[],null,null,null,c.eb,c.w)),u["\u0275did"](9,49152,null,0,d.hb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](10,0,null,0,11,"ion-col",[],null,null,null,c.Q,c.i)),u["\u0275did"](11,49152,null,0,d.s,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275eld"](12,0,null,0,9,"ion-select",[["interface","popover"],["name","selected_category"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u["\u0275nov"](l,13)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u["\u0275nov"](l,13)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.selected_category=e)&&t),t},c.gb,c.x)),u["\u0275did"](13,16384,null,0,d.Lb,[u.ElementRef],null,null),u["\u0275prd"](1024,null,a.c,function(l){return[l]},[d.Lb]),u["\u0275did"](15,671744,null,0,a.h,[[8,null],[8,null],[8,null],[6,a.c]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,a.d,null,[a.h]),u["\u0275did"](17,16384,null,0,a.e,[[4,a.d]],null,null),u["\u0275did"](18,49152,null,0,d.lb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{interface:[0,"interface"],interfaceOptions:[1,"interfaceOptions"],name:[2,"name"]},null),(l()(),u["\u0275eld"](19,0,null,0,2,"ion-select-option",[["selected",""],["value","explore"]],null,null,null,c.fb,c.y)),u["\u0275did"](20,49152,null,0,d.mb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{selected:[0,"selected"],value:[1,"value"]},null),(l()(),u["\u0275ted"](-1,0,["Explore"])),(l()(),u["\u0275and"](16777216,null,0,1,null,F)),u["\u0275did"](23,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](24,0,null,null,7,"ion-content",[["padding",""]],null,null,null,c.R,c.j)),u["\u0275did"](25,49152,null,0,d.t,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(l()(),u["\u0275and"](16777216,null,0,1,null,M)),u["\u0275did"](27,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,0,1,null,P)),u["\u0275did"](29,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,0,1,null,T)),u["\u0275did"](31,16384,null,0,s.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,15,0,"selected_category",e.selected_category),l(n,18,0,"popover",e.customPopoverOptionsCategory,"selected_category"),l(n,20,0,"","explore"),l(n,23,0,"explore"==e.selected_category),l(n,27,0,"explore"==e.selected_category),l(n,29,0,"completed"==e.selected_category),l(n,31,0,"in-progress"==e.selected_category)},function(l,n){l(n,12,0,u["\u0275nov"](n,17).ngClassUntouched,u["\u0275nov"](n,17).ngClassTouched,u["\u0275nov"](n,17).ngClassPristine,u["\u0275nov"](n,17).ngClassDirty,u["\u0275nov"](n,17).ngClassValid,u["\u0275nov"](n,17).ngClassInvalid,u["\u0275nov"](n,17).ngClassPending)})}function S(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-study-page",[],null,null,null,L,k)),u["\u0275did"](1,114688,null,0,t,[],null,null)],function(l,n){l(n,1,0)},null)}var V=u["\u0275ccf"]("app-study-page",t,S,{},{},[]);e.d(n,"StudyPagePageModuleNgFactory",function(){return B});var B=u["\u0275cmf"](o,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,V,y,x,O]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[u.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,a.k,a.k,[]),u["\u0275mpd"](4608,d.b,d.b,[u.NgZone,u.ApplicationRef]),u["\u0275mpd"](4608,d.Fb,d.Fb,[d.b,u.ComponentFactoryResolver,u.Injector]),u["\u0275mpd"](4608,d.Jb,d.Jb,[d.b,u.ComponentFactoryResolver,u.Injector]),u["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),u["\u0275mpd"](1073742336,a.i,a.i,[]),u["\u0275mpd"](1073742336,a.b,a.b,[]),u["\u0275mpd"](1073742336,d.Cb,d.Cb,[]),u["\u0275mpd"](1073742336,r.o,r.o,[[2,r.u],[2,r.m]]),u["\u0275mpd"](1073742336,o,o,[]),u["\u0275mpd"](1024,r.k,function(){return[[{path:"",component:t},{path:"select-study",component:t}]]},[])])})}}]);