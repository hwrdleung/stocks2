webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-chart></app-chart>\r\n<app-home></app-home>\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stock_service__ = __webpack_require__("../../../../../src/app/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chart_chart_component__ = __webpack_require__("../../../../../src/app/chart/chart.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__chart_chart_component__["a" /* ChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular_highcharts__["a" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* JsonpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__stock_service__["a" /* StockService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chart/chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#title-bar {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: aboslute;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    background: #FFF;\r\n    border: 1px #dddddd solid;\r\n    -webkit-box-shadow: 0 0 10px 3px #dddddd;\r\n            box-shadow: 0 0 10px 3px #dddddd;\r\n    color: #5D5D5D;\r\n    text-align: center;\r\n}\r\n\r\n#container {\r\n    width: 85%;\r\n    margin: 20px auto;\r\n    border: 1px #dddddd solid;\r\n    -webkit-box-shadow: 0 0 10px 3px #dddddd;\r\n            box-shadow: 0 0 10px 3px #dddddd;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"title-bar\">\r\n<h1>{{name}}</h1>\r\n</div>\r\n\r\n\r\n<!-- <button (click)='refreshChart()'>Refresh</button> -->\r\n\r\n<div id=\"container\" #container></div>"

/***/ }),

/***/ "../../../../../src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highstock__ = __webpack_require__("../../../../highcharts/highstock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highcharts_highstock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highcharts_highstock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stock_service__ = __webpack_require__("../../../../../src/app/stock.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartComponent = /** @class */ (function () {
    function ChartComponent(jsonp, http, stockService) {
        var _this = this;
        this.jsonp = jsonp;
        this.http = http;
        this.stockService = stockService;
        this.name = 'Stock Chart';
        //This subscribes to observable in stockService.
        //stockService will send a message after stock data is retrieved
        this.subscription = this.stockService.getMessage().subscribe(function (message) {
            _this.message = message;
            _this.refreshChart();
        });
    }
    ChartComponent.prototype.ngOnInit = function () {
        var context = this;
        this.refreshChart();
    };
    ChartComponent.prototype.ngOnDestroy = function () {
        //Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    //This function draws the chart.
    ChartComponent.prototype.refreshChart = function () {
        __WEBPACK_IMPORTED_MODULE_1_highcharts_highstock__["stockChart"](this.container.nativeElement, {
            rangeSelector: {
                buttons: [{
                        type: 'month',
                        count: 1,
                        text: '1m',
                        events: {
                            click: function (e) {
                                console.log('button clickd');
                            }
                        }
                    }, {
                        type: 'month',
                        count: 3,
                        text: '3m'
                    }, {
                        type: 'month',
                        count: 6,
                        text: '6m'
                    }, {
                        type: 'ytd',
                        text: 'YTD'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1y'
                    }, {
                        type: 'all',
                        text: 'All1'
                    }]
            },
            chart: {
                zoomType: 'x'
            },
            series: this.stockService.allStockData,
            xAxis: {
                events: {
                    afterSetExtremes: function (e) {
                    }
                }
            },
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])("container", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], ChartComponent.prototype, "container", void 0);
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-chart',
            template: __webpack_require__("../../../../../src/app/chart/chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Jsonp */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__stock_service__["a" /* StockService */]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#stock-box {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 0 auto;\r\n    width: 90%;\r\n}\r\n\r\n#stock-box li{\r\n    background-color: rgb(233, 233, 233);\r\n    list-style-type: none;\r\n    padding: 7px 7px 7px 15px;\r\n    margin: 12px;\r\n    min-width: 100px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    border: 1px #dddddd solid;\r\n    -webkit-box-shadow: 0 0 10px 3px #dddddd;\r\n            box-shadow: 0 0 10px 3px #dddddd;\r\n   }\r\n\r\nh1, h2, h3, h4, h5 {\r\n    color: #2D2D2D;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#error-msgs {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    position: absolute;\r\n    height: 40px;\r\n    width: 200px;\r\n    left: 50%;\r\n    margin-left: -100px;\r\n    bottom: 100px;\r\n    background: red;\r\n    color: #FFF;\r\n    -webkit-box-shadow: 0 0 10px 3px #b6b6b6;\r\n            box-shadow: 0 0 10px 3px #b6b6b6;\r\n}\r\n\r\n.container {\r\n    background: #FFF;\r\n    width: 85%;\r\n    margin: 20px auto;\r\n    padding: 20px 0;\r\n    text-align: center;\r\n\r\n    border: 1px #dddddd solid;\r\n    -webkit-box-shadow: 0 0 10px 3px #dddddd;\r\n            box-shadow: 0 0 10px 3px #dddddd;\r\n}\r\n\r\n.container h4 {\r\n    margin: 5px auto;\r\n}\r\n\r\n.container form {\r\n    max-width: 50%;\r\n    margin: 10px auto; \r\n    display: -webkit-box; \r\n    display: -ms-flexbox; \r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\nform input[type=\"text\"] {\r\n    width: 200px;\r\n    height: 30px;\r\n    font-size: 1.5rem;\r\n    padding: 0 5px;\r\n    outline: none;\r\n    overflow: hidden;\r\n    text-transform: uppercase;\r\n}\r\n\r\nform button {\r\n    font-size: 1.5rem;\r\n    height: 30px;\r\n    width: 30px;\r\n    padding: 0;\r\n    margin: 0 5px;\r\n    border: 0;\r\n    -webkit-transition: background-color 0.5s;\r\n    transition: background-color 0.5s;\r\n        color: #2D2D2D;\r\n}\r\n\r\nform button:hover {\r\n    background-color: #13FF00;\r\n    -webkit-transition: background-color 0.5s;\r\n    transition: background-color 0.5s;\r\n}\r\n\r\n.delete-btn {\r\n    height: 25px;\r\n    width: 25px;\r\n    font-size: 1rem;\r\n    border: 0;\r\n    -webkit-transition: background-color 0.5s;\r\n    transition: background-color 0.5s;\r\n    color: #2D2D2D;\r\n\r\n}\r\n\r\n.delete-btn:hover {\r\n    background-color: #FF5834;\r\n    -webkit-transition: background-color 0.5s;\r\n    transition: background-color 0.5s;\r\n}\r\n\r\n.bold {\r\n    font-weight: bold;\r\n}\r\n\r\n.footer-text {\r\n    font-size: 0.9rem;\r\n    line-height: 1.3;\r\n}\r\n\r\n.footer-list-box {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: space-evenly;\r\n        -ms-flex-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.footer-list {\r\n    max-width: 700px;\r\n    margin: 20px auto;\r\n}\r\n\r\n.footer-list li {\r\n    list-style-type: none;\r\n    text-align: left;\r\n    font-size: 0.9rem;\r\n    line-height: 1.3;\r\n    margin: 0 10px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: rgb(116, 116, 116);\r\n    font-weight: bold;\r\n}\r\n\r\na:hover {\r\n    color: silver;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h4>Enter Stock Symbol:</h4>\r\n  <form [formGroup]=\"myform\" novalidate (ngSubmit)=\"formSubmit()\">\r\n    <input type=\"text\" formControlName=\"stockSymbol\" maxlength=\"10\">\r\n    <button type=\"submit\">+</button>\r\n    <br>\r\n  </form>\r\n\r\n\r\n  <ul id=\"stock-box\">\r\n    <li *ngFor=\"let stock of this.stockService.stocks\">\r\n      <h5>{{stock.stockSymbol}}</h5>\r\n      <button class=\"delete-btn\" (click)=\"this.stockService.deleteStock(stock.stockSymbol)\">X</button>\r\n    </li>\r\n  </ul>\r\n\r\n  <div *ngIf=\"errorMsgs\" id=\"error-msgs\">{{errorMsgs}}</div>\r\n\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n  <h4>About This App:</h4>\r\n  <p class=\"footer-text\">This app is a <a href=\"http://www.freecodecamp.org\" target=\"_blank\">freecodecamp</a> project.</p>\r\n\r\n  <ul class=\"footer-list\">\r\n    <li><span class=\"bold\">User Story:</span> I can view a graph displaying the recent trend lines for each added stock.</li>\r\n    <li><span class=\"bold\">User Story:</span> I can add new stocks by their symbol name.</li>\r\n    <li><span class=\"bold\">User Story:</span> I can remove stocks.</li>\r\n    <li><span class=\"bold\">User Story:</span> I can see changes in real-time when any other user adds or removes a stock.</li>\r\n  </ul>\r\n\r\n<div class=\"footer-list-box\">\r\n  <ul class=\"footer-list\">\r\n    <li><span class=\"bold\">Built with:</span></li>\r\n    <li>MongoDB</li>\r\n    <li>ExpressJS</li>\r\n    <li>Angular</li>\r\n    <li>NodeJS</li>\r\n  </ul>\r\n\r\n  <ul class=\"footer-list\">\r\n    <li><span class=\"bold\">Powered by:</span></li>\r\n    <li>Socket.io</li>\r\n    <li>Alpha Vantage API</li>\r\n    <li>Highcharts</li>\r\n  </ul>\r\n\r\n  <ul class=\"footer-list\">\r\n      <li>Built by Howard</li>\r\n      <li><a href=\"https://hwrdleung.github.io\" target=\"_blank\">View my portfolio</a></li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_service__ = __webpack_require__("../../../../../src/app/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(stockService, http) {
        this.stockService = stockService;
        this.http = http;
        this.alphaVantageApiKey = 'QA392CBZXI80H0IX';
        this.alphaVantageApi = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=' + this.alphaVantageApiKey + '&symbol=';
    }
    HomeComponent.prototype.ngOnInit = function () {
        //Initialize form
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            stockSymbol: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('')
        });
        this.stockService.updateStocks();
        this.stockService.socketListener();
    };
    HomeComponent.prototype.formSubmit = function () {
        var _this = this;
        var newStock = this.myform.value.stockSymbol;
        //Check if it's a valid stock symbol
        this.http.get(this.alphaVantageApi + newStock).subscribe(function (res) {
            if (res['Error Message']) {
                _this.errorMsgs = "Stock not found";
            }
            else {
                _this.errorMsgs = "";
                _this.stockService.addNewStock(newStock);
                _this.myform.reset();
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__stock_service__["a" /* StockService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_subject__ = __webpack_require__("../../../../rxjs/subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockService = /** @class */ (function () {
    function StockService(http) {
        this.http = http;
        this.allStockData = []; //Stores stock data formatted correctly for use in Highstocks.  This is used in chartComponent.
        this.url = 'http://localhost:3000/';
        this.alphaVantageApiKey = 'QA392CBZXI80H0IX';
        this.alphaVantageApi = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=' + this.alphaVantageApiKey + '&symbol=';
        // This observable is used to notify chartComponent to refresh the chart
        // after stock data is fetched from external api
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_subject__["Subject"]();
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
    }
    StockService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    StockService.prototype.clearMessage = function () {
        this.subject.next();
    };
    StockService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    // Socket.io emitters and listeners
    StockService.prototype.socketListener = function () {
        var onInit = this;
        //Connection is made
        this.socket.on('connection', function () {
            console.log('Socket connected');
        });
        //User adds or deletes a stock
        this.socket.on('refresh', function () {
            onInit.updateStocks();
        });
    };
    StockService.prototype.addNewStock = function (newStock) {
        //Create an array with JUST the stock symbols and no extra data
        var stockSymbols = [];
        this.stocks.forEach(function (stock) {
            stockSymbols.push(stock.stockSymbol);
        });
        //Prevent users from adding duplicate stocks
        if (!stockSymbols.includes(newStock)) {
            this.socket.emit('new stock added', newStock);
        }
    };
    StockService.prototype.deleteStock = function (stockSymbol) {
        this.socket.emit('delete stock', stockSymbol);
        //I should probably change this to a delete request
    };
    //---The following methods are used for preparing data for use in Highstocks
    StockService.prototype.updateStocks = function () {
        var _this = this;
        //allStockData will store the finalized data for use in Highstocks 
        //First, clear allStockData to prevent duplicate data from being saved
        this.allStockData = [];
        //Updates stocks array with a list of all stocks currently saved in DB
        //Calls function updateChart for each stock
        var context = this;
        this.http.get(this.url + 'update').subscribe(function (res) {
            _this.stocks = res; //IDK why but res doesn't register as an array unless so I have to do this work-around
            _this.stocks.forEach(function (data) {
                context.updateChartSeriesData(data.stockSymbol);
            });
        });
    };
    StockService.prototype.updateChartSeriesData = function (stockSymbol) {
        var _this = this;
        //Get data for stockSymbol from Alpha Vantage
        //Format the data for use in highstocks
        //Push to allStockData array <--this is bound to stockChart in chartComponent
        this.http.get(this.alphaVantageApi + stockSymbol).subscribe(function (res) {
            var stockDataObj = {
                name: stockSymbol,
                data: [],
                tooltip: {
                    valueDecimals: 2
                }
            };
            //Data manipulation
            var dates = Object.keys(res['Time Series (Daily)']);
            dates.forEach(function (date) {
                var timeSerie = [];
                var unixDate = new Date(date).getTime();
                var closingValue = res['Time Series (Daily)'][date]['4. close']; //This is a decimal number in string format
                closingValue = parseFloat(closingValue); //Change to float for use in Highstocks
                timeSerie.push(unixDate);
                timeSerie.push(closingValue);
                //timeSerie is not in the correct format: [1511481600000, 195.75]
                stockDataObj.data.unshift(timeSerie); //Data must be in ascending order
            });
            //Data is now formmated correctly.  Save and notify chartComponent
            _this.allStockData.push(stockDataObj);
            _this.sendMessage('Stock data fetched');
        });
    };
    StockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StockService);
    return StockService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map