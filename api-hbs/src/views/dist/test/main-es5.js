function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _component_form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/form/form.component */
    "./src/app/component/form/form.component.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _component_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/wallet/wallet.component */
    "./src/app/component/wallet/wallet.component.ts");
    /* harmony import */


    var _component_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/login/login.component */
    "./src/app/component/login/login.component.ts");
    /* harmony import */


    var _components_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/wallet-add/wallet-add.component */
    "./src/app/components/wallet-add/wallet-add.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_wallet_remove_wallet_remove_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/wallet-remove/wallet-remove.component */
    "./src/app/components/wallet-remove/wallet-remove.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: '/home'
    }, {
      path: 'home',
      component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'form2data/:id',
      component: _component_form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]
    }, {
      path: "wallet/:id",
      component: _component_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_5__["WalletComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "login",
      component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: "wallet/:id/add",
      component: _components_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_7__["WalletAddComponent"]
    }, {
      path: "register",
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
    }, {
      path: "wallet/:id/remove",
      component: _components_wallet_remove_wallet_remove_component__WEBPACK_IMPORTED_MODULE_9__["WalletRemoveComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(auth, router) {
        _classCallCheck(this, AppComponent);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.displayNavbar = '1';
          jquery__WEBPACK_IMPORTED_MODULE_1__('#toggle-btn').on('click', function (e) {
            e.preventDefault();

            if (jquery__WEBPACK_IMPORTED_MODULE_1__(window).outerWidth() > 1000) {
              jquery__WEBPACK_IMPORTED_MODULE_1__('#toggle-btn').toggleClass('mobile-version-navbar-show');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_1__('nav.side-navbar').toggleClass('show-sm');
              jquery__WEBPACK_IMPORTED_MODULE_1__('#toggle-btn').toggleClass('mobile-version-navbar-show');
            }
          });
          this.uid = this.uuid();
          this.linkForm = "/form2data/" + this.uid;
        }
      }, {
        key: "toggleNavbar",
        value: function toggleNavbar() {
          if (this.displayNavbar == '0') {
            this.displayNavbar = '1'; //  alert(this.displayNavbar);
          }

          if (this.displayNavbar == '1') {
            //    alert("1 - Changing to 0");
            this.displayNavbar = '0';
          } else {
            this.displayNavbar = '1';
          }
        }
      }, {
        key: "uuid",
        value: function uuid() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.auth.cerrarS();
          alert('Exit!...');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "m-5"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".menu-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuZGF2aWQvRGVza3RvcC9wcnVlYmEvdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICAiLCIubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/form/form.component */
    "./src/app/component/form/form.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _services_token_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/token.service */
    "./src/app/services/token.service.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _component_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./component/wallet/wallet.component */
    "./src/app/component/wallet/wallet.component.ts");
    /* harmony import */


    var _component_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./component/login/login.component */
    "./src/app/component/login/login.component.ts");
    /* harmony import */


    var _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./component/logout/logout.component */
    "./src/app/component/logout/logout.component.ts");
    /* harmony import */


    var _components_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/wallet-add/wallet-add.component */
    "./src/app/components/wallet-add/wallet-add.component.ts");
    /* harmony import */


    var _components_wallet_remove_wallet_remove_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/wallet-remove/wallet-remove.component */
    "./src/app/components/wallet-remove/wallet-remove.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts"); //Services
    //pwa


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _services_token_service__WEBPACK_IMPORTED_MODULE_18__["TokenService"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _component_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"], _component_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_22__["WalletComponent"], _component_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_24__["LogoutComponent"], _components_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_25__["WalletAddComponent"], _components_wallet_remove_wallet_remove_component__WEBPACK_IMPORTED_MODULE_26__["WalletRemoveComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__["NavbarComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _component_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"], _component_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_22__["WalletComponent"], _component_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_24__["LogoutComponent"], _components_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_25__["WalletAddComponent"], _components_wallet_remove_wallet_remove_component__WEBPACK_IMPORTED_MODULE_26__["WalletRemoveComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_27__["RegisterComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_28__["NavbarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production
          })],
          providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _services_token_service__WEBPACK_IMPORTED_MODULE_18__["TokenService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/form/form.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/form/form.component.ts ***!
    \**************************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppComponentFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _lib_countries_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../lib/countries.json */
    "./src/app/lib/countries.json");

    var _lib_countries_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../lib/countries.json */
    "./src/app/lib/countries.json", 1);
    /* harmony import */


    var _services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api-service.service */
    "./src/app/services/api-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function FormComponent_div_2_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormComponent_div_2_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The last name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormComponent_div_2_mat_option_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r11.name, " ");
      }
    }

    function FormComponent_div_2_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The country is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormComponent_div_2_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The city is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormComponent_div_2_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The adress name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormComponent_div_2_div_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The telephone is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormComponent_div_2_div_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The email name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function FormComponent_div_2_Template_input_keypress_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onKeypressEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "rowing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormComponent_div_2_div_14_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function FormComponent_div_2_Template_input_keypress_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.onKeypressEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "rowing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FormComponent_div_2_div_21_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Country");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "location_searching");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-autocomplete", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FormComponent_div_2_mat_option_30_Template, 2, 2, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FormComponent_div_2_div_32_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "directions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, FormComponent_div_2_div_39_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Adress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "location_city");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, FormComponent_div_2_div_46_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Telephone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "local_phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, FormComponent_div_2_div_55_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "alternate_email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, FormComponent_div_2_div_62_Template, 2, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_div_2_Template_button_click_65_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.submit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Data verify!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formErrors.Name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formErrors.LastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r0.displayFn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 11, ctx_r0.filteredOptions));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formErrors.Country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formErrors.Adress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formErrors.City);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", ctx_r0.codePhone, " \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formErrors.Telephone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formErrors.Email);
      }
    }

    function FormComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Preview contact data");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "rowing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "rowing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Country");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "location_searching");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "directions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Adress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "location_city");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Telephone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "local_phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "alternate_email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_div_3_Template_button_click_59_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Data send!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_div_3_Template_button_click_61_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.onBack();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Back!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.data.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.data.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.data.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.data.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.data.adress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.data.telephone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.data.email);
      }
    }
    /**
     * @title Input with error messages
     */


    var FormComponent = /*#__PURE__*/function () {
      function FormComponent(apiService, router) {
        _classCallCheck(this, FormComponent);

        this.apiService = apiService;
        this.router = router;
        this.emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.mode = "form";
        this.data = {
          name: "|",
          lastName: "|",
          country: "|",
          city: "|",
          adress: "|",
          telephone: "|",
          email: "|"
        };
        this.formErrors = {
          Name: "",
          LastName: "",
          Telephone: "",
          Adress: "",
          City: "",
          Country: "",
          Email: ""
        };
        this.options = _lib_countries_json__WEBPACK_IMPORTED_MODULE_3__;
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.DataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            Telephone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            Adress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            City: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)])
          });
          this.filteredOptions = this.DataForm.get("Country").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return typeof value === 'string' ? value : value.name;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (name) {
            return name ? _this._filter(name) : _this.options.slice();
          }));
          this.subscribirAEntrada("Country", function (value) {
            _this.codePhone = value.code;
          });
        }
      }, {
        key: "displayFn",
        value: function displayFn(country) {
          return country && country.name ? country.name : '';
        }
      }, {
        key: "_filter",
        value: function _filter(name) {
          var filterValue = name.toLowerCase();
          return this.options.filter(function (option) {
            return option.name.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "subscribirAEntrada",
        value: function subscribirAEntrada(entrada, fn) {
          var obs = this.DataForm.get(entrada);

          if (obs != null) {
            obs.valueChanges.subscribe({
              next: fn
            });
          }
        }
      }, {
        key: "validarRequerido",
        value: function validarRequerido(control) {
          var valor = this.DataForm.get(control).value;

          switch (control) {
            case "Name":
              if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
                this.formErrors.Name = "error";
                this.validacion = true;
              } else {
                this.formErrors.Name = "";
              }

              break;

            case "LastName":
              if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
                this.formErrors.LastName = "error";
                this.validacion = true;
              } else {
                this.formErrors.LastName = "";
              }

              break;

            case "Telephone":
              if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
                this.formErrors.Telephone = "error";
                this.validacion = true;
              } else {
                this.formErrors.Telephone = "";
              }

              break;

            case "City":
              if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
                this.formErrors.City = "error";
                this.validacion = true;
              } else {
                this.formErrors.City = "";
              }

              break;

            case "Adress":
              if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
                this.formErrors.Adress = "error";
                this.validacion = true;
              } else {
                this.formErrors.Adress = "";
              }

              break;

            case "Country":
              if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
                this.formErrors.Country = "error";
                this.validacion = true;
              } else {
                this.formErrors.Country = "";
              }

              break;

            case "Email":
              if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
                this.formErrors.Email = "error";
                this.validacion = true;
              } else {
                this.formErrors.Email = "";
              }

              break;

            default:
              break;
          }
        }
      }, {
        key: "retunData",
        value: function retunData(control) {
          return this.DataForm.get(control).value;
        }
      }, {
        key: "dataIsNotNull",
        value: function dataIsNotNull(name, lastName, country, city, adress, telephone, email) {
          if ((this.retunData(name) && this.retunData(lastName) && this.retunData(country) && this.retunData(city) && this.retunData(adress) && this.retunData(telephone) && this.retunData(email)) != null) {
            this.data.name = this.retunData(name);
            this.data.lastName = this.retunData(lastName);
            this.data.country = this.retunData(country).name;
            this.data.city = this.retunData(city);
            this.data.adress = this.retunData(adress);
            this.data.telephone = "+" + this.codePhone + this.retunData(telephone);
            this.data.email = this.retunData(email);
          }
        }
      }, {
        key: "onKeypressEvent",
        value: function onKeypressEvent(event) {
          var key = event.keyCode || event.which,
              tecla = String.fromCharCode(key).toLowerCase(),
              letras = " áéíóúabcdefghijklmnñopqrstuvwxyz.-",
              especiales = [8, 37, 39, 46],
              tecla_especial = false;

          for (var i in especiales) {
            if (key == especiales[i]) {
              tecla_especial = true;
              break;
            }
          }

          if (letras.indexOf(tecla) == -1 && !tecla_especial) {
            return false;
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          this.validarRequerido("Name");
          this.validarRequerido("LastName");
          this.validarRequerido("Email");
          this.validarRequerido("Country");
          this.validarRequerido("City");
          this.validarRequerido("Adress");
          this.validarRequerido("Telephone");

          if (this.DataForm.valid) {
            this.validacion = true;
            this.dataIsNotNull("Name", "LastName", "Country", "City", "Adress", "Telephone", "Email");
            this.mode = "preview";
          } else {
            this.validacion = false;
          }

          console.log(this.validacion);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.apiService.sendMail(this.data).subscribe(function (res) {
            console.log(res);

            _this2.router.navigate(['/home']);
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "onBack",
        value: function onBack() {
          this.mode = "form";
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ɵfac = function FormComponent_Factory(t) {
      return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormComponent,
      selectors: [["app-form"]],
      decls: 4,
      vars: 3,
      consts: [[1, "container"], ["name", "f", 1, "form", 3, "formGroup"], [4, "ngIf"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "example-full-width"], ["type", "text", "matInput", "", "placeholder", "Juan David", "formControlName", "Name", 3, "keypress"], ["matSuffix", ""], ["class", "err-msg", 4, "ngIf"], ["type", "text", "matInput", "", "placeholder", "Mahecha Cruz", "formControlName", "LastName", 3, "keypress"], ["type", "text", "placeholder", "United States", "matInput", "", "formControlName", "Country", 3, "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", "placeholder", "Newark, OH", "formControlName", "Adress"], ["type", "text", "matInput", "", "placeholder", "553 Hebron Rd", "formControlName", "City"], ["matPrefix", ""], ["type", "number", "matInput", "", "placeholder", "555-555-1234", "formControlName", "Telephone"], ["type", "text", "matInput", "", "placeholder", "example.j@example.com", "formControlName", "Email"], [1, "row", "justity-content-center"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "err-msg"], [3, "value"], ["type", "text", "matInput", "", "disabled", "", 3, "value"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-warning", 3, "click"]],
      template: function FormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormComponent_div_2_Template, 67, 13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormComponent_div_3_Template, 63, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.DataForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode == "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mode == "preview");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.err-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: red;\n  color: white;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuZGF2aWQvRGVza3RvcC9wcnVlYmEvdGVzdC9zcmMvYXBwL2NvbXBvbmVudC9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0ZCB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICB9XG5cbiAgLmVyci1tc2d7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogd2hpdGVcbiAgfVxuXG4gIC5idG57XG4gICAgbWFyZ2luOiAxcmVtO1xuICB9IiwiZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi5lcnItbXNnIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogMXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-form',
          templateUrl: './form.component.html',
          styleUrls: ['./form.component.scss']
        }]
      }], function () {
        return [{
          type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 15,
      vars: 0,
      consts: [[1, "card", "text-center"], [1, "card-header"], [1, "card-body"], ["width", "25%", "src", "../../../assets/image/descarga.png", "alt", "Logo"], [1, "card-title"], [1, "card-text"], ["href", "https://github.com/juanmahecha9", "target", "_blank", 1, "btn", "btn-primary"], [1, "card-footer", "text-muted"], [1, "container", "text-center", "my-5"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " WELCOME TO: WALLET. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Developed by:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Juanmahecha9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go my github...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 1 day ago.... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo et nisi culpa quas, quia est qui dolores amet ipsa laborum neque repudiandae vel enim, eos nesciunt voluptatum, exercitationem ducimus praesentium! Cupiditate, quo omnis accusantium alias cum tenetur molestiae commodi, quibusdam expedita perspiciatis nostrum ipsa, iure atque dignissimos eius? Vero voluptates autem quae perferendis dicta ex molestias a velit, porro provident! Repudiandae, provident ad esse odio pariatur fugiat odit earum, illum, debitis tempora veniam accusantium voluptatibus error eius similique! Cum, sed! Magni officia eos adipisci sapiente facere maiores enim, quos sint? Quis maiores obcaecati eum numquam beatae id dolor possimus eaque voluptatem unde. Adipisci obcaecati est maxime nihil facilis. Consectetur incidunt officiis ipsum repellendus cumque non assumenda rem cum sapiente nulla. Earum ab vel nostrum, tempora in eum nihil praesentium, iste rem, fuga repudiandae? Ab nihil explicabo assumenda nulla sunt illum expedita. Provident sapiente iste obcaecati eius id cum aliquid at?\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuZGF2aWQvRGVza3RvcC9wcnVlYmEvdGVzdC9zcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufSIsIi5jYXJkIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/login/login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/component/login/login.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.user = {
          email: '',
          password: ''
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this3 = this;

          this.authService.inicio(this.user).subscribe(function (res) {
            //console.log(res);
            alert('inico de sesion');
            localStorage.setItem('token', res.token);

            _this3.router.navigate(['/wallet/' + res.id]);
          }, function (err) {
            alert('Inicio de sesion erroneo, vuelva a intentar');
            console.log(err);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 25,
      vars: 2,
      consts: [[1, "tag-container"], [1, "margent"], [1, "contenderorForm"], [1, "formulario", 3, "ngSubmit"], [1, "contenedor"], [1, "input-contenedor"], ["matSuffix", ""], ["ngModel", "", "required", "", "type", "text", "placeholder", "E-mail", "name", "email", 3, "ngModel", "ngModelChange"], ["nombre", "ngModel"], ["type", "password", "placeholder", "Password", "name", "password", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Login", 1, "button"], ["routerLink", "/register", 1, "link"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "alternate_email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "By registering, you agree to our Terms of Use, Privacy Policy and Data Protection. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Don't have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["tag-container[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-family: \"SF Pro Text\", \"SF Pro Icons\", \"Helvetica Neue\", Helvetica, Roboto, \"Liberation Sans\", Arial, sans-serif;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem 2rem;\n  width: 40rem;\n  color: #000;\n  border-radius: 0rem;\n  transition: all 0.2s ease-out;\n}\ntag-container[_ngcontent-%COMP%]   .margent[_ngcontent-%COMP%] {\n  margin-top: 10rem;\n}\nmain[_ngcontent-%COMP%] {\n  background-size: cover;\n  box-sizing: border-box;\n  height: 100vh;\n  margin: 0 auto;\n  background-attachment: fixed;\n}\n.contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1px;\n}\n.formulario[_ngcontent-%COMP%] {\n  background-color: rgba(165, 165, 165, 0.8);\n  padding: 10px;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 40px;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 82%;\n  padding: 10px;\n  border: none;\n  background: rgba(240, 240, 240, 0.5);\n}\n.input-contenedor[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border: 1px solid white;\n}\n.icon[_ngcontent-%COMP%] {\n  min-width: 50px;\n  text-align: center;\n  color: white;\n}\n.button[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  color: white;\n  font-size: 20px;\n  background: #1a2537;\n  padding: 15px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.button[_ngcontent-%COMP%]:hover {\n  background: cadetblue;\n  transition: all 0.5s ease;\n}\np[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\n.link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-weight: 600;\n  transition: all 0.5s ease;\n}\n.link[_ngcontent-%COMP%]:hover {\n  color: cadetblue;\n}\n.contenderorForm[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1px;\n}\n.formulario[_ngcontent-%COMP%] {\n  background-color: rgba(165, 165, 165, 0.8);\n  padding: 10px;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 40px;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 82%;\n  padding: 10px;\n  border: none;\n  background: rgba(240, 240, 240, 0.5);\n}\n.input-contenedor[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border: 1px solid white;\n}\n.icon[_ngcontent-%COMP%] {\n  min-width: 50px;\n  text-align: center;\n  color: white;\n}\n.button[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  color: white;\n  font-size: 20px;\n  background: #1a2537;\n  padding: 15px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.button[_ngcontent-%COMP%]:hover {\n  background: cadetblue;\n  transition: all 0.5s ease;\n}\np[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\n.link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-weight: 600;\n  transition: all 0.5s ease;\n}\n.link[_ngcontent-%COMP%]:hover {\n  color: cadetblue;\n}\n@media (max-width: 1500px) {\n  .tag-container[_ngcontent-%COMP%]   .margent[_ngcontent-%COMP%] {\n    margin-top: 6rem;\n  }\n}\n@media (max-width: 700px) {\n  .tag-container[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: auto;\n  }\n}\n.visibility[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuZGF2aWQvRGVza3RvcC9wcnVlYmEvdGVzdC9zcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxxSEFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0FKO0FEQ0k7RUFDSSxpQkFBQTtBQ0NSO0FER0E7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0FKO0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0E7RUFDSSwwQ0FBQTtFQUVBLGFBQUE7QUNDSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUE7O0VBRUksZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDQ0o7QURFQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDR0o7QURBQTtFQUNJLGdCQUFBO0FDR0o7QUREQTtFQUNJLFdBQUE7QUNJSjtBRERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNJSjtBRERBO0VBQ0ksMENBQUE7RUFFQSxhQUFBO0FDR0o7QURBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNHSjtBREFBOztFQUVJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ0dKO0FEQUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7QURBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHSjtBREFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHSjtBREFBO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQ0dKO0FEQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNHSjtBREFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0dKO0FEQUE7RUFDSSxnQkFBQTtBQ0dKO0FEQUE7RUFFUTtJQUNJLGdCQUFBO0VDRVY7QUFDRjtBRENBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsWUFBQTtFQ0NOO0FBQ0Y7QURHQTtFQUNJLGFBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhZy1jb250YWluZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dFwiLCBcIlNGIFBybyBJY29uc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgUm9ib3RvLCBcIkxpYmVyYXRpb24gU2Fuc1wiLCBBcmlhbCxcbiAgICAgICAgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICB3aWR0aDogNDByZW07XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgICAubWFyZ2VudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcmVtO1xuICAgIH1cbn1cblxubWFpbiB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbi5jb250ZW5lZG9yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcHg7XG59XG4uZm9ybXVsYXJpbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjgpO1xuXG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHdpZHRoOiA4MiU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xufVxuXG4uaW5wdXQtY29udGVuZWRvciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmljb24ge1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMWEyNTM3O1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cbnAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogY2FkZXRibHVlO1xufVxuLmNvbnRlbmRlcm9yRm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcHg7XG59XG5cbi5mb3JtdWxhcmlvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuOCk7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgd2lkdGg6IDgyJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSk7XG59XG5cbi5pbnB1dC1jb250ZW5lZG9yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uaWNvbiB7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxYTI1Mzc7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuXG5wIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogY2FkZXRibHVlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gICAgLnRhZy1jb250YWluZXIge1xuICAgICAgICAubWFyZ2VudCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLnRhZy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufVxuXG5cbi52aXNpYmlsaXR5e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59IiwidGFnLWNvbnRhaW5lciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHRcIiwgXCJTRiBQcm8gSWNvbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFJvYm90bywgXCJMaWJlcmF0aW9uIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgd2lkdGg6IDQwcmVtO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG50YWctY29udGFpbmVyIC5tYXJnZW50IHtcbiAgbWFyZ2luLXRvcDogMTByZW07XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4uZm9ybXVsYXJpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC44KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiA4MiU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xufVxuXG4uaW5wdXQtY29udGVuZWRvciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uaWNvbiB7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZDogIzFhMjUzNztcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuXG4ubGluazpob3ZlciB7XG4gIGNvbG9yOiBjYWRldGJsdWU7XG59XG5cbi5jb250ZW5kZXJvckZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXB4O1xufVxuXG4uZm9ybXVsYXJpbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC44KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiA4MiU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjUpO1xufVxuXG4uaW5wdXQtY29udGVuZWRvciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uaWNvbiB7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZDogIzFhMjUzNztcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuXG4ubGluazpob3ZlciB7XG4gIGNvbG9yOiBjYWRldGJsdWU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgLnRhZy1jb250YWluZXIgLm1hcmdlbnQge1xuICAgIG1hcmdpbi10b3A6IDZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAudGFnLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbi52aXNpYmlsaXR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/logout/logout.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/logout/logout.component.ts ***!
    \******************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppComponentLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LogoutComponent = /*#__PURE__*/function () {
      function LogoutComponent() {
        _classCallCheck(this, LogoutComponent);
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ɵfac = function LogoutComponent_Factory(t) {
      return new (t || LogoutComponent)();
    };

    LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogoutComponent,
      selectors: [["app-logout"]],
      decls: 2,
      vars: 0,
      template: function LogoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logout',
          templateUrl: './logout.component.html',
          styleUrls: ['./logout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/wallet/wallet.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/wallet/wallet.component.ts ***!
    \******************************************************/

  /*! exports provided: WalletComponent */

  /***/
  function srcAppComponentWalletWalletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletComponent", function () {
      return WalletComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var WalletComponent = /*#__PURE__*/function () {
      function WalletComponent(dataService, route, router) {
        _classCallCheck(this, WalletComponent);

        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.current_date = new Date();
      }

      _createClass(WalletComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.idPage = this.route.snapshot.params['id'];
          localStorage.setItem('id', this.idPage);
          this.dataService.findById(this.idPage).subscribe(function (res) {
            _this4.dataUser = res;
            console.log(_this4.dataUser);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "add",
        value: function add() {
          var x = "add";
          this.router.navigate(['/wallet', this.idPage, x]);
        }
      }, {
        key: "remove",
        value: function remove() {
          var x = "remove";
          this.router.navigate(['/wallet', this.idPage, x]);
        }
      }]);

      return WalletComponent;
    }();

    WalletComponent.ɵfac = function WalletComponent_Factory(t) {
      return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    WalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WalletComponent,
      selectors: [["app-wallet"]],
      decls: 32,
      vars: 4,
      consts: [[1, "form-wrapper"], [1, "step"], [1, "step-1"], [1, "form-title"], [1, "header"], ["width", "15%", "src", "../../../assets/image/pixlr-bg-result-coin.png", "alt", "logo"], [1, "control-group", "amount-fields"], [1, "amount-field"], [1, "btc-amount"], [1, "example-form"], [1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "disabled", "", "matInput", "", 3, "value"], ["matSuffix", ""], [1, "available"], [1, "actions"], [1, "btn", "btn-info", "mx-1", 3, "click"], [1, "btn", "btn-warning", "mx-1", 3, "click"]],
      template: function WalletComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your register email is: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Your balance.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " $ \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "attach_money");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Available to send: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_28_listener() {
            return ctx.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_30_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sing in: ", ctx.dataUser.lastSingIn, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome: ", ctx.dataUser.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.dataUser.balance);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.dataUser.balance, ")");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"]],
      styles: [".make-public[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.make-public[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.why-public[_ngcontent-%COMP%]:hover:after {\n  content: \"By selecting this checkbox, the note will be available on the public blockchain ledger, otherwise it will be for your private records only :)\";\n  position: absolute;\n  margin-left: 5px;\n  color: white;\n  padding: 5px;\n  border-radius: 3px;\n  width: 150px;\n  font-size: 13px;\n  z-index: 10000;\n}\n.public-note-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.note-msg[_ngcontent-%COMP%] {\n  color: #cccccc;\n  font-weight: 100;\n  font-size: 12px;\n}\ntextarea[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border-color: #eeeeee;\n  height: 60px;\n  width: 300px;\n}\ntextarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.total-amounts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.amount-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 5px;\n}\n.amount-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1;\n  color: #cccccc;\n  font-size: 14px;\n}\n.amount-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-left: 10px;\n  font-weight: 100;\n}\n.amount-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.amount-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover:after {\n  content: \"Fees are given to the miners who verify your transaction on the blockchain\";\n  position: absolute;\n  margin-left: 5px;\n  background: #023e57;\n  color: white;\n  padding: 5px;\n  border-radius: 3px;\n  min-width: 100px;\n  font-size: 13px;\n  z-index: 10000;\n}\n.total-item[_ngcontent-%COMP%] {\n  border-top: 1px solid RGBA(4, 4, 4, 0.1);\n  border-radius: 3px;\n}\n.total-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #0498d4;\n}\ninput[readonly=readonly][_ngcontent-%COMP%] {\n  color: #cccccc;\n  margin-left: 10px;\n  border-bottom: none !important;\n}\n.available[_ngcontent-%COMP%] {\n  color: #cccccc;\n  margin-top: 30px;\n  margin-bottom: 5px;\n  padding: 0;\n  font-weight: 100;\n  font-size: 13px;\n}\n.actions[_ngcontent-%COMP%] {\n  border-top: 1px solid #eeeeee;\n  padding: 2em;\n  display: flex;\n  justify-content: flex-end;\n}\n.actions[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #cccccc;\n  margin-right: 10px;\n}\n.actions[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  background: #595959;\n  border-radius: 3px;\n  border: none;\n  color: white;\n  padding: 8px 12px;\n  transition: all 0.5s ease-in-out;\n}\n.actions[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background: #404040;\n}\n.actions[_ngcontent-%COMP%]   .fa-chevron-right[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%] {\n  color: white;\n  margin-left: 5px;\n  font-size: 12px;\n}\n.actions[_ngcontent-%COMP%]   .next.send[_ngcontent-%COMP%] {\n  padding: 12px 36px;\n  background: #8cca6a;\n}\n.actions[_ngcontent-%COMP%]   .next.send[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.fa-arrows-h[_ngcontent-%COMP%] {\n  color: #cccccc;\n  padding: 0px 10px;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.label[_ngcontent-%COMP%] {\n  color: #0498d4;\n  margin-bottom: 15px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.usd-amount[_ngcontent-%COMP%], .btc-amount[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cccccc;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.usd-amount[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .btc-amount[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #595959 !important;\n}\n.usd-amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .btc-amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n}\n.usd-amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .btc-amount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.amount-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.amount-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.send-by[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: absolute;\n  top: 0px;\n  right: 25px;\n}\n.send-by[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 10px;\n  color: #cccccc;\n}\n.send-by[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: #0498d4;\n  font-weight: 700;\n}\n.send-by[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.to-field[_ngcontent-%COMP%], .public-note[_ngcontent-%COMP%] {\n  position: relative;\n}\n.to-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .public-note[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.btc[_ngcontent-%COMP%], .email[_ngcontent-%COMP%], .phone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.qr-code[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  right: 33px;\n  top: 50px;\n  background: #fdfdfd;\n  border: 1px solid #e5e5e5;\n  padding: 5px;\n}\n.qr-code[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #efefef;\n}\n.control-group[_ngcontent-%COMP%] {\n  padding: 1em 2em;\n  background: white;\n}\n.control-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  padding: 8px 0;\n  border-bottom: 1px solid #cccccc;\n  min-width: 350px;\n}\n.control-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n  -webkit-appearance: none;\n}\n.control-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #595959;\n}\n.step[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 11px;\n  padding-right: 14px;\n}\n.form-title[_ngcontent-%COMP%] {\n  color: #0498d4;\n  padding: 1em 2em;\n}\n.form-title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 100;\n  color: #b3b3b3;\n  margin-bottom: 5px;\n  margin-top: 0;\n}\n.form-title[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.form-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\n.form-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\nform[_ngcontent-%COMP%] {\n  transition: all 1s ease-in-out;\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 5px 1px 0 rgba(0, 40, 68, 0.4);\n  border-radius: 3px;\n  background: #f5f7f9;\n  position: relative;\n  margin: 1em;\n}\n.collapse[_ngcontent-%COMP%] {\n  -webkit-animation: collapse 0.6s linear 0s 1;\n  animation: collapse 0.6s linear 0s 1;\n}\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cccccc;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #0498d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Roboto\", \"Lato\", sans-serif;\n  font-weight: normal;\n}\n@-webkit-keyframes collapse {\n  10% {\n    transform: scale(0.9);\n  }\n  20% {\n    transform: scale(0.8);\n  }\n  30% {\n    transform: scale(0.7);\n  }\n  40% {\n    transform: scale(0.6);\n  }\n  50% {\n    transform: scale(0.5);\n  }\n  60% {\n    transform: scale(0.6);\n  }\n  70% {\n    transform: scale(0.7);\n  }\n  80% {\n    transform: scale(0.8);\n  }\n  90% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuZGF2aWQvRGVza3RvcC9wcnVlYmEvdGVzdC9zcmMvYXBwL2NvbXBvbmVudC93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvd2FsbGV0L3dhbGxldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGlCQUFBO0FDUko7QURTSTtFQUNJLGtCQUFBO0FDUFI7QURZUTtFQUNJLHdKQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNUWjtBRGNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDWEo7QURhQTtFQUNJLGNBL0JFO0VBZ0NGLGdCQUFBO0VBQ0EsZUFBQTtBQ1ZKO0FEYUE7RUFDSSxrQkFBQTtFQUNBLHFCQXZDRTtFQXdDRixZQUFBO0VBQ0EsWUFBQTtBQ1ZKO0FEV0k7RUFDSSxhQUFBO0FDVFI7QURhQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ1ZKO0FEWUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEVUk7RUFDSSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNBMURGO0VBMkRFLGVBQUE7QUNSUjtBRFVJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNSUjtBRFNRO0VBQ0ksZUFBQTtBQ1BaO0FEUVk7RUFDSSxxRkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDTmhCO0FEV0E7RUFDSSx3Q0FBQTtFQUNBLGtCQUFBO0FDUko7QURTSTtFQUNJLGNBM0ZEO0FDb0ZQO0FEV0E7RUFDSSxjQTNGRTtFQTRGRixpQkFBQTtFQUNBLDhCQUFBO0FDUko7QURXQTtFQUNJLGNBakdFO0VBa0dGLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUko7QURXQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ1JKO0FEU0k7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQWpIRjtFQWtIRSxrQkFBQTtBQ1BSO0FEU0k7RUFDSSxtQkFwSEE7RUFxSEEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNQUjtBRFFRO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtBQ05aO0FEU0k7O0VBRUksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1BSO0FEU0k7RUFDSSxrQkFBQTtFQUNBLG1CQXRJRDtBQytIUDtBRFFRO0VBQ0kscUJBQUE7QUNOWjtBRFlJO0VBQ0ksYUFBQTtBQ1RSO0FEWUE7RUFDSSxjQXJKRTtFQXNKRixpQkFBQTtBQ1RKO0FEWUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUNUSjtBRFlBO0VBQ0ksY0FwS0c7RUFxS0gsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlBOztFQUVJLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNUSjtBRFVJOztFQUNJLFNBQUE7RUFDQSx5QkFBQTtBQ1BSO0FEU0k7O0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDTlI7QURPUTs7RUFDSSxhQUFBO0FDSlo7QURTQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDTko7QURPSTtFQUNJLGtCQUFBO0FDTFI7QURTQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ05KO0FET0k7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQXpNRjtBQ29NTjtBRE1RO0VBQ0ksY0FoTkw7RUFpTkssZ0JBQUE7QUNKWjtBRE1RO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0FDSlo7QURTQTtFQUNJLHdCQUFBO0FDTko7QURTQTtFQUNJLFVBQUE7QUNOSjtBRFFBOztFQUVJLGtCQUFBO0FDTEo7QURNSTs7RUFDSSxtQkFBQTtBQ0hSO0FET0E7OztFQUdJLGFBQUE7RUFDQSxzQkFBQTtBQ0pKO0FETUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0hKO0FESUk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FER0k7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0RSO0FERVE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7QUNBWjtBREdJO0VBQ0ksY0FBQTtBQ0RSO0FESUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDREo7QURJQTtFQUNJLGNBeFJHO0VBeVJILGdCQUFBO0FDREo7QURFSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0FSO0FERUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBRElBO0VBQ0ksOEJBQUE7QUNESjtBRElBO0VBQ0ksNENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQWhUUztFQWlUVCxrQkFBQTtFQUNBLFdBQUE7QUNESjtBRElBO0VBQ0ksNENBQUE7RUFDQSxvQ0FBQTtBQ0RKO0FESUE7O0VBRUksd0JBQUE7RUFDQSxTQUFBO0FDREo7QURHQTtFQUNJLGNBOVRFO0FDOFROO0FER0E7O0VBRUksWUFBQTtFQUNBLG1CQXpVRztFQTBVSCxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7QUNBSjtBRElBO0VBQ0k7SUFDSSxxQkFBQTtFQ0ROO0VER0U7SUFDSSxxQkFBQTtFQ0ROO0VER0U7SUFDSSxxQkFBQTtFQ0ROO0VER0U7SUFDSSxxQkFBQTtFQ0ROO0VER0U7SUFDSSxxQkFBQTtFQ0ROO0VER0U7SUFDSSxxQkFBQTtFQ0ROO0VER0U7SUFDSSxxQkFBQTtFQ0ROO0VER0U7SUFDSSxxQkFBQTtFQ0ROO0VER0U7SUFDSSxxQkFBQTtFQ0ROO0VER0U7SUFDSSxtQkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvd2FsbGV0L3dhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibHVlOiAjMDQ5OGQ0O1xuJGdyZWVuOiAjODZiMzYwO1xuJGdyZXk6ICNlZWVlZWU7XG4kbGlnaHQtZ3JleTogI2Y1ZjdmOTtcbiRlZWU6ICNlZWVlZWU7XG4kY2NjOiAjY2NjY2NjO1xuJGJsYWNrOiAjNTk1OTU5O1xuJHNlbmQ6ICM4Y2NhNmE7XG5cbi5tYWtlLXB1YmxpYyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbGFiZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuLndoeS1wdWJsaWMge1xuICAgICY6aG92ZXIge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiQnkgc2VsZWN0aW5nIHRoaXMgY2hlY2tib3gsIHRoZSBub3RlIHdpbGwgYmUgYXZhaWxhYmxlIG9uIHRoZSBwdWJsaWMgYmxvY2tjaGFpbiBsZWRnZXIsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGZvciB5b3VyIHByaXZhdGUgcmVjb3JkcyBvbmx5IDopXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wdWJsaWMtbm90ZS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm5vdGUtbXNnIHtcbiAgICBjb2xvcjogJGNjYztcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxudGV4dGFyZWEge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItY29sb3I6ICRlZWU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG5cbi50b3RhbC1hbW91bnRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYW1vdW50LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgY29sb3I6ICRjY2M7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJGZWVzIGFyZSBnaXZlbiB0byB0aGUgbWluZXJzIHdobyB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbiBvbiB0aGUgYmxvY2tjaGFpblwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkYmx1ZSwgMjUlKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi50b3RhbC1pdGVtIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgUkdCQSg0LCA0LCA0LCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICRibHVlO1xuICAgIH1cbn1cblxuaW5wdXRbcmVhZG9ubHk9XCJyZWFkb25seVwiXSB7XG4gICAgY29sb3I6ICRjY2M7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYXZhaWxhYmxlIHtcbiAgICBjb2xvcjogJGNjYztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uYWN0aW9ucyB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRlZWU7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAuY2FuY2VsIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICRjY2M7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLm5leHQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJsYWNrLCAxMCUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mYS1jaGV2cm9uLXJpZ2h0LFxuICAgIC5mYS1jaGVjayB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAubmV4dC5zZW5kIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAzNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkc2VuZDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmJ1dHRvbiB7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxufVxuLmZhLWFycm93cy1oIHtcbiAgICBjb2xvcjogJGNjYztcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubGFiZWwge1xuICAgIGNvbG9yOiAkYmx1ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udXNkLWFtb3VudCxcbi5idGMtYW1vdW50IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNjYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBjb2xvcjogZGFya2VuKCRjY2MsIDQ1JSkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hbW91bnQtZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbGFiZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuXG4uc2VuZC1ieSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMjVweDtcbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIGNvbG9yOiAkY2NjO1xuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogJGJsdWU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7XG59XG4udG8tZmllbGQsXG4ucHVibGljLW5vdGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxufVxuXG4uYnRjLFxuLmVtYWlsLFxuLnBob25lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucXItY29kZSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzNweDtcbiAgICB0b3A6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIH1cbn1cbi5jb250cm9sLWdyb3VwIHtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY2NjO1xuICAgICAgICBtaW4td2lkdGg6IDM1MHB4O1xuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICBjb2xvcjogZGFya2VuKCRjY2MsIDQ1JSk7XG4gICAgfVxufVxuLnN0ZXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgICBjb2xvcjogJGJsdWU7XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBoNSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4oJGNjYywgMTAlKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxufVxuXG5mb3JtIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLXdyYXBwZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDFweCAwIHJnYmEoMCwgNDAsIDY4LCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtZ3JleTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5jb2xsYXBzZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGNvbGxhcHNlIDAuNnMgbGluZWFyIDBzIDE7XG4gICAgYW5pbWF0aW9uOiBjb2xsYXBzZSAwLjZzIGxpbmVhciAwcyAxO1xufVxuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRjY2M7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogJGJsdWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4vL2FuaW1hdGlvbiBjcnVkXG5ALXdlYmtpdC1rZXlmcmFtZXMgY29sbGFwc2Uge1xuICAgIDEwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIH1cbiAgICA5MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cbiIsIi5tYWtlLXB1YmxpYyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLm1ha2UtcHVibGljIGxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ud2h5LXB1YmxpYzpob3ZlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiQnkgc2VsZWN0aW5nIHRoaXMgY2hlY2tib3gsIHRoZSBub3RlIHdpbGwgYmUgYXZhaWxhYmxlIG9uIHRoZSBwdWJsaWMgYmxvY2tjaGFpbiBsZWRnZXIsIG90aGVyd2lzZSBpdCB3aWxsIGJlIGZvciB5b3VyIHByaXZhdGUgcmVjb3JkcyBvbmx5IDopXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG4ucHVibGljLW5vdGUtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm90ZS1tc2cge1xuICBjb2xvcjogI2NjY2NjYztcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWNvbG9yOiAjZWVlZWVlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRvdGFsLWFtb3VudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYW1vdW50LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuLmFtb3VudC1pdGVtIHAge1xuICBtYXJnaW46IDA7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYW1vdW50LWl0ZW0gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uYW1vdW50LWl0ZW0gc3Bhbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hbW91bnQtaXRlbSBzcGFuOmhvdmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJGZWVzIGFyZSBnaXZlbiB0byB0aGUgbWluZXJzIHdobyB2ZXJpZnkgeW91ciB0cmFuc2FjdGlvbiBvbiB0aGUgYmxvY2tjaGFpblwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICMwMjNlNTc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgei1pbmRleDogMTAwMDA7XG59XG5cbi50b3RhbC1pdGVtIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIFJHQkEoNCwgNCwgNCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnRvdGFsLWl0ZW0gcCB7XG4gIGNvbG9yOiAjMDQ5OGQ0O1xufVxuXG5pbnB1dFtyZWFkb25seT1yZWFkb25seV0ge1xuICBjb2xvcjogI2NjY2NjYztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmF2YWlsYWJsZSB7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmFjdGlvbnMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZWVlZTtcbiAgcGFkZGluZzogMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmFjdGlvbnMgLmNhbmNlbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYWN0aW9ucyAubmV4dCB7XG4gIGJhY2tncm91bmQ6ICM1OTU5NTk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5hY3Rpb25zIC5uZXh0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNDA0MDQwO1xufVxuLmFjdGlvbnMgLmZhLWNoZXZyb24tcmlnaHQsXG4uYWN0aW9ucyAuZmEtY2hlY2sge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hY3Rpb25zIC5uZXh0LnNlbmQge1xuICBwYWRkaW5nOiAxMnB4IDM2cHg7XG4gIGJhY2tncm91bmQ6ICM4Y2NhNmE7XG59XG4uYWN0aW9ucyAubmV4dC5zZW5kOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZmEtYXJyb3dzLWgge1xuICBjb2xvcjogI2NjY2NjYztcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGFiZWwge1xuICBjb2xvcjogIzA0OThkNDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udXNkLWFtb3VudCxcbi5idGMtYW1vdW50IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi51c2QtYW1vdW50IGxhYmVsLFxuLmJ0Yy1hbW91bnQgbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNTk1OTU5ICFpbXBvcnRhbnQ7XG59XG4udXNkLWFtb3VudCBpbnB1dCxcbi5idGMtYW1vdW50IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi51c2QtYW1vdW50IGlucHV0OmZvY3VzLFxuLmJ0Yy1hbW91bnQgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYW1vdW50LWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFtb3VudC1maWVsZCBsYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnNlbmQtYnkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAyNXB4O1xufVxuLnNlbmQtYnkgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBjb2xvcjogI2NjY2NjYztcbn1cbi5zZW5kLWJ5IGxpLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDQ5OGQ0O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnNlbmQtYnkgbGk6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50by1maWVsZCxcbi5wdWJsaWMtbm90ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50by1maWVsZCBsYWJlbCxcbi5wdWJsaWMtbm90ZSBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5idGMsXG4uZW1haWwsXG4ucGhvbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucXItY29kZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMzcHg7XG4gIHRvcDogNTBweDtcbiAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgcGFkZGluZzogNXB4O1xufVxuLnFyLWNvZGU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5jb250cm9sLWdyb3VwIHtcbiAgcGFkZGluZzogMWVtIDJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uY29udHJvbC1ncm91cCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xuICBtaW4td2lkdGg6IDM1MHB4O1xufVxuLmNvbnRyb2wtZ3JvdXAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5jb250cm9sLWdyb3VwIGxhYmVsIHtcbiAgY29sb3I6ICM1OTU5NTk7XG59XG5cbi5zdGVwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgY29sb3I6ICMwNDk4ZDQ7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG59XG4uZm9ybS10aXRsZSBoNSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uZm9ybS10aXRsZSAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JtLXRpdGxlIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5mb3JtLXRpdGxlIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuZm9ybSB7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0td3JhcHBlciB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDFweCAwIHJnYmEoMCwgNDAsIDY4LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICNmNWY3Zjk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5jb2xsYXBzZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjb2xsYXBzZSAwLjZzIGxpbmVhciAwcyAxO1xuICBhbmltYXRpb246IGNvbGxhcHNlIDAuNnMgbGluZWFyIDBzIDE7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwNDk4ZDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBjb2xsYXBzZSB7XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-wallet',
          templateUrl: './wallet.component.html',
          styleUrls: ['./wallet.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function NavbarComponent_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sing up.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function NavbarComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_15_Template_li_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.cerrar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.idNavigation);
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(auth, router) {
        _classCallCheck(this, NavbarComponent);

        this.auth = auth;
        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.idNavigation = "/wallet/" + localStorage.getItem('id');
          this.displayNavbar = '1';
          jquery__WEBPACK_IMPORTED_MODULE_1__('#toggle-btn').on('click', function (e) {
            e.preventDefault();

            if (jquery__WEBPACK_IMPORTED_MODULE_1__(window).outerWidth() > 1000) {
              jquery__WEBPACK_IMPORTED_MODULE_1__('#toggle-btn').toggleClass('mobile-version-navbar-show');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_1__('nav.side-navbar').toggleClass('show-sm');
              jquery__WEBPACK_IMPORTED_MODULE_1__('#toggle-btn').toggleClass('mobile-version-navbar-show');
            }
          });
          this.uid = this.uuid();
          this.linkForm = "/form2data/" + this.uid;
        }
      }, {
        key: "toggleNavbar",
        value: function toggleNavbar() {
          if (this.displayNavbar == '0') {
            this.displayNavbar = '1'; //  alert(this.displayNavbar);
          }

          if (this.displayNavbar == '1') {
            //    alert("1 - Changing to 0");
            this.displayNavbar = '0';
          } else {
            this.displayNavbar = '1';
          }
        }
      }, {
        key: "uuid",
        value: function uuid() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
          });
        }
      }, {
        key: "cerrar",
        value: function cerrar() {
          this.auth.cerrarS();
          alert('Exit!...');
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 17,
      vars: 3,
      consts: [[1, "navbar", "sticky-top", "navbar-expand-lg", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [2, "color", "aliceblue"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "w-100", "justify-content-end"], [1, "nav-item", "active"], ["routerLink", "/home", 1, "nav-link"], [1, "nav-link", 3, "routerLink"], [4, "ngIf", "ngIfElse"], ["cerrarSesion", ""], [1, "nav-item"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/register", 1, "nav-link"], [1, "nav-link"], [1, "nav-link", 3, "click"], ["href", "#", 1, "nav-link"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wallet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Form.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavbarComponent_ng_container_14_Template, 7, 0, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_ng_template_15_Template, 6, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.linkForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.loggedIn())("ngIfElse", _r1);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(authService, router) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this.router = router;
        /* objeto para llenar  */

        this.user = {
          name: '',
          email: '',
          password: ''
        };
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /* captura de los datos */

        /* uso del local storage para poder guardar el token que se adquirio */

      }, {
        key: "registro",
        value: function registro() {
          var _this5 = this;

          this.authService.registro(this.user).subscribe(function (res) {
            // console.log(res)
            alert('Registro realizado');

            _this5.router.navigate(['/home']);
          }, function (err) {
            alert('Registro rechazado');
            console.log(err);
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 30,
      vars: 3,
      consts: [[1, "tag-container"], [1, "margent"], [1, "contenedorForm"], [1, "formulario", 3, "submit"], [1, "contenedor"], [1, "input-contenedor"], ["matSuffix", ""], ["type", "text", "placeholder", "Name", "name", "nombre", "id", "nombre", "autofocus", "", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["nombre", "ngModel"], ["required", "", "type", "text", "placeholder", "E-Mail", "name", "email", "id", "email", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["required", "", "type", "password", "placeholder", "Password", "name", "password", "id", "password", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Registrate", "id", "btn", 1, "button"], ["routerLink", "/login", 1, "link"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_4_listener() {
            return ctx.registro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Registro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "rowing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.user.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "alternate_email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "By registering, you agree to our Terms of Use, Privacy Policy and Data Protection. data protection.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".tag-container[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-family: \"SF Pro Text\", \"SF Pro Icons\", \"Helvetica Neue\", Helvetica, Roboto, \"Liberation Sans\", Arial, sans-serif;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: row;\n  padding: 1rem 2rem;\n  width: 40rem;\n  color: #000;\n  border-radius: 0rem;\n  transition: all 0.2s ease-out;\n}\n.tag-container[_ngcontent-%COMP%]   .margent[_ngcontent-%COMP%] {\n  margin-top: 10rem;\n}\nmain[_ngcontent-%COMP%] {\n  background-size: cover;\n  box-sizing: border-box;\n  height: 100vh;\n  margin: 0 auto;\n  background-attachment: fixed;\n}\n.contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1px;\n}\n.formulario[_ngcontent-%COMP%] {\n  background-color: rgba(165, 165, 165, 0.8);\n  padding: 10px;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 40px;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 82%;\n  padding: 10px;\n  border: none;\n  background: rgba(240, 240, 240, 0.5);\n}\n.input-contenedor[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border: 1px solid white;\n}\n.icon[_ngcontent-%COMP%] {\n  min-width: 50px;\n  text-align: center;\n  color: white;\n}\n.button[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  color: white;\n  font-size: 20px;\n  background: #1a2537;\n  padding: 15px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.button[_ngcontent-%COMP%]:hover {\n  background: cadetblue;\n  transition: all 0.5s ease;\n}\np[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\n.link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-weight: 600;\n  transition: all 0.5s ease;\n}\n.link[_ngcontent-%COMP%]:hover {\n  color: cadetblue;\n}\n.contenderorForm[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contenedor[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1px;\n}\n.formulario[_ngcontent-%COMP%] {\n  background-color: rgba(165, 165, 165, 0.8);\n  padding: 10px;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  font-size: 40px;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 82%;\n  padding: 10px;\n  border: none;\n  background: rgba(240, 240, 240, 0.5);\n}\n.input-contenedor[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  border: 1px solid white;\n}\n.icon[_ngcontent-%COMP%] {\n  min-width: 50px;\n  text-align: center;\n  color: white;\n}\n.button[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  color: white;\n  font-size: 20px;\n  background: #1a2537;\n  padding: 15px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.button[_ngcontent-%COMP%]:hover {\n  background: cadetblue;\n  transition: all 0.5s ease;\n}\np[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\n.link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-weight: 600;\n  transition: all 0.5s ease;\n}\n.link[_ngcontent-%COMP%]:hover {\n  color: cadetblue;\n}\n@media (max-width: 1500px) {\n  .tag-container[_ngcontent-%COMP%]   .margent[_ngcontent-%COMP%] {\n    margin-top: 6rem;\n  }\n}\n@media (max-width: 700px) {\n  .tag-container[_ngcontent-%COMP%] {\n    width: 95%;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuZGF2aWQvRGVza3RvcC9wcnVlYmEvdGVzdC9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLHFIQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDQUo7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURHQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FDQUo7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QURDQTtFQUNJLDBDQUFBO0VBRUEsYUFBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURFQTs7RUFFSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNDSjtBREVBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURFQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRUo7QURBQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNHSjtBREFBO0VBQ0ksZ0JBQUE7QUNHSjtBRERBO0VBQ0ksV0FBQTtBQ0lKO0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0lKO0FEREE7RUFDSSwwQ0FBQTtFQUVBLGFBQUE7QUNHSjtBREFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0dKO0FEQUE7O0VBRUksZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDR0o7QURBQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUNHSjtBREFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKO0FEQUE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDR0o7QURBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDR0o7QURBQTtFQUNJLGdCQUFBO0FDR0o7QURBQTtFQUVRO0lBQ0ksZ0JBQUE7RUNFVjtBQUNGO0FEQ0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxZQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnLWNvbnRhaW5lciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIFBybyBUZXh0XCIsIFwiU0YgUHJvIEljb25zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBSb2JvdG8sIFwiTGliZXJhdGlvbiBTYW5zXCIsIEFyaWFsLFxuICAgICAgICBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIHdpZHRoOiA0MHJlbTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICAgIC5tYXJnZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgfVxufVxuXG5tYWluIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuLmNvbnRlbmVkb3Ige1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFweDtcbn1cbi5mb3JtdWxhcmlvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuOCk7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgd2lkdGg6IDgyJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuNSk7XG59XG5cbi5pbnB1dC1jb250ZW5lZG9yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4uaWNvbiB7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxYTI1Mzc7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxucCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuLmxpbms6aG92ZXIge1xuICAgIGNvbG9yOiBjYWRldGJsdWU7XG59XG4uY29udGVuZGVyb3JGb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbmVkb3Ige1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFweDtcbn1cblxuLmZvcm11bGFyaW8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC44KTtcblxuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sXG5pbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogODIlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC41KTtcbn1cblxuLmlucHV0LWNvbnRlbmVkb3Ige1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5pY29uIHtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzFhMjUzNztcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbnAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5saW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuLmxpbms6aG92ZXIge1xuICAgIGNvbG9yOiBjYWRldGJsdWU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgICAudGFnLWNvbnRhaW5lciB7XG4gICAgICAgIC5tYXJnZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAudGFnLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG59XG4iLCIudGFnLWNvbnRhaW5lciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIFRleHRcIiwgXCJTRiBQcm8gSWNvbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIFJvYm90bywgXCJMaWJlcmF0aW9uIFNhbnNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgd2lkdGg6IDQwcmVtO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMHJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG4udGFnLWNvbnRhaW5lciAubWFyZ2VudCB7XG4gIG1hcmdpbi10b3A6IDEwcmVtO1xufVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmZvcm11bGFyaW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuOCk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogODIlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC41KTtcbn1cblxuLmlucHV0LWNvbnRlbmVkb3Ige1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmljb24ge1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxYTI1Mzc7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuLmxpbms6aG92ZXIge1xuICBjb2xvcjogY2FkZXRibHVlO1xufVxuXG4uY29udGVuZGVyb3JGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW5lZG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmZvcm11bGFyaW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuOCk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogODIlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNDAsIDI0MCwgMC41KTtcbn1cblxuLmlucHV0LWNvbnRlbmVkb3Ige1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmljb24ge1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMxYTI1Mzc7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuLmxpbms6aG92ZXIge1xuICBjb2xvcjogY2FkZXRibHVlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gIC50YWctY29udGFpbmVyIC5tYXJnZW50IHtcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnRhZy1jb250YWluZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/wallet-add/wallet-add.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/wallet-add/wallet-add.component.ts ***!
    \***************************************************************/

  /*! exports provided: WalletAddComponent */

  /***/
  function srcAppComponentsWalletAddWalletAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletAddComponent", function () {
      return WalletAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var WalletAddComponent = /*#__PURE__*/function () {
      function WalletAddComponent(router, dataService, route) {
        _classCallCheck(this, WalletAddComponent);

        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.income = 0.00;
      }

      _createClass(WalletAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.idPage = this.route.snapshot.params['id'];
          this.dataService.findById(this.idPage).subscribe(function (res) {
            _this6.dataUser = res;
            console.log(res);
          }, function (err) {
            console.log(err);
          });
          this.DataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ValueAdd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
          });
          this.subscribirAEntrada("ValueAdd", function (value) {
            _this6.income = value;
            _this6.total = _this6.income + _this6.dataUser.balance;
          });
        }
      }, {
        key: "subscribirAEntrada",
        value: function subscribirAEntrada(entrada, fn) {
          var obs = this.DataForm.get(entrada);

          if (obs != null) {
            obs.valueChanges.subscribe({
              next: fn
            });
          }
        }
      }, {
        key: "retunData",
        value: function retunData(control) {
          return this.DataForm.get(control).value;
        }
      }, {
        key: "add",
        value: function add() {
          var isTrue = confirm("Ar you sure?");
          this.dataUser.balance = this.total;

          if (isTrue) {
            this.dataService.upgradeData(this.idPage, this.dataUser).subscribe();
          } else {}
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/wallet', this.idPage]);
        }
      }]);

      return WalletAddComponent;
    }();

    WalletAddComponent.ɵfac = function WalletAddComponent_Factory(t) {
      return new (t || WalletAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    WalletAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WalletAddComponent,
      selectors: [["app-wallet-add"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])],
      decls: 35,
      vars: 4,
      consts: [[1, "card"], [1, "card-header", "text-center"], [1, "card-body"], ["id", "register"], ["id", "ticket"], ["id", "entries"], ["id", "total"], ["id", "entry", "name", "f", 1, "form", 3, "formGroup"], ["id", "newEntry", "type", "number", "autofocus", "", "placeholder", "How Much?", "formControlName", "ValueAdd"], [1, "my-3", "row", "justify-content-center"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-info", 3, "click"]],
      template: function WalletAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "It is time to enter a value!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Thank You!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tbody", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "income");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletAddComponent_Template_button_click_30_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Add value...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletAddComponent_Template_button_click_33_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Back wallet page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.dataUser.balance, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.income, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.total, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.DataForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["#register[_ngcontent-%COMP%] {\n  width: 20em;\n  margin: auto;\n}\n\n#ticket[_ngcontent-%COMP%] {\n  background: white;\n  margin: 0 1em;\n  padding: 1em;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);\n}\n\n#ticket[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  font-family: monospace;\n  width: 100%;\n  border-collapse: collapse;\n}\n\n#ticket[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #ticket[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n#ticket[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#ticket[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #ticket[_ngcontent-%COMP%]   #total[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n#ticket[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n}\n\n#entry[_ngcontent-%COMP%] {\n  background: #333;\n  padding: 12px;\n  border-radius: 10px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);\n}\n\n#entry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid black;\n  text-align: right;\n  font-family: sans-serif;\n  font-size: 20px;\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n}\n\n#entry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(255, 255, 255, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuZGF2aWQvRGVza3RvcC9wcnVlYmEvdGVzdC9zcmMvYXBwL2NvbXBvbmVudHMvd2FsbGV0LWFkZC93YWxsZXQtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3dhbGxldC1hZGQvd2FsbGV0LWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0dKOztBRERFO0VBQ0UsWUFBQTtBQ0lKOztBREZFO0VBQ0UsZ0JBQUE7QUNLSjs7QURIRTtFQUNFLGlCQUFBO0FDTUo7O0FESkU7RUFDRSwyQkFBQTtBQ09KOztBREpFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBQ09KOztBRExFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFHQSxzQkFBQTtBQ1FKOztBRE5FO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dhbGxldC1hZGQvd2FsbGV0LWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3JlZ2lzdGVyIHtcbiAgICB3aWR0aDogMjBlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgI3RpY2tldCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiAwIDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLC4yNSk7XG4gIH1cbiAgI3RpY2tldCBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICN0aWNrZXQgdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuICAjdGlja2V0IHRkLCAjdGlja2V0IHRoIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgI3RpY2tldCB0aCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAjdGlja2V0IHRkLCAjdGlja2V0ICN0b3RhbCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgI3RpY2tldCB0Zm9vdCB0aCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIFxuICAjZW50cnkge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwuMjUpO1xuICB9XG4gICNlbnRyeSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsMCwwLC41KTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgI2VudHJ5IGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNzUpO1xuICB9IiwiI3JlZ2lzdGVyIHtcbiAgd2lkdGg6IDIwZW07XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI3RpY2tldCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDAgMWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuI3RpY2tldCBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RpY2tldCB0YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4jdGlja2V0IHRkLCAjdGlja2V0IHRoIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4jdGlja2V0IHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3RpY2tldCB0ZCwgI3RpY2tldCAjdG90YWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI3RpY2tldCB0Zm9vdCB0aCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2VudHJ5IHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4jZW50cnkgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNlbnRyeSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-wallet-add',
          templateUrl: './wallet-add.component.html',
          styleUrls: ['./wallet-add.component.scss'],
          providers: [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/wallet-remove/wallet-remove.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/wallet-remove/wallet-remove.component.ts ***!
    \*********************************************************************/

  /*! exports provided: WalletRemoveComponent */

  /***/
  function srcAppComponentsWalletRemoveWalletRemoveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletRemoveComponent", function () {
      return WalletRemoveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data.service */
    "./src/app/services/data.service.ts");

    var WalletRemoveComponent = /*#__PURE__*/function () {
      function WalletRemoveComponent(router, dataService, route) {
        _classCallCheck(this, WalletRemoveComponent);

        this.router = router;
        this.dataService = dataService;
        this.route = route;
        this.income = 0.00;
      }

      _createClass(WalletRemoveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.idPage = this.route.snapshot.params['id'];
          this.dataService.findById(this.idPage).subscribe(function (res) {
            _this7.dataUser = res;
            console.log(res);
          }, function (err) {
            console.log(err);
          });
          this.DataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            ValueAdd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
          });
          this.subscribirAEntrada("ValueAdd", function (value) {
            _this7.income = value;
            _this7.total = _this7.dataUser.balance - _this7.income;
          });
        }
      }, {
        key: "subscribirAEntrada",
        value: function subscribirAEntrada(entrada, fn) {
          var obs = this.DataForm.get(entrada);

          if (obs != null) {
            obs.valueChanges.subscribe({
              next: fn
            });
          }
        }
      }, {
        key: "retunData",
        value: function retunData(control) {
          return this.DataForm.get(control).value;
        }
      }, {
        key: "add",
        value: function add() {
          var isTrue = confirm("Ar you sure?");
          this.dataUser.balance = this.total;

          if (isTrue) {
            if (this.income > this.dataUser.balance) {
              alert("Transaction not possible due to lack of funds...");
            } else {
              this.dataService.upgradeData(this.idPage, this.dataUser).subscribe();
            }
          } else {
            this.router.navigate(['/wallet', this.idPage]);
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/wallet', this.idPage]);
        }
      }]);

      return WalletRemoveComponent;
    }();

    WalletRemoveComponent.ɵfac = function WalletRemoveComponent_Factory(t) {
      return new (t || WalletRemoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    WalletRemoveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WalletRemoveComponent,
      selectors: [["app-wallet-remove"]],
      decls: 35,
      vars: 4,
      consts: [[1, "card"], [1, "card-header", "text-center"], [1, "card-body"], ["id", "register"], ["id", "ticket"], ["id", "entries"], ["id", "total"], ["id", "entry", "name", "f", 1, "form", 3, "formGroup"], ["id", "newEntry", "type", "number", "autofocus", "", "placeholder", "How Much?", "formControlName", "ValueAdd"], [1, "my-3", "row", "justify-content-center"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-info", 3, "click"]],
      template: function WalletRemoveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "It is time to remove money!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Thank You!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tbody", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tfoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletRemoveComponent_Template_button_click_30_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Remove value...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletRemoveComponent_Template_button_click_33_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Back wallet page.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.dataUser.balance, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.income, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.total, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.DataForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["#register[_ngcontent-%COMP%] {\n  width: 20em;\n  margin: auto;\n}\n\n#ticket[_ngcontent-%COMP%] {\n  background: white;\n  margin: 0 1em;\n  padding: 1em;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);\n}\n\n#ticket[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#ticket[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  font-family: monospace;\n  width: 100%;\n  border-collapse: collapse;\n}\n\n#ticket[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #ticket[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n#ticket[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n#ticket[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #ticket[_ngcontent-%COMP%]   #total[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n#ticket[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n}\n\n#entry[_ngcontent-%COMP%] {\n  background: #333;\n  padding: 12px;\n  border-radius: 10px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);\n}\n\n#entry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid black;\n  text-align: right;\n  font-family: sans-serif;\n  font-size: 20px;\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);\n  box-sizing: border-box;\n}\n\n#entry[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(255, 255, 255, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdWFuZGF2aWQvRGVza3RvcC9wcnVlYmEvdGVzdC9zcmMvYXBwL2NvbXBvbmVudHMvd2FsbGV0LXJlbW92ZS93YWxsZXQtcmVtb3ZlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3dhbGxldC1yZW1vdmUvd2FsbGV0LXJlbW92ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0dKOztBRERFO0VBQ0UsWUFBQTtBQ0lKOztBREZFO0VBQ0UsZ0JBQUE7QUNLSjs7QURIRTtFQUNFLGlCQUFBO0FDTUo7O0FESkU7RUFDRSwyQkFBQTtBQ09KOztBREpFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBQ09KOztBRExFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFHQSxzQkFBQTtBQ1FKOztBRE5FO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dhbGxldC1yZW1vdmUvd2FsbGV0LXJlbW92ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI3JlZ2lzdGVyIHtcbiAgICB3aWR0aDogMjBlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgI3RpY2tldCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luOiAwIDFlbTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsMCwwLC4yNSk7XG4gIH1cbiAgI3RpY2tldCBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICN0aWNrZXQgdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgfVxuICAjdGlja2V0IHRkLCAjdGlja2V0IHRoIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgI3RpY2tldCB0aCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAjdGlja2V0IHRkLCAjdGlja2V0ICN0b3RhbCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgI3RpY2tldCB0Zm9vdCB0aCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIFxuICAjZW50cnkge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLDAsMCwuMjUpO1xuICB9XG4gICNlbnRyeSBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsMCwwLC41KTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgI2VudHJ5IGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNzUpO1xuICB9IiwiI3JlZ2lzdGVyIHtcbiAgd2lkdGg6IDIwZW07XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI3RpY2tldCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDAgMWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuI3RpY2tldCBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3RpY2tldCB0YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4jdGlja2V0IHRkLCAjdGlja2V0IHRoIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4jdGlja2V0IHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3RpY2tldCB0ZCwgI3RpY2tldCAjdG90YWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI3RpY2tldCB0Zm9vdCB0aCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2VudHJ5IHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4jZW50cnkgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNlbnRyeSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletRemoveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-wallet-remove',
          templateUrl: './wallet-remove.component.html',
          styleUrls: ['./wallet-remove.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.loggedIn()) {
            return true;
          }

          this.router.navigate(['/registro']);
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lib/countries.json":
  /*!************************************!*\
    !*** ./src/app/lib/countries.json ***!
    \************************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, default */

  /***/
  function srcAppLibCountriesJson(module) {
    module.exports = JSON.parse("[{\"code\":\"840\",\"name\":\"Abkhazia\"},{\"code\":\"93\",\"name\":\"Afghanistan\"},{\"code\":\"355\",\"name\":\"Albania\"},{\"code\":\"213\",\"name\":\"Algeria\"},{\"code\":\"1 684\",\"name\":\"American Samoa\"},{\"code\":\"376\",\"name\":\"Andorra\"},{\"code\":\"244\",\"name\":\"Angola\"},{\"code\":\"1 264\",\"name\":\"Anguilla\"},{\"code\":\"1 268\",\"name\":\"Antigua and Barbuda\"},{\"code\":\"54\",\"name\":\"Argentina\"},{\"code\":\"374\",\"name\":\"Armenia\"},{\"code\":\"297\",\"name\":\"Aruba\"},{\"code\":\"247\",\"name\":\"Ascension\"},{\"code\":\"61\",\"name\":\"Australia\"},{\"code\":\"672\",\"name\":\"Australian External Territories\"},{\"code\":\"43\",\"name\":\"Austria\"},{\"code\":\"994\",\"name\":\"Azerbaijan\"},{\"code\":\"1 242\",\"name\":\"Bahamas\"},{\"code\":\"973\",\"name\":\"Bahrain\"},{\"code\":\"880\",\"name\":\"Bangladesh\"},{\"code\":\"1 246\",\"name\":\"Barbados\"},{\"code\":\"1 268\",\"name\":\"Barbuda\"},{\"code\":\"375\",\"name\":\"Belarus\"},{\"code\":\"32\",\"name\":\"Belgium\"},{\"code\":\"501\",\"name\":\"Belize\"},{\"code\":\"229\",\"name\":\"Benin\"},{\"code\":\"1 441\",\"name\":\"Bermuda\"},{\"code\":\"975\",\"name\":\"Bhutan\"},{\"code\":\"591\",\"name\":\"Bolivia\"},{\"code\":\"387\",\"name\":\"Bosnia and Herzegovina\"},{\"code\":\"267\",\"name\":\"Botswana\"},{\"code\":\"55\",\"name\":\"Brazil\"},{\"code\":\"246\",\"name\":\"British Indian Ocean Territory\"},{\"code\":\"1 284\",\"name\":\"British Virgin Islands\"},{\"code\":\"673\",\"name\":\"Brunei\"},{\"code\":\"359\",\"name\":\"Bulgaria\"},{\"code\":\"226\",\"name\":\"Burkina Faso\"},{\"code\":\"257\",\"name\":\"Burundi\"},{\"code\":\"855\",\"name\":\"Cambodia\"},{\"code\":\"237\",\"name\":\"Cameroon\"},{\"code\":\"1\",\"name\":\"Canada\"},{\"code\":\"238\",\"name\":\"Cape Verde\"},{\"code\":\" 345\",\"name\":\"Cayman Islands\"},{\"code\":\"236\",\"name\":\"Central African Republic\"},{\"code\":\"235\",\"name\":\"Chad\"},{\"code\":\"56\",\"name\":\"Chile\"},{\"code\":\"86\",\"name\":\"China\"},{\"code\":\"61\",\"name\":\"Christmas Island\"},{\"code\":\"61\",\"name\":\"Cocos-Keeling Islands\"},{\"code\":\"57\",\"name\":\"Colombia\"},{\"code\":\"269\",\"name\":\"Comoros\"},{\"code\":\"242\",\"name\":\"Congo\"},{\"code\":\"243\",\"name\":\"Congo, Dem. Rep. of (Zaire)\"},{\"code\":\"682\",\"name\":\"Cook Islands\"},{\"code\":\"506\",\"name\":\"Costa Rica\"},{\"code\":\"385\",\"name\":\"Croatia\"},{\"code\":\"53\",\"name\":\"Cuba\"},{\"code\":\"599\",\"name\":\"Curacao\"},{\"code\":\"537\",\"name\":\"Cyprus\"},{\"code\":\"420\",\"name\":\"Czech Republic\"},{\"code\":\"45\",\"name\":\"Denmark\"},{\"code\":\"246\",\"name\":\"Diego Garcia\"},{\"code\":\"253\",\"name\":\"Djibouti\"},{\"code\":\"1 767\",\"name\":\"Dominica\"},{\"code\":\"1 809\",\"name\":\"Dominican Republic\"},{\"code\":\"670\",\"name\":\"East Timor\"},{\"code\":\"56\",\"name\":\"Easter Island\"},{\"code\":\"593\",\"name\":\"Ecuador\"},{\"code\":\"20\",\"name\":\"Egypt\"},{\"code\":\"503\",\"name\":\"El Salvador\"},{\"code\":\"240\",\"name\":\"Equatorial Guinea\"},{\"code\":\"291\",\"name\":\"Eritrea\"},{\"code\":\"372\",\"name\":\"Estonia\"},{\"code\":\"251\",\"name\":\"Ethiopia\"},{\"code\":\"500\",\"name\":\"Falkland Islands\"},{\"code\":\"298\",\"name\":\"Faroe Islands\"},{\"code\":\"679\",\"name\":\"Fiji\"},{\"code\":\"358\",\"name\":\"Finland\"},{\"code\":\"33\",\"name\":\"France\"},{\"code\":\"596\",\"name\":\"French Antilles\"},{\"code\":\"594\",\"name\":\"French Guiana\"},{\"code\":\"689\",\"name\":\"French Polynesia\"},{\"code\":\"241\",\"name\":\"Gabon\"},{\"code\":\"220\",\"name\":\"Gambia\"},{\"code\":\"995\",\"name\":\"Georgia\"},{\"code\":\"49\",\"name\":\"Germany\"},{\"code\":\"233\",\"name\":\"Ghana\"},{\"code\":\"350\",\"name\":\"Gibraltar\"},{\"code\":\"30\",\"name\":\"Greece\"},{\"code\":\"299\",\"name\":\"Greenland\"},{\"code\":\"1 473\",\"name\":\"Grenada\"},{\"code\":\"590\",\"name\":\"Guadeloupe\"},{\"code\":\"1 671\",\"name\":\"Guam\"},{\"code\":\"502\",\"name\":\"Guatemala\"},{\"code\":\"224\",\"name\":\"Guinea\"},{\"code\":\"245\",\"name\":\"Guinea-Bissau\"},{\"code\":\"595\",\"name\":\"Guyana\"},{\"code\":\"509\",\"name\":\"Haiti\"},{\"code\":\"504\",\"name\":\"Honduras\"},{\"code\":\"852\",\"name\":\"Hong Kong SAR China\"},{\"code\":\"36\",\"name\":\"Hungary\"},{\"code\":\"354\",\"name\":\"Iceland\"},{\"code\":\"91\",\"name\":\"India\"},{\"code\":\"62\",\"name\":\"Indonesia\"},{\"code\":\"98\",\"name\":\"Iran\"},{\"code\":\"964\",\"name\":\"Iraq\"},{\"code\":\"353\",\"name\":\"Ireland\"},{\"code\":\"972\",\"name\":\"Israel\"},{\"code\":\"39\",\"name\":\"Italy\"},{\"code\":\"225\",\"name\":\"Ivory Coast\"},{\"code\":\"1 876\",\"name\":\"Jamaica\"},{\"code\":\"81\",\"name\":\"Japan\"},{\"code\":\"962\",\"name\":\"Jordan\"},{\"code\":\"7 7\",\"name\":\"Kazakhstan\"},{\"code\":\"254\",\"name\":\"Kenya\"},{\"code\":\"686\",\"name\":\"Kiribati\"},{\"code\":\"965\",\"name\":\"Kuwait\"},{\"code\":\"996\",\"name\":\"Kyrgyzstan\"},{\"code\":\"856\",\"name\":\"Laos\"},{\"code\":\"371\",\"name\":\"Latvia\"},{\"code\":\"961\",\"name\":\"Lebanon\"},{\"code\":\"266\",\"name\":\"Lesotho\"},{\"code\":\"231\",\"name\":\"Liberia\"},{\"code\":\"218\",\"name\":\"Libya\"},{\"code\":\"423\",\"name\":\"Liechtenstein\"},{\"code\":\"370\",\"name\":\"Lithuania\"},{\"code\":\"352\",\"name\":\"Luxembourg\"},{\"code\":\"853\",\"name\":\"Macau SAR China\"},{\"code\":\"389\",\"name\":\"Macedonia\"},{\"code\":\"261\",\"name\":\"Madagascar\"},{\"code\":\"265\",\"name\":\"Malawi\"},{\"code\":\"60\",\"name\":\"Malaysia\"},{\"code\":\"960\",\"name\":\"Maldives\"},{\"code\":\"223\",\"name\":\"Mali\"},{\"code\":\"356\",\"name\":\"Malta\"},{\"code\":\"692\",\"name\":\"Marshall Islands\"},{\"code\":\"596\",\"name\":\"Martinique\"},{\"code\":\"222\",\"name\":\"Mauritania\"},{\"code\":\"230\",\"name\":\"Mauritius\"},{\"code\":\"262\",\"name\":\"Mayotte\"},{\"code\":\"52\",\"name\":\"Mexico\"},{\"code\":\"691\",\"name\":\"Micronesia\"},{\"code\":\"1 808\",\"name\":\"Midway Island\"},{\"code\":\"373\",\"name\":\"Moldova\"},{\"code\":\"377\",\"name\":\"Monaco\"},{\"code\":\"976\",\"name\":\"Mongolia\"},{\"code\":\"382\",\"name\":\"Montenegro\"},{\"code\":\"1664\",\"name\":\"Montserrat\"},{\"code\":\"212\",\"name\":\"Morocco\"},{\"code\":\"95\",\"name\":\"Myanmar\"},{\"code\":\"264\",\"name\":\"Namibia\"},{\"code\":\"674\",\"name\":\"Nauru\"},{\"code\":\"977\",\"name\":\"Nepal\"},{\"code\":\"31\",\"name\":\"Netherlands\"},{\"code\":\"599\",\"name\":\"Netherlands Antilles\"},{\"code\":\"1 869\",\"name\":\"Nevis\"},{\"code\":\"687\",\"name\":\"New Caledonia\"},{\"code\":\"64\",\"name\":\"New Zealand\"},{\"code\":\"505\",\"name\":\"Nicaragua\"},{\"code\":\"227\",\"name\":\"Niger\"},{\"code\":\"234\",\"name\":\"Nigeria\"},{\"code\":\"683\",\"name\":\"Niue\"},{\"code\":\"672\",\"name\":\"Norfolk Island\"},{\"code\":\"850\",\"name\":\"North Korea\"},{\"code\":\"1 670\",\"name\":\"Northern Mariana Islands\"},{\"code\":\"47\",\"name\":\"Norway\"},{\"code\":\"968\",\"name\":\"Oman\"},{\"code\":\"92\",\"name\":\"Pakistan\"},{\"code\":\"680\",\"name\":\"Palau\"},{\"code\":\"970\",\"name\":\"Palestinian Territory\"},{\"code\":\"507\",\"name\":\"Panama\"},{\"code\":\"675\",\"name\":\"Papua New Guinea\"},{\"code\":\"595\",\"name\":\"Paraguay\"},{\"code\":\"51\",\"name\":\"Peru\"},{\"code\":\"63\",\"name\":\"Philippines\"},{\"code\":\"48\",\"name\":\"Poland\"},{\"code\":\"351\",\"name\":\"Portugal\"},{\"code\":\"1 787\",\"name\":\"Puerto Rico\"},{\"code\":\"974\",\"name\":\"Qatar\"},{\"code\":\"262\",\"name\":\"Reunion\"},{\"code\":\"40\",\"name\":\"Romania\"},{\"code\":\"7\",\"name\":\"Russia\"},{\"code\":\"250\",\"name\":\"Rwanda\"},{\"code\":\"685\",\"name\":\"Samoa\"},{\"code\":\"378\",\"name\":\"San Marino\"},{\"code\":\"966\",\"name\":\"Saudi Arabia\"},{\"code\":\"221\",\"name\":\"Senegal\"},{\"code\":\"381\",\"name\":\"Serbia\"},{\"code\":\"248\",\"name\":\"Seychelles\"},{\"code\":\"232\",\"name\":\"Sierra Leone\"},{\"code\":\"65\",\"name\":\"Singapore\"},{\"code\":\"421\",\"name\":\"Slovakia\"},{\"code\":\"386\",\"name\":\"Slovenia\"},{\"code\":\"677\",\"name\":\"Solomon Islands\"},{\"code\":\"27\",\"name\":\"South Africa\"},{\"code\":\"500\",\"name\":\"South Georgia and the South Sandwich Islands\"},{\"code\":\"82\",\"name\":\"South Korea\"},{\"code\":\"34\",\"name\":\"Spain\"},{\"code\":\"94\",\"name\":\"Sri Lanka\"},{\"code\":\"249\",\"name\":\"Sudan\"},{\"code\":\"597\",\"name\":\"Suriname\"},{\"code\":\"268\",\"name\":\"Swaziland\"},{\"code\":\"46\",\"name\":\"Sweden\"},{\"code\":\"41\",\"name\":\"Switzerland\"},{\"code\":\"963\",\"name\":\"Syria\"},{\"code\":\"886\",\"name\":\"Taiwan\"},{\"code\":\"992\",\"name\":\"Tajikistan\"},{\"code\":\"255\",\"name\":\"Tanzania\"},{\"code\":\"66\",\"name\":\"Thailand\"},{\"code\":\"670\",\"name\":\"Timor Leste\"},{\"code\":\"228\",\"name\":\"Togo\"},{\"code\":\"690\",\"name\":\"Tokelau\"},{\"code\":\"676\",\"name\":\"Tonga\"},{\"code\":\"1 868\",\"name\":\"Trinidad and Tobago\"},{\"code\":\"216\",\"name\":\"Tunisia\"},{\"code\":\"90\",\"name\":\"Turkey\"},{\"code\":\"993\",\"name\":\"Turkmenistan\"},{\"code\":\"1 649\",\"name\":\"Turks and Caicos Islands\"},{\"code\":\"688\",\"name\":\"Tuvalu\"},{\"code\":\"1 340\",\"name\":\"U.S. Virgin Islands\"},{\"code\":\"256\",\"name\":\"Uganda\"},{\"code\":\"380\",\"name\":\"Ukraine\"},{\"code\":\"971\",\"name\":\"United Arab Emirates\"},{\"code\":\"44\",\"name\":\"United Kingdom\"},{\"code\":\"1\",\"name\":\"United States\"},{\"code\":\"598\",\"name\":\"Uruguay\"},{\"code\":\"998\",\"name\":\"Uzbekistan\"},{\"code\":\"678\",\"name\":\"Vanuatu\"},{\"code\":\"58\",\"name\":\"Venezuela\"},{\"code\":\"84\",\"name\":\"Vietnam\"},{\"code\":\"1 808\",\"name\":\"Wake Island\"},{\"code\":\"681\",\"name\":\"Wallis and Futuna\"},{\"code\":\"967\",\"name\":\"Yemen\"},{\"code\":\"260\",\"name\":\"Zambia\"},{\"code\":\"255\",\"name\":\"Zanzibar\"},{\"code\":\"263\",\"name\":\"Zimbabwe\"}]");
    /***/
  },

  /***/
  "./src/app/services/api-service.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/api-service.service.ts ***!
    \*************************************************/

  /*! exports provided: ApiServiceService */

  /***/
  function srcAppServicesApiServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiServiceService", function () {
      return ApiServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ApiServiceService = /*#__PURE__*/function () {
      function ApiServiceService(http, router) {
        _classCallCheck(this, ApiServiceService);

        this.http = http;
        this.router = router;
        this.URL = "http://localhost:4000/";
      }

      _createClass(ApiServiceService, [{
        key: "sendMail",
        value: function sendMail(Data) {
          return this.http.post('envio', Data);
        }
      }]);

      return ApiServiceService;
    }();

    ApiServiceService.ɵfac = function ApiServiceService_Factory(t) {
      return new (t || ApiServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ApiServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiServiceService,
      factory: ApiServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.url = "http://localhost:4000";
      }
      /* Solicitus al servidor */


      _createClass(AuthService, [{
        key: "registro",
        value: function registro(user) {
          return this.http.post(this.url + '/new', user);
          /* retornar al sercio de la url un usuario que se va a recibir */
        }
      }, {
        key: "inicio",
        value: function inicio(user) {
          return this.http.post(this.url + '/login', user);
        }
        /* comprobar de manera simple si el local storage posee un dato llamado token para la navegacion en las rutas privadas */

      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return !!localStorage.getItem('token');
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "cerrarS",
        value: function cerrarS() {
          localStorage.removeItem('token');
          localStorage.removeItem('id');
          this.router.navigate(['/inicio-sesion']);
          console.log('Cerrar Sesion');
        }
      }, {
        key: "private",
        value: function _private() {
          return this.http.get(this.url + '/private');
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(http, router) {
        _classCallCheck(this, DataService);

        this.http = http;
        this.router = router;
        this.url = "http://localhost:4000";
      }

      _createClass(DataService, [{
        key: "findById",
        value: function findById(id) {
          return this.http.get(this.url + '/findById/' + id);
        }
      }, {
        key: "upgradeData",
        value: function upgradeData(Id, nuevosDatos1) {
          var params = JSON.stringify(nuevosDatos1);
          /* convertir datos en un json */

          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-type': 'application/json'
            })
          };
          /* Se crea una contante la cual sirve para indicar que la informacion que se enviara es de tipo json */

          return this.http.put(this.url + '/actualizar/' + Id, params, // se indica que son datos en forma de json
          options // se indica que son datos en forma de json
          ).pipe(function (res) {
            return res;
          });
          /* se trae el metodo put, se crea la ruta mas su id */
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/token.service.ts ***!
    \*******************************************/

  /*! exports provided: TokenService */

  /***/
  function srcAppServicesTokenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenService", function () {
      return TokenService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");

    var TokenService = /*#__PURE__*/function () {
      function TokenService(auth) {
        _classCallCheck(this, TokenService);

        this.auth = auth;
      }
      /* Añadir cabezaras en cada peticion */


      _createClass(TokenService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var tokenR = req.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(this.auth.getToken())
            }
          });
          return next.handle(tokenR);
        }
      }]);

      return TokenService;
    }();

    TokenService.ɵfac = function TokenService_Factory(t) {
      return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenService,
      factory: TokenService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/juandavid/Desktop/prueba/test/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map