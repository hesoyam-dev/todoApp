webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivedTodosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__ = __webpack_require__(78);
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
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArchivedTodosPage = (function () {
    function ArchivedTodosPage(todoProvider, navCtrl, navParams) {
        this.todoProvider = todoProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.archivedTodos = [];
    }
    ArchivedTodosPage.prototype.ionViewDidLoad = function () {
        this.archivedTodos = this.todoProvider.getAllArchivedTodos();
    };
    ArchivedTodosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-archived-todos',template:/*ion-inline-start:"/Users/olehbudurovych/Documents/Studying/Практика/todo/src/pages/archived-todos/archived-todos.html"*/`<!--\n  Generated template for the ArchivedTodosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ArchivedTodos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let todo of archivedTodos">\n      {{todo}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/Users/olehbudurovych/Documents/Studying/Практика/todo/src/pages/archived-todos/archived-todos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__["a" /* TodoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ArchivedTodosPage);
    return ArchivedTodosPage;
}());

//# sourceMappingURL=archived-todos.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/archived-todos/archived-todos.module": [
		280,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__archived_todos_archived_todos__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(toastController, datepipe, todoProvider, navCtrl, alertController) {
        this.toastController = toastController;
        this.datepipe = datepipe;
        this.todoProvider = todoProvider;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.todos = [];
        this.reorderIsEnabled = false;
        this.archivedTodosPage = __WEBPACK_IMPORTED_MODULE_3__archived_todos_archived_todos__["a" /* ArchivedTodosPage */];
        this.checkedTodo = false;
        this.currentDate = this.getMonthInYear((new Date()).getMonth()) + " " + this.datepipe.transform(new Date(), 'dd');
        this.todos = this.todoProvider.getTodos();
    }
    HomePage.prototype.openTodoAlert = function () {
        var _this = this;
        var addTodoAlert = this.alertController.create({
            title: 'Add a Todo',
            message: 'Enter your Todo',
            inputs: [
                {
                    type: 'text',
                    name: 'addTodoInput'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: function (inputData) {
                        var todoText;
                        todoText = inputData.addTodoInput;
                        _this.todoProvider.addTodo(todoText);
                        addTodoAlert.onDidDismiss(function () {
                            var addTodoToast = _this.toastController.create({
                                message: "Todo " + "'" + todoText + "'" + " added",
                                duration: 2000
                            });
                            addTodoToast.present();
                        });
                    }
                }
            ]
        });
        addTodoAlert.present();
    };
    HomePage.prototype.editTodoAlert = function (todoIndex) {
        var _this = this;
        var editTodoAlert = this.alertController.create({
            title: 'Edit your Todo',
            message: '',
            inputs: [
                {
                    type: 'text',
                    name: 'addTodoInput',
                    value: this.todos[todoIndex]
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: function (inputData) {
                        var todoText;
                        todoText = inputData.addTodoInput;
                        _this.todos[todoIndex] = todoText;
                        editTodoAlert.onDidDismiss(function () {
                            var editTodoToast = _this.toastController.create({
                                message: "Todo " + "'" + todoText + "'" + " updated",
                                duration: 2000
                            });
                            editTodoToast.present();
                        });
                    }
                }
            ]
        });
        editTodoAlert.present();
    };
    HomePage.prototype.itemReordered = function ($event) {
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* reorderArray */])(this.todos, $event);
    };
    HomePage.prototype.toggleReorder = function () {
        this.reorderIsEnabled = !this.reorderIsEnabled;
    };
    HomePage.prototype.goToArchivePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__archived_todos_archived_todos__["a" /* ArchivedTodosPage */]);
    };
    HomePage.prototype.checked = function () {
        this.checkedTodo = !this.checkedTodo;
    };
    HomePage.prototype.getMonthInYear = function (month) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month];
    };
    HomePage.prototype.archivedTodo = function (todoIndex) {
        this.todoProvider.archiveTodo(todoIndex);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/olehbudurovych/Documents/Studying/Практика/todo/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-icon name="md-calendar"></ion-icon>\n      &nbsp;\n      {{ currentDate }}\n    </ion-title>\n    <ion-buttons start *ngIf=\'todos.length > 1\'>\n      <button (click)=\'toggleReorder()\' ion-button *ngIf=\'!reorderIsEnabled\'>\n        Edit\n      </button>\n      <button (click)=\'toggleReorder()\' ion-button *ngIf=\'reorderIsEnabled\'>\n        Done\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)=\'openTodoAlert()\'>\n        <ion-icon name=\'md-add-circle\'>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list [reorder]=\'reorderIsEnabled\' (ionItemReorder)=\'itemReordered($event)\'>\n    <ion-item-sliding *ngFor="let todo of todos; let todoIndex = index">\n      <ion-item>\n        <ion-label>\n          {{todo}}\n        </ion-label>\n        <ion-checkbox color="secondary" (click)="checked()"></ion-checkbox>\n      </ion-item>\n      <ion-item-options side=\'right\'>\n        <button ion-button color=\'danger\' (click)=\'archivedTodo(todoIndex)\'>\n          <ion-icon name=\'md-trash\'>\n          </ion-icon>\n        </button>\n      </ion-item-options>\n      <ion-item-options side=\'left\'>\n        <button ion-button (click)=\'editTodoAlert(todoIndex)\'>\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab [navPush]=\'archivedTodosPage\'>\n      <ion-icon name=\'archive\'>\n      </ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n`/*ion-inline-end:"/Users/olehbudurovych/Documents/Studying/Практика/todo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_2__providers_todo_todo__["a" /* TodoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_todo_todo__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_archived_todos_archived_todos__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_archived_todos_archived_todos__["a" /* ArchivedTodosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/archived-todos/archived-todos.module#ArchivedTodosPageModule', name: 'ArchivedTodosPage', segment: 'archived-todos', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_archived_todos_archived_todos__["a" /* ArchivedTodosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_todo_todo__["a" /* TodoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/olehbudurovych/Documents/Studying/Практика/todo/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/olehbudurovych/Documents/Studying/Практика/todo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TodoProvider = (function () {
    function TodoProvider(toastController, http) {
        this.toastController = toastController;
        this.http = http;
        this.todos = [];
        this.archivedTodos = [];
        // console.log('Hello TodoProvider Provider');
    }
    TodoProvider.prototype.getTodos = function () {
        return this.todos;
    };
    TodoProvider.prototype.addTodo = function (todo) {
        this.todos.push(todo);
    };
    TodoProvider.prototype.archiveTodo = function (todoIndex) {
        var archivedTodo = this.todos[todoIndex];
        this.archivedTodos.push(archivedTodo);
        this.todos.splice(todoIndex, 1);
        var archivedTodoToast = this.toastController.create({
            message: "Todo " + "'" + archivedTodo + "'" + " archived",
            duration: 2000
        });
        archivedTodoToast.present();
    };
    TodoProvider.prototype.getAllArchivedTodos = function () {
        return this.archivedTodos;
    };
    TodoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TodoProvider);
    return TodoProvider;
}());

//# sourceMappingURL=todo.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map