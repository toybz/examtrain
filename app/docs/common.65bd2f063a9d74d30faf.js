(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{CBt4:function(t,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return s});var n=o("9TBO"),i=function(t,e,o,i,s){return n.a(void 0,void 0,void 0,function(){var r;return n.c(this,function(n){switch(n.label){case 0:if(t)return[2,t.attachViewToDom(e,o,s,i)];if("string"!=typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");return r="string"==typeof o?e.ownerDocument&&e.ownerDocument.createElement(o):o,i&&i.forEach(function(t){return r.classList.add(t)}),s&&Object.assign(r,s),e.appendChild(r),r.componentOnReady?[4,r.componentOnReady()]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2,r]}})})},s=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},CUEh:function(t,e,o){"use strict";o.d(e,"a",function(){return v}),o.d(e,"b",function(){return w}),o.d(e,"c",function(){return y}),o.d(e,"d",function(){return r});var n=o("9TBO"),i=o("aiep"),s=o("JpGC"),r=function(t){return new Promise(function(e,o){Object(i.n)(function(){a(t),c(t).then(function(o){o.animation&&o.animation.destroy(),u(t),e(o)},function(e){u(t),o(e)})})})},a=function(t){var e=t.enteringEl,o=t.leavingEl;E(e,o,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),y(e,!1),o&&y(o,!1)},c=function(t){return n.a(void 0,void 0,void 0,function(){var e;return n.c(this,function(o){switch(o.label){case 0:return[4,l(t)];case 1:return[2,(e=o.sent())?p(e,t):d(t)]}})})},u=function(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=function(t){return n.a(void 0,void 0,void 0,function(){var e;return n.c(this,function(n){switch(n.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o.e(105).then(o.bind(null,"z1VC"))]:[2,void 0];case 1:return e=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,o.e(106).then(o.bind(null,"jNcL"))];case 3:e=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,e]}})})},p=function(t,e){return n.a(void 0,void 0,void 0,function(){var i,s;return n.c(this,function(n){switch(n.label){case 0:return[4,h(e,!0)];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,5,,6]),[4,o.e(5).then(o.bind(null,"5GEt"))];case 3:return[4,n.sent().create(t,e.baseEl,e)];case 4:return i=n.sent(),[3,6];case 5:return n.sent(),i=t(e.baseEl,e),[3,6];case 6:return f(e.enteringEl,e.leavingEl),[4,b(i,e)];case 7:return s=n.sent(),i.hasCompleted=s,e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&g(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})},d=function(t){return n.a(void 0,void 0,void 0,function(){var e,o;return n.c(this,function(n){switch(n.label){case 0:return e=t.enteringEl,o=t.leavingEl,[4,h(t,!1)];case 1:return n.sent(),f(e,o),g(e,o),[2,{hasCompleted:!0}]}})})},h=function(t,e){return n.a(void 0,void 0,void 0,function(){var o;return n.c(this,function(n){switch(n.label){case 0:return o=(void 0!==t.deepWait?t.deepWait:e)?[v(t.enteringEl),v(t.leavingEl)]:[_(t.enteringEl),_(t.leavingEl)],[4,Promise.all(o)];case 1:return n.sent(),[4,m(t.viewIsReady,t.enteringEl)];case 2:return n.sent(),[2]}})})},m=function(t,e){return n.a(void 0,void 0,void 0,function(){return n.c(this,function(o){switch(o.label){case 0:return t?[4,t(e)]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2]}})})},b=function(t,e){var o=e.progressCallback,n=new Promise(function(e){return t.onFinish(e)});return o?(t.progressStart(!0),o(t)):t.play(),n},f=function(t,e){w(e,s.c),w(t,s.a)},g=function(t,e){w(t,s.b),w(e,s.d)},w=function(t,e){if(t){var o=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(o)}},_=function(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()},v=function(t){return n.a(void 0,void 0,void 0,function(){var e;return n.c(this,function(o){switch(o.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=o.sent())return[2];o.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(v))];case 3:o.sent(),o.label=4;case 4:return[2]}})})},y=function(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},E=function(t,e,o){void 0!==t&&(t.style.zIndex="back"===o?"99":"101"),void 0!==e&&(e.style.zIndex="100")}},HPR3:function(t,e,o){"use strict";o.d(e,"a",function(){return s});var n=o("ZZ/e"),i=o("CcnG"),s=function(){function t(t){this.toastController=t}return t.prototype.isEmptyObject=function(t){return t&&0===Object.keys(t).length},t.prototype.showToast=function(t,e){return o=this,void 0,i=function(){return function(t,e){var o,n,i,s,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(o)throw new TypeError("Generator is already executing.");for(;r;)try{if(o=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,n=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(6===s[0]&&r.label<i[1]){r.label=i[1],i=s;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(s);break}i[2]&&r.ops.pop(),r.trys.pop();continue}s=e.call(t,r)}catch(a){s=[6,a],n=0}finally{o=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}(this,function(o){switch(o.label){case 0:return[4,this.toastController.create({message:t,duration:e})];case 1:return o.sent().present(),[2]}})},new((n=void 0)||(n=Promise))(function(t,e){function s(t){try{a(i.next(t))}catch(o){e(o)}}function r(t){try{a(i.throw(t))}catch(o){e(o)}}function a(e){e.done?t(e.value):new n(function(t){t(e.value)}).then(s,r)}a((i=i.apply(o,[])).next())});var o,n,i},t.ngInjectableDef=i.defineInjectable({factory:function(){return new t(i.inject(n.Nb))},token:t,providedIn:"root"}),t}()},VURu:function(t,e,o){"use strict";var n={English:{subject_id:1,logo_path:"assets/images/english.jpg",topics:{1:{topic_id:1,topic:"Lexis and Structure",logo_path:"",description:"In this lesson you are going to see that lexis is so much more than individual words",sub_topics:{1:{sub_topic_id:1,sub_topic:"Synonyms",logo_path:"",description:"If two words have similar meanings, they are called synonyms, and this video clearly explains this very concept.",url:"https://youtube.com/embed/8wUPB7ot6Jo"},2:{sub_topic_id:2,sub_topic:"Antonyms",logo_path:"",description:"If two words have opposite meanings, they are called antonyms, and this video explains this very concept. ",url:"https://youtube.com/embed/4v9NjVEn25U"},3:{sub_topic_id:3,sub_topic:"Homonyms",logo_path:"",description:"A homonym is a word that is pronounced and spelled the same way as another word but has a different meaning",url:"https://youtube.com/embed/7CsAaoj33Zo"},4:{sub_topic_id:4,sub_topic:"Clause and sentence patterns",logo_path:"",description:"Did you know there are only four sentence types in English? To improve your writing and reading skills in English, this lesson will  teach you all about simple, compound, complex, and compound-complex sentences in this grammar video.",url:"https://www.youtube.com/embed/urr55rAreWc"},5:{sub_topic_id:5,sub_topic:"Word classes and their functions",logo_path:"",description:"A brief introduction to different types of word classes: open and closed classes. There is a brief overview of types of word classes, and the lexical and grammatical functions of word.",url:"https://www.youtube.com/embed/V556FjgBDOQ"}}},2:{topic_id:1,topic:"Oral Forms",logo_path:"",description:"This lesson covers the vowel phonemes (monophthongs and diphthongs) and other oral topics",sub_topics:{1:{sub_topic_id:1,sub_topic:"Vowels (monophthongs and diphthongs",logo_path:"",description:"This video covers the vowel phonemes (monophthongs and diphthongs). You will learn what the vowels look like, how they sound, and how to describe them",url:"https://www.youtube.com/embed/dpS8l6q7wsU"},2:{sub_topic_id:2,sub_topic:"Consonants and Clusters)",logo_path:"",description:"Consonant clusters are two or more consonants next to each other in a word.",url:"https://www.youtube.com/embed/P73dwwm14fo"},3:{sub_topic_id:3,sub_topic:"Rhymes (including homophones)",logo_path:"",description:"These are words that have the same spellings or maybe the same pronunciation but different meanings.",url:"https://www.youtube.com/embed/Hcst4FlbxJs"},4:{sub_topic_id:4,sub_topic:"Word stress (monosyllabic and polysyllabic)",logo_path:"",description:"In this lesson, you can learn about syllables and stress in English.",url:"https://www.youtube.com/embed/Vu6UVwkUgzc"},5:{sub_topic_id:5,sub_topic:"Intonation (words emphatic stress)",logo_path:"",description:"In this English speaking lesson you will learn to perfect your English pronunciation with correct \u201cword stress\u201d",url:"https://www.youtube.com/embed/TssaA2geuds"}}}}},Mathematics:{subject_id:2,logo_path:"assets/images/maths.jpg",topics:{1:{topic_id:1,topic:"Number Bases",logo_path:"",description:"This math video tutorial provides a basic introduction into number systems.  It explains how to interconvert between decimal, binary, octal, hexadecimal and BCD using successive division and multiplication of base powers",sub_topics:{1:{sub_topic_id:1,sub_topic:"operations in different number bases from 2 to 10",logo_path:"",description:"This math video tutorial provides a basic introduction into number systems.  It explains how to interconvert between decimal, binary, octal, hexadecimal and BCD using successive division and multiplication of base powers",url:"https://www.youtube.com/embed/L2zsmYaI5ww"},2:{sub_topic_id:2,sub_topic:" conversion from one base to another including fractional parts",logo_path:"",description:"This math video tutorial provides a basic introduction into number systems.  It explains how to interconvert between decimal, binary, octal, hexadecimal and BCD using successive division and multiplication of base powers",url:"https://www.youtube.com/embed/L2zsmYaI5ww"}}},2:{topic_id:2,topic:"Fractions, Decimals, Approximations and Percentages",logo_path:"",description:"Percentages, fractions and decimals are essential for maths students - This Lesson covers all on it.",sub_topics:{1:{sub_topic_id:1,sub_topic:"fractions and decimals",logo_path:"",description:"Percentages, fractions and decimals are essential",url:"https://www.youtube.com/embed/AMiJGQ5rKHM"},2:{sub_topic_id:2,sub_topic:"significant figures",logo_path:"",description:"Introduction to significant figures",url:"https://www.youtube.com/embed/eCJ76hz7jPM"},3:{sub_topic_id:3,sub_topic:"decimal places",logo_path:"",description:"Decimal Place Value",url:"https://www.youtube.com/embed/x-Dqe5U1TXA"},4:{sub_topic_id:4,sub_topic:"simple interest",logo_path:"",description:"Simple interest lesson",url:"https://www.youtube.com/embed/ZWCXrbnMN-E"},5:{sub_topic_id:5,sub_topic:"profit and loss percent",logo_path:"",description:"Derivation of formulas to find Loss percentage, Profit percentage, Cost Price and Selling price. Knowing derivation helps to understand topic properly",url:"https://www.youtube.com/embed/I9KFGlUDH6I"}}},3:{topic_id:3,topic:"Indices, Logarithms and Surds",logo_path:"",description:"This lesson covers Laws of indices, Standard form, Laws of logarithm",sub_topics:{1:{sub_topic_id:1,sub_topic:"Laws of indices",logo_path:"",description:"Laws of indices",url:"https://www.youtube.com/embed/BUJKEDqGp1U"},2:{sub_topic_id:2,sub_topic:"Standard form",logo_path:"",description:"Standard form",url:"https://www.youtube.com/embed/BUJKEDqGp1U"},3:{sub_topic_id:3,sub_topic:"Laws of logarithm",logo_path:"",description:"Laws of logarithm",url:"https://www.youtube.com/embed/bPLyCH1WaEY"},4:{sub_topic_id:4,sub_topic:"Change of bases in logarithm and application",logo_path:"",description:"Change of bases in logarithm and application",url:"https://www.youtube.com/embed/OkFdDqW9xxM"},5:{sub_topic_id:5,sub_topic:"Surds",logo_path:"",description:"Surds",url:"https://www.youtube.com/embed/OqPbF3nkeyQ"}}},4:{topic_id:4,topic:"Sets Theory",logo_path:"",description:"This math video tutorial provides a basic introduction into the intersection of sets and union of sets as it relates to venn diagrams.",sub_topics:{1:{sub_topic_id:1,sub_topic:"Types of sets",logo_path:"",description:"This math video tutorial provides a basic introduction into the intersection of sets and union of sets as it relates to venn diagrams.",url:"https://www.youtube.com/embed/xZELQc11ACY"},2:{sub_topic_id:2,sub_topic:"algebra of sets",logo_path:"",description:"This math video tutorial provides a basic introduction into the intersection of sets and union of sets as it relates to venn diagrams.",url:"https://www.youtube.com/embed/xZELQc11ACY"},3:{sub_topic_id:3,sub_topic:"venn diagrams and their applications",logo_path:"",description:"This math video tutorial provides a basic introduction into the intersection of sets and union of sets as it relates to venn diagrams.",url:"https://www.youtube.com/embed/xZELQc11ACY"}}},5:{topic_id:4,topic:"Simple Interest ",logo_path:"",description:"",sub_topics:{1:{sub_topic_id:1,sub_topic:"Simple Interest ",logo_path:"",description:"",url:"https://www.youtube.com/embed/NCYNXkbTTUo"}}}}},Biology:{subject_id:3,logo_path:"assets/images/biology.jpg",topics:{1:{topic_id:1,topic:"Cell structure and function",logo_path:"",description:"In this lesson you are going to learn  all about Cells",sub_topics:{1:{sub_topic_id:1,sub_topic:"Cells Structure and function  ",logo_path:"",description:"In this lesson you are going to learn  all about Cells",url:"https://www.youtube.com/embed/8IlzKri08kk"}}},2:{topic_id:1,topic:"Level of organisation",logo_path:"",description:"This lesson covers the levels of organization of living organisms",sub_topics:{1:{sub_topic_id:1,sub_topic:"Level of organisation",logo_path:"",description:"This lesson covers the levels of organization of living organisms",url:"https://www.youtube.com/embed/mQ26klraKvU"},2:{sub_topic_id:2,sub_topic:"-- organisms",logo_path:"",description:"",url:"https://www.youtube.com/embed/lnvlMlopu2A"},3:{sub_topic_id:3,sub_topic:"Invertebrates",logo_path:"",description:"",url:"https://www.youtube.com/embed/_602scxEUJY"},4:{sub_topic_id:4,sub_topic:"Multicellular animals (Vertebrates)",logo_path:"",description:"",url:"https://www.youtube.com/embed/v4Hwtf2NYH4"},5:{sub_topic_id:5,sub_topic:"What you need to know about the origin of multicellular life",logo_path:"",description:"",url:"https://www.youtube.com/embed/hAWrxKHY_7I"}}},3:{topic_id:3,topic:"Photosynthesis",logo_path:"",description:"In this lesson you are going to learn  all about Photosynthesis in Plants",sub_topics:{1:{sub_topic_id:1,sub_topic:"Photosynthesis ",logo_path:"",description:"In this lesson you are going to learn  all about Photosynthesis in Plants",url:"https://www.youtube.com/embed/1Dn_zdAZN0I"}}}}},Geography:{subject_id:4,logo_path:"assets/images/geography.jpg",topics:{1:{topic_id:1,topic:"Maps",logo_path:"",description:"In this lesson you are going to learn about Maps and how to read them",sub_topics:{1:{sub_topic_id:1,sub_topic:"Introduction to Maps",logo_path:"",description:"In this lesson you are going to learn about Maps and how to read them.",url:"https://youtube.com/embed/0z9_t8DMk5k"},2:{sub_topic_id:2,sub_topic:"Measurement and scale",logo_path:"",description:"",url:"https://youtube.com/embed/ZEWH58yMsAQ"},3:{sub_topic_id:3,sub_topic:"Map reading: how to read maps, scale and distance",logo_path:"",description:"",url:"https://www.youtube.com/embed/kZtsWt4QGUs"}}}}},Physics:{subject_id:5,logo_path:"assets/images/physics.jpg",topics:{1:{topic_id:1,topic:"Measurements and Units",logo_path:"",description:"This video focuses on converting units of measurement with conversion factors. It explains how to convert units of length, time, capacity, volume, area, mass, speed / velocity, and density",sub_topics:{1:{sub_topic_id:1,sub_topic:"Introduction",logo_path:"",description:"In this lesson you are going to learn about Maps and how to read them.",url:"https://youtube.com/embed/jqmIbcId3B0"},2:{sub_topic_id:2,sub_topic:"Standard Form",logo_path:"",description:"",url:"https://youtube.com/embed/Sn2xb"},3:{sub_topic_id:3,sub_topic:"Scalars and vectors",logo_path:"",description:"",url:"https://www.youtube.com/embed/rcDXQ-5H8mk"}}},2:{topic_id:2,topic:"Motion",logo_path:"",description:"",sub_topics:{1:{sub_topic_id:1,sub_topic:"Motion",logo_path:"",description:"",url:"https://www.youtube.com/embed/8qh--3X6E5w"},2:{sub_topic_id:2,sub_topic:"Projectiles",logo_path:"",description:"",url:"https://www.youtube.com/embed/7J_Pi4Xuk7Y"}}}}}},i=o("F/XL"),s=o("CcnG");o.d(e,"a",function(){return r});var r=function(){function t(){}return t.prototype.getSubjects=function(){return Object(i.a)(Object.keys(n))},t.prototype.getSubjectTopics=function(t){return Object(i.a)(Object.entries(n[t].topics))},t.prototype.getTopicsDetails=function(t,e){var o=n[t].topics[e],s={topic_name:o.topic,description:o.description,sub_topics:o.sub_topics};return Object(i.a)(s)},t.prototype.getSubjectImage=function(t){return n[t].logo_path},t.ngInjectableDef=s.defineInjectable({factory:function(){return new t},token:t,providedIn:"root"}),t}()},hpAr:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),o=document.createElement("div");e.appendChild(o),o.innerHTML=t,a.forEach(function(t){for(var o=e.querySelectorAll(t),n=o.length-1;n>=0;n--){var r=o[n];r.parentNode?r.parentNode.removeChild(r):e.removeChild(r);for(var a=s(r),c=0;c<a.length;c++)i(a[c])}});for(var n=s(e),r=0;r<n.length;r++)i(n[r]);var c=document.createElement("div");c.appendChild(e);var u=c.querySelector("div");return null!==u?u.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var o=t.attributes[e],n=o.name;if(r.includes(n.toLowerCase())){var a=o.value;null!=a&&a.toLowerCase().includes("javascript:")&&t.removeAttribute(n)}else t.removeAttribute(n)}var c=s(t);for(e=0;e<c.length;e++)i(c[e])}},s=function(t){return null!=t.children?t.children:t.childNodes},r=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},"j5a+":function(t,e,o){"use strict";o.d(e,"a",function(){return s}),o.d(e,"b",function(){return r}),o.d(e,"c",function(){return i}),o.d(e,"d",function(){return c});var n=o("9TBO"),i=function(t,e){return null!==e.closest(t)},s=function(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},r=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},a=/^[a-z][a-z0-9+\-.]*:/,c=function(t,e,o){return n.a(void 0,void 0,void 0,function(){var i;return n.c(this,function(n){return null!=t&&"#"!==t[0]&&!a.test(t)&&(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,i.push(t,o)]):[2,!1]})})}},k0If:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i});var n=function(){return function(t,e){this.x=t,this.y=e}}(),i=function(t,e,o,n,i){var a=r(t.y,e.y,o.y,n.y,i);return s(t.x,e.x,o.x,n.x,a[0])},s=function(t,e,o,n,i){return i*(3*e*Math.pow(i-1,2)+i*(-3*o*i+3*o+n*i))-t*Math.pow(i-1,3)},r=function(t,e,o,n,i){return a((n-=i)-3*(o-=i)+3*(e-=i)-(t-=i),3*o-6*e+3*t,3*e-3*t,t).filter(function(t){return t>=0&&t<=1})},a=function(t,e,o,n){if(0===t)return function(t,e,o){var i=e*e-4*t*n;return i<0?[]:[(-e+Math.sqrt(i))/(2*t),(-e-Math.sqrt(i))/(2*t)]}(e,o);var i=(3*(o/=t)-(e/=t)*e)/3,s=(2*e*e*e-9*e*o+27*(n/=t))/27;if(0===i)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-i),-Math.sqrt(-i)];var r=Math.pow(s/2,2)+Math.pow(i/3,3);if(0===r)return[Math.pow(s/2,.5)-e/3];if(r>0)return[Math.pow(-s/2+Math.sqrt(r),1/3)-Math.pow(s/2+Math.sqrt(r),1/3)-e/3];var a=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-s/(2*Math.sqrt(Math.pow(-i/3,3)))),u=2*Math.pow(a,1/3);return[u*Math.cos(c/3)-e/3,u*Math.cos((c+2*Math.PI)/3)-e/3,u*Math.cos((c+4*Math.PI)/3)-e/3]}},l1ru:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return c}),o.d(e,"c",function(){return a}),o.d(e,"d",function(){return d}),o.d(e,"e",function(){return h}),o.d(e,"f",function(){return s}),o.d(e,"g",function(){return i}),o.d(e,"h",function(){return p}),o.d(e,"i",function(){return u}),o.d(e,"j",function(){return l}),o.d(e,"k",function(){return r});var n=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},i=function(t){return!!t.shadowRoot&&!!t.attachShadow},s=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},r=function(t,e,o,n,s){if(t||i(e)){var r=e.querySelector("input.aux-input");r||((r=e.ownerDocument.createElement("input")).type="hidden",r.classList.add("aux-input"),e.appendChild(r)),r.disabled=s,r.name=o,r.value=n||""}},a=function(t,e,o){return Math.max(t,Math.min(e,o))},c=function(t,e){if(!t){var o="ASSERT: "+e;throw console.error(o),new Error(o)}},u=function(t){return t.timeStamp||Date.now()},l=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var o=e[0];return{x:o.clientX,y:o.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},p=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},d=function(t,e){var o=t._original||t;return{_original:t,emit:h(o.emit.bind(o),e)}},h=function(t,e){var o;return void 0===e&&(e=0),function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];clearTimeout(o),o=setTimeout.apply(void 0,[t,e].concat(n))}}},m2Nl:function(t,e,o){"use strict";o.d(e,"a",function(){return a});var n=o("d1Mt"),i=o("dNeE"),s=o("CcnG"),r=o("t/Na"),a=function(){function t(t){this.http=t,this.quiz_question=[],this.exam_types=[{name:"utme",title:"Jamb(UTME)"},{name:"wassce",title:"Waec"},{name:"post-utme",title:"Post Jamb"}],this.subjects=[{name:"english",title:"English"},{name:"mathematics",title:"Mathematics"},{name:"commerce",title:"Commerce"},{name:"accounting",title:"Accounting"},{name:"biology",title:"Biology"},{name:"physics",title:"Physics"},{name:"chemistry",title:"Chemistry"},{name:"englishlit",title:"English Literature"},{name:"government",title:"Government"},{name:"crk",title:"CRK"},{name:"geography",title:"Geography"},{name:"economics",title:"Economics"},{name:"irk",title:"IRK"},{name:"civiledu",title:"Civil Education"},{name:"insurance",title:"Insurance"},{name:"currentaffairs",title:"Current Affairs"},{name:"history",title:"History"}],this.instant_start_with_paused_quiz=!0}return t.prototype.fetchQuizQuestions=function(t,e,o,i){return this.http.get(n.c(t,e,o,i))},t.prototype.getQuizQuestions=function(){if(console.log(this.quiz_question),this.quiz_question)return this.quiz_question},t.prototype.getCategories=function(){return this.http.get(n.b)},t.prototype.getExamTypes=function(){return this.exam_types},t.prototype.getSubjects=function(){return this.subjects},t.prototype.getQuizConfig=function(){var t=this.getExamTypes(),e=this.getSubjects();return Object(i.of)({exam_types:t,subjects:e})},t.prototype.getExamTypeDisplayName=function(t){var e;return this.exam_types.forEach(function(o){o.name==t&&(e=o.title)}),e},t.prototype.getSubjectDisplayName=function(t){var e;return this.subjects.forEach(function(o){o.name==t&&(e=o.title)}),e},t.prototype.setInstantStartWithPausedQuiz=function(t){this.instant_start_with_paused_quiz=t},t.prototype.getInstantStartWithPausedQuiz=function(){return this.instant_start_with_paused_quiz},t.ngInjectableDef=s.defineInjectable({factory:function(){return new t(s.inject(r.c))},token:t,providedIn:"root"}),t}()},s2pH:function(t,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return s}),o.d(e,"c",function(){return r}),o.d(e,"d",function(){return n});var n=function(){var t=window.TapticEngine;t&&t.selection()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},s=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},r=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}}}]);