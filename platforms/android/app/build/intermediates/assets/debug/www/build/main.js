webpackJsonp([2],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timer_timer__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__working_timer_working_timer__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimerPage = /** @class */ (function () {
    function TimerPage(navCtrl, navParams, timerProvider, renderer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timerProvider = timerProvider;
        this.renderer = renderer;
        this.start = false;
        this.text = "Подготовка";
    }
    TimerPage.prototype.ionViewDidLoad = function () { };
    TimerPage.prototype.onSubmit = function (form) {
        console.log(this.startBtn);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__working_timer_working_timer__["a" /* WorkingTimerPage */]);
        if (!this.timerProvider.isPlaying) {
            this.timerProvider.timeToInt();
            this.timerProvider.startTimer();
        }
        if (!this.timerProvider.isPlaying) {
            this.renderer.removeClass(this.startBtn.nativeElement, 'play-btn');
            this.renderer.addClass(this.startBtn.nativeElement, 'pause-btn');
            this.start = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
    ], TimerPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("startBtn"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TimerPage.prototype, "startBtn", void 0);
    TimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timer',template:/*ion-inline-start:"C:\Users\pavli\Desktop\ANGULAR PROJECTS\Project SportTimer\sportsTimer\src\pages\timer\timer.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Timer <span class="axon">Axon</span></ion-title>\n  </ion-navbar>\n</ion-header>\n  <ion-content padding>\n    <ion-searchbar\n      [(ngModel)]="myInput"\n      placeholder="Поиск"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput($event)"\n      (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n\n    <div class="chip-timer">\n    <ion-chip class="c-amethyst">\n      <ion-label>Прес</ion-label>\n    </ion-chip>\n\n    <ion-chip class="c-blue">\n      <ion-label>Приседания</ion-label>\n    </ion-chip>\n\n    <ion-chip class="c-orange">\n      <ion-label>Отжимания</ion-label>\n    </ion-chip>\n\n    <ion-chip  class="c-cobalt">\n      <ion-label>Кардио</ion-label>\n    </ion-chip>\n    </div>\n\n    <div class="form-timer">\n      <form  (ngSubmit)="onSubmit(form)" #form="ngForm">\n      <ion-row>\n<ion-col col-6 >\n  <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Подготовка</ion-label>\n        <ion-datetime displayFormat="m:s" doneText="Выбрать" cancelText="Отмена" name="prepareTime" [(ngModel)]="this.timerProvider.prepareTime.base"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Работа</ion-label>\n        <ion-datetime displayFormat="m:s" name="approachTime" [(ngModel)]="this.timerProvider.approachTime.base"></ion-datetime>\n      </ion-item>\n\n        <ion-item>\n          <ion-label stacked>Отдых</ion-label>\n          <ion-datetime displayFormat="m:s" name="relaxTime" [(ngModel)]="this.timerProvider.relaxTime.base"></ion-datetime>\n        </ion-item>\n  </ion-list>\n</ion-col>\n\n      <ion-col col-6>\n        <div class="form-timer__imgTimer"></div>\n        <ion-item>s\n          <ion-label stacked>Циклы</ion-label>\n          <ion-datetime displayFormat="m" minuteValues="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20]" name="cycles" [(ngModel)]="this.timerProvider.cycles.base"></ion-datetime>\n        </ion-item>\n\n    </ion-col>\n\n      <div ion-row col-12 justify-content-center>\n        <button [ngClass]="{\'play-btn\': !this.timerProvider.isPlaying, \'pause-btn\': this.timerProvider.isPlaying}" class="btn button sp-btn form-timer__control-btn control-btn" type="submit" #startBtn>\n          <span class="in-btn glyphicon glyphicon-pause"></span>\n        </button>\n      </div>\n    </ion-row>\n      </form>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pavli\Desktop\ANGULAR PROJECTS\Project SportTimer\sportsTimer\src\pages\timer\timer.html"*/,
            inputs: ['start']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timer_timer__["a" /* TimerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], TimerPage);
    return TimerPage;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkingTimerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timer_timer__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkingTimerPage = /** @class */ (function () {
    function WorkingTimerPage(navCtrl, navParams, renderer, timerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.renderer = renderer;
        this.timerProvider = timerProvider;
    }
    WorkingTimerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad WorkingTimerPage');
        this.timerProvider.isPlaying = true;
        this.renderer.setStyle(this.cc.nativeElement, 'stroke-dashoffset', this.timerProvider.timer.perc);
        this.navBar.backButtonClick = function (e) {
            console.log(_this.startBtn);
            _this.startBtn = false;
            _this.timerProvider.isPlaying = false;
            _this.timerProvider.reset();
            _this.navCtrl.pop();
        };
        this.animateStroke();
    };
    WorkingTimerPage.prototype.animateStroke = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.timerProvider.cycles.int == 0) {
                setTimeout(function () {
                    _this.navCtrl.pop();
                }, 1000);
            }
            else {
                if (_this.timerProvider.isPlaying) {
                    _this.timerProvider.timer.perc = _this.timerProvider.timer.perc - (_this.timerProvider.timer.percm / 60);
                    _this.renderer.setStyle(_this.cc.nativeElement, 'stroke-dashoffset', _this.timerProvider.timer.perc);
                    setTimeout(_this.animateStroke(), 1000);
                }
                else {
                    setTimeout(_this.animateStroke(), 1000);
                }
            }
        }, 1000);
    };
    WorkingTimerPage.prototype.pause = function () {
        if (this.timerProvider.isPlaying) {
            this.renderer.removeClass(this.controlBtn.nativeElement, 'pause-btn');
            this.renderer.addClass(this.controlBtn.nativeElement, 'play-btn');
            this.timerProvider.isPlaying = false;
        }
        else {
            this.renderer.removeClass(this.controlBtn.nativeElement, 'play-btn');
            this.renderer.addClass(this.controlBtn.nativeElement, 'pause-btn');
            this.timerProvider.isPlaying = true;
            this.timerProvider.startTimer();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Navbar */])
    ], WorkingTimerPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("watchUi"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], WorkingTimerPage.prototype, "watchUI", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("controlBtn"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], WorkingTimerPage.prototype, "controlBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], WorkingTimerPage.prototype, "cc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("tTime"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], WorkingTimerPage.prototype, "tTime", void 0);
    WorkingTimerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-working-timer',template:/*ion-inline-start:"C:\Users\pavli\Desktop\ANGULAR PROJECTS\Project SportTimer\sportsTimer\src\pages\working-timer\working-timer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Timer <span class="axon">Axon</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<div class="changeStatusBg" [ngClass]="{\'changeStatusBg\': this.timerProvider.flashAnimate}">\n  {{this.timerProvider.status}}\n</div>\n\n<ion-content padding>\n  <div class="m-wrap tx">\n    <div class="o-watch-wrap">\n      <div class="watch-ui" #watchUi>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div ion-row col-12 justify-content-center class="timer-working__status">\n                {{this.timerProvider.status}}\n              </div>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n        <div class="o-ring">\n          <div class="o-timer-wrap">\n            <div class="ring-wrap">\n              <svg class="c-t" width="200" height="200">\n                <circle class="c-c" cx="90" cy="100" r="97.5" transform="rotate(-90, 95, 95)" #cc/>\n              </svg>\n            </div>\n            <div class="o-timer">\n              <span class="t-time" #tTime>{{this.timerProvider.timer.min + \':\' + this.timerProvider.timer.sec}}</span>\n              <span class="oop" >{{\'Цикл \' + this.timerProvider.timer.mmin}}</span>\n            </div>\n          </div>\n          <div class="t-options">\n                    <span class="t-options-time">\n					<span class="btn b-dec o-opt-btn b-revc glyphicon glyphicon-play"></span>\n                    <span class="o-opt-btn display"></span>\n                    <span class="btn b-inc o-opt-btn glyphicon glyphicon-play"></span>\n                    </span>\n          </div>\n        </div>\n        <div class="o-controllers">\n          <button class="btn button sp-btn repeat-btn">\n            <span class="glyphicon glyphicon-repeat"></span>\n          </button>\n          <button class="btn button sp-btn pause-btn control-btn" (click)="pause()" #controlBtn id="controlBtn">\n            <span class="in-btn glyphicon glyphicon-pause"></span>\n          </button>\n          <button class="btn button sp-btn menu-btn">\n            <span class="glyphicon glyphicon-menu-hamburger"></span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pavli\Desktop\ANGULAR PROJECTS\Project SportTimer\sportsTimer\src\pages\working-timer\working-timer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timer_timer__["a" /* TimerProvider */]])
    ], WorkingTimerPage);
    return WorkingTimerPage;
}());

//# sourceMappingURL=working-timer.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/timer/timer.module": [
		283,
		1
	],
	"../pages/working-timer/working-timer.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\pavli\Desktop\ANGULAR PROJECTS\Project SportTimer\sportsTimer\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Тренировки</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pavli\Desktop\ANGULAR PROJECTS\Project SportTimer\sportsTimer\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_text_to_speech__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_timer_timer__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_timer_timer__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_working_timer_working_timer__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__pages_timer_timer__["a" /* TimerPage */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_working_timer_working_timer__["a" /* WorkingTimerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/timer/timer.module#TimerPageModule', name: 'TimerPage', segment: 'timer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/working-timer/working-timer.module#WorkingTimerPageModule', name: 'WorkingTimerPage', segment: 'working-timer', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__pages_timer_timer__["a" /* TimerPage */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_working_timer_working_timer__["a" /* WorkingTimerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_timer_timer__["a" /* TimerProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_text_to_speech__["a" /* TextToSpeech */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_timer_timer__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_timer_timer__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, timerProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.timerProvider = timerProvider;
        this.showSplash = true;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_timer_timer__["a" /* TimerPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Создать таймер', component: __WEBPACK_IMPORTED_MODULE_6__pages_timer_timer__["a" /* TimerPage */] },
            { title: 'Тренировки', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide(); // <-- hide static image
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 3s
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\pavli\Desktop\ANGULAR PROJECTS\Project SportTimer\sportsTimer\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n  <div class="spinner"></div>\n</div>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Меню</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\pavli\Desktop\ANGULAR PROJECTS\Project SportTimer\sportsTimer\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_timer_timer__["a" /* TimerProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_timer_timer__["a" /* TimerProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\pavli\Desktop\ANGULAR PROJECTS\Project SportTimer\sportsTimer\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sports Timer</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pavli\Desktop\ANGULAR PROJECTS\Project SportTimer\sportsTimer\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_text_to_speech__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TimerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TimerProvider = /** @class */ (function () {
    function TimerProvider(tts) {
        this.tts = tts;
        this.timer = {
            timer: 'true',
            mmin: 1,
            min: 0,
            sec: 0,
            perc: 612,
            percm: 612
        };
        this.isPlaying = false;
        this.flashAnimate = false;
        this._status = 'Подготовка';
        this.prepareTime = { base: '2018-06-10T16:00:02.839Z', int: 10 };
        this.approachTime = { base: '2018-06-10T16:00:02.839Z', int: 30 };
        this.relaxTime = { base: '2018-06-10T16:00:02.839Z', int: 10 };
        this.cycles = { base: '2018-06-10T16:01:00.839Z', int: 1 };
    }
    Object.defineProperty(TimerProvider.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (theStatus) {
            this._status = theStatus;
        },
        enumerable: true,
        configurable: true
    });
    TimerProvider.prototype.speak = function (sentence) {
        this.tts.speak({
            text: sentence,
            rate: 1,
            locale: 'ru-RU'
        })
            .then(function () { return console.log('Success'); })
            .catch(function (reason) { return console.log(reason); });
    };
    TimerProvider.prototype.setStatus = function (satus) {
        this.status = status;
    };
    TimerProvider.prototype.startTimer = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.isPlaying == true) {
                if (_this.cycles.int > 0) {
                    _this.flashAnimate = false;
                    _this.timer.mmin = _this.cycles.int;
                    if (_this.prepareTime.int > 0) {
                        _this.setTime(--_this.prepareTime.int, _this.prepareTime);
                        _this.timer.min = ((_this.prepareTime.int / 60) >= 1) ? (_this.prepareTime.int / 60).toFixed(0) : '0';
                        _this.timer.sec = ((_this.prepareTime.int % 60) >= 1) ? (_this.prepareTime.int % 60).toFixed(0) : '0';
                        _this.status = 'Подготовка';
                        if (_this.prepareTime.int == 1) {
                            _this.status = 'Работа';
                            _this.speak(_this.status);
                            if (!_this.flashAnimate) {
                                _this.flashAnimate = true;
                            }
                        }
                        setTimeout(_this.startTimer(), 1000);
                    }
                    else if (_this.approachTime.int > 0) {
                        _this.setTime(--_this.approachTime.int, _this.approachTime);
                        _this.timer.min = ((_this.approachTime.int / 60) > 1) ? (_this.approachTime.int / 60).toFixed(0) : '0';
                        _this.timer.sec = ((_this.approachTime.int % 60) >= 1) ? (_this.approachTime.int % 60).toFixed(0) : '0';
                        _this.status = 'Работа';
                        if (_this.approachTime.int == 1) {
                            _this.status = 'Отдых';
                            _this.speak(_this.status);
                            if (!_this.flashAnimate) {
                                _this.flashAnimate = true;
                            }
                        }
                        setTimeout(_this.startTimer(), 1000);
                    }
                    else if (_this.relaxTime.int > 0) {
                        if (_this.relaxTime.int == 1) {
                            if (_this.cycles.int == 1) {
                                _this.setTime(--_this.relaxTime.int, _this.relaxTime);
                                _this.cycles.int--;
                                _this.timer.min = ((_this.relaxTime.int / 60) > 1) ? (_this.relaxTime.int / 60).toFixed(0) : '0';
                                _this.timer.sec = ((_this.relaxTime.int % 60) >= 1) ? (_this.relaxTime.int % 60).toFixed(0) : '0';
                                _this.timer.mmin = _this.cycles.int;
                                _this.status = 'Тренировка окончена';
                                _this.speak(_this.status);
                                if (!_this.flashAnimate) {
                                    _this.flashAnimate = true;
                                    _this.reset();
                                    _this.isPlaying = false;
                                    setTimeout(function () {
                                        _this.flashAnimate = false;
                                    }, 1000);
                                }
                            }
                            else {
                                _this.setTime(--_this.relaxTime.int, _this.relaxTime);
                                _this.cycles.int--;
                                _this.timer.min = ((_this.relaxTime.int / 60) > 1) ? (_this.relaxTime.int / 60).toFixed(0) : '0';
                                _this.timer.sec = ((_this.relaxTime.int % 60) >= 1) ? (_this.relaxTime.int % 60).toFixed(0) : '0';
                                _this.timer.mmin = _this.cycles.int;
                                _this.status = 'Отдых';
                                if (_this.relaxTime.int == 1) {
                                    _this.status = 'Подготовка';
                                    _this.speak(_this.status);
                                    if (!_this.flashAnimate) {
                                        _this.flashAnimate = true;
                                    }
                                }
                                setTimeout(_this.startTimer(), 1000);
                            }
                        }
                        else {
                            _this.setTime(--_this.relaxTime.int, _this.relaxTime);
                            _this.timer.min = ((_this.relaxTime.int / 60) > 1) ? (_this.relaxTime.int / 60).toFixed(0) : '0';
                            _this.timer.sec = ((_this.relaxTime.int % 60) >= 1) ? (_this.relaxTime.int % 60).toFixed(0) : '0';
                            _this.status = 'Отдых';
                            setTimeout(_this.startTimer(), 1000);
                        }
                    }
                }
            }
        }, 1000);
    };
    TimerProvider.prototype.setTime = function (timeCount, base) {
        console.log(timeCount);
        var min = ((timeCount / 60) > 1) ? timeCount / 60 : '00';
        var sec = ((timeCount % 60) >= 10) ? timeCount % 60 : '0' + timeCount % 60;
        base.base = '2018-06-10T16:' + min + ':' + sec + '.839Z';
    };
    TimerProvider.prototype.timeToInt = function () {
        this.prepareTime.int = parseInt(this.prepareTime.base.slice(16, 1));
        if (this.prepareTime.base.slice(14, 16) == '00') {
            this.prepareTime.int = parseInt(this.prepareTime.base.slice(17, 19));
        }
        else {
            this.prepareTime.int = parseInt(this.prepareTime.base.slice(14, 16) + this.prepareTime.base.slice(17, 19));
        }
        if (this.approachTime.base.slice(14, 16) == '00') {
            this.approachTime.int = parseInt(this.approachTime.base.slice(17, 19));
        }
        else {
            this.approachTime.int = parseInt(this.approachTime.base.slice(14, 16) + this.approachTime.base.slice(17, 19));
        }
        if (this.relaxTime.base.slice(14, 16) == '00') {
            this.relaxTime.int = parseInt(this.relaxTime.base.slice(17, 19));
        }
        else {
            this.relaxTime.int = parseInt(this.relaxTime.base.slice(14, 16) + this.relaxTime.base.slice(17, 19));
        }
        this.cycles.int = parseInt(this.cycles.base.slice(14, 16));
    };
    TimerProvider.prototype.reset = function () {
        this.timer = {
            timer: 'true',
            mmin: 1,
            min: 0,
            sec: 0,
            perc: 612,
            percm: 612
        };
        this.prepareTime = { base: '2018-06-10T16:00:10.839Z', int: 10 };
        this.approachTime = { base: '2018-06-10T16:00:30.839Z', int: 30 };
        this.relaxTime = { base: '2018-06-10T16:00:10.839Z', int: 10 };
        this.cycles = { base: '2018-06-10T16:01:00.839Z', int: 0 };
    };
    TimerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], TimerProvider);
    return TimerProvider;
}());

//# sourceMappingURL=timer.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map