webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav (onSliderChange)=\"onSliderChange($event)\" [ngClass]=\"{'dark-theme': isSliderChecked}\"></app-sidenav>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.isSliderChecked = false;
    }
    AppComponent.prototype.onSliderChange = function (isChecked) {
        this.isSliderChecked = isChecked;
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_particle__ = __webpack_require__("../../../../angular-particle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__particles_particles_component__ = __webpack_require__("../../../../../src/app/particles/particles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_8__particles_particles_component__["a" /* ParticlesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_particle__["a" /* ParticlesModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routing */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
// ====== ./app/app.routes.ts ======





// Route Configuration
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */], data: { animation: { value: 'home', } } },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_2__projects_projects_component__["a" /* ProjectsComponent */], data: { animation: { value: 'projects', } } },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */], data: { animation: { value: 'about', } } },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */], data: { animation: { value: 'contact', } } }
];
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\n  <h1>Aaron Minnamon</h1>\n  <h2>Javascript Developer</h2>\n  <h2>Digital Craftsman</h2>\n  <button md-raised-button color=\"accent\">My Work</button>\n  <button md-raised-button color=\"primary\">Contact Me</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-container {\n  padding: 200px;\n  box-sizing: border-box;\n  color: #444;\n  position: absolute;\n  z-index: 2; }\n  .home-container h1 {\n    font-size: 60px;\n    text-transform: uppercase;\n    font-weight: bold;\n    margin-bottom: 0.5em; }\n  .home-container h2 {\n    font-size: 36px;\n    font-weight: 300;\n    margin-bottom: 0.5em; }\n  .home-container button {\n    text-transform: uppercase;\n    font-weight: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.animatePage = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "animatePage", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('pageAnimation', [
                // transition(':enter', [
                //   query('.home-container h1', style({opacity: 0, transform:'scale(0)'})),
                //   query('.home-container h2', style({opacity: 0, transform:'scale(0)'})),
                //   query('.home-container button', style({opacity: 0})),
                //   group([
                //     query('.home-container h1,h2', [
                //       animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
                //     ]),
                //     query('.home-container button', [
                //       stagger(100, [
                //         animate('800ms cubic-bezier(.35,0,.25,1)', style('*'))
                //       ])
                //     ])
                //   ])
                // ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* query */])('.home-container', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateY(-100px)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* group */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* query */])('.home-container', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('800ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])('*'))
                        ])
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ position: 'absolute', top: 0, left: 0, right: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateY(100px)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/particles/particles.component.html":
/***/ (function(module, exports) {

module.exports = "<particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\n"

/***/ }),

/***/ "../../../../../src/app/particles/particles.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/particles/particles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParticlesComponent = (function () {
    function ParticlesComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    ParticlesComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': 1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            "particles": {
                "number": {
                    "value": 63,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#95989a"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#95989a",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 389.7970619046457,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
    };
    return ParticlesComponent;
}());
ParticlesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-particles',
        template: __webpack_require__("../../../../../src/app/particles/particles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/particles/particles.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ParticlesComponent);

//# sourceMappingURL=particles.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list cols=\"4\" rowHeight=\"100px\">\n  <md-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </md-grid-tile>\n</md-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = (function () {
    function ProjectsComponent() {
        this.doAnimate = true;
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostBinding */])('@pageAnimation'),
    __metadata("design:type", Object)
], ProjectsComponent.prototype, "doAnimate", void 0);
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('pageAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])('.mat-grid-tile', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateY(-100px)' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* group */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])('.mat-grid-tile', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* stagger */])(100, [
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('800ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])('*'))
                            ])
                        ])
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ position: 'absolute', top: 0, left: 0, right: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* group */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* query */])('.mat-grid-tile', [
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* stagger */])(-100, [
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('800ms cubic-bezier(.35,0,.25,1)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateY(100px)' }))
                            ])
                        ])
                    ])
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\n  <md-sidenav color=\"accent\" mode=\"side\" opened=\"true\">\n    <md-slide-toggle color=\"accent\" (change)=sliderChanged($event)></md-slide-toggle>\n    <md-nav-list>\n       <md-list-item [routerLink]=\"['/home']\"><i mdTooltip=\"Home\" mdTooltipPosition=\"after\" class=\"material-icons icon-centered\">home</i></md-list-item>\n       <a md-list-item [routerLink]=\"['/projects']\"><i mdTooltip=\"Projects\" mdTooltipPosition=\"after\" class=\"material-icons icon-centered\">code</i></a>\n       <a md-list-item [routerLink]=\"['/about']\"><i mdTooltip=\"About\" mdTooltipPosition=\"after\" class=\"material-icons icon-centered\">info_outline</i></a>\n       <a md-list-item [routerLink]=\"['/contact']\"><i mdTooltip=\"Contact\" mdTooltipPosition=\"after\" class=\"material-icons icon-centered\">email</i></a>\n    </md-nav-list>\n  </md-sidenav>\n  <div class=\"my-content\" [@routerAnimations]=\"prepareRouteTransition(outlet)\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n    <app-particles></app-particles>\n  </div>\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavComponent = (function () {
    function SidenavComponent() {
        this.onSliderChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* EventEmitter */]();
    }
    SidenavComponent.prototype.sliderChanged = function (event) {
        this.onSliderChange.emit(event.checked);
    };
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.prepareRouteTransition = function (outlet) {
        var animation = outlet.activatedRouteData['animation'] || {};
        return animation['value'] || null;
    };
    return SidenavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "onSliderChange", void 0);
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-sidenav',
        template: __webpack_require__("../../../../../src/app/sidenav/sidenav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidenav/sidenav.component.scss")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["a" /* trigger */])('routerAnimations', [])
        ]
    }),
    __metadata("design:paramtypes", [])
], SidenavComponent);

//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map