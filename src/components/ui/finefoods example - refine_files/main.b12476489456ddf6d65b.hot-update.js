webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pankod_refine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pankod/refine */ "./node_modules/@pankod/refine/dist/refine.esm.js");
/* harmony import */ var _pankod_refine_simple_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pankod/refine-simple-rest */ "./node_modules/@pankod/refine-simple-rest/dist/refine-simple-rest.esm.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module '@pankod/refine/node_modules/antd/lib/locale/de_DE'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var authProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! authProvider */ "./src/authProvider.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styles_antd_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/antd.less */ "./src/styles/antd.less");
/* harmony import */ var styles_antd_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_antd_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs_locale_de__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs/locale/de */ "./node_modules/dayjs/locale/de.js");
/* harmony import */ var dayjs_locale_de__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_de__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/dashboard */ "./src/pages/dashboard/index.tsx");
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login */ "./src/pages/login/index.tsx");
/* harmony import */ var _pages_orders__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/orders */ "./src/pages/orders/index.ts");
/* harmony import */ var _pages_users__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/users */ "./src/pages/users/index.ts");
/* harmony import */ var _pages_couriers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/couriers */ "./src/pages/couriers/index.ts");
/* harmony import */ var _pages_products__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/products */ "./src/pages/products/index.ts");
/* harmony import */ var _pages_stores__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/stores */ "./src/pages/stores/index.ts");
/* harmony import */ var _pages_categories__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/categories */ "./src/pages/categories/index.ts");
/* harmony import */ var _pages_reviews__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/reviews */ "./src/pages/reviews/index.ts");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components */ "./src/components/index.ts");
/* harmony import */ var components_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/icons */ "./src/components/icons/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/seanmodd/Dev/dashboardRefine/examples/fineFoods/src/App.tsx",
    _this = undefined,
    _s = __webpack_require__.$Refresh$.signature();



 // import de_DE from "@pankod/refine/node_modules/antd/lib/locale/de_DE";




















var App = function App() {
  _s();

  var API_URL = "https://api.finefoods.refine.dev";
  var dataProvider = Object(_pankod_refine_simple_rest__WEBPACK_IMPORTED_MODULE_2__["default"])(API_URL);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_17__["useTranslation"])(),
      t = _useTranslation.t,
      i18n = _useTranslation.i18n;

  var i18nProvider = {
    translate: function translate(key, params) {
      return t(key, params);
    },
    changeLocale: function changeLocale(lang) {
      return i18n.changeLanguage(lang);
    },
    getLocale: function getLocale() {
      return i18n.language;
    }
  };
  var locale = i18nProvider.getLocale();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (locale === "de") {
      dayjs__WEBPACK_IMPORTED_MODULE_5___default.a.locale("de");
    } else {
      dayjs__WEBPACK_IMPORTED_MODULE_5___default.a.locale("en");
    }
  }, [locale]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Refine"], {
    dataProvider: dataProvider,
    authProvider: authProvider__WEBPACK_IMPORTED_MODULE_4__["authProvider"],
    i18nProvider: i18nProvider,
    Header: components__WEBPACK_IMPORTED_MODULE_18__["Header"],
    Title: components__WEBPACK_IMPORTED_MODULE_18__["Title"],
    DashboardPage: _pages_dashboard__WEBPACK_IMPORTED_MODULE_8__["DashboardPage"],
    LoginPage: _pages_login__WEBPACK_IMPORTED_MODULE_9__["LoginPage"],
    syncWithLocation: true,
    warnWhenUnsavedChanges: true,
    configProviderProps: {
      locale: locale === "de" ? !(function webpackMissingModule() { var e = new Error("Cannot find module '@pankod/refine/node_modules/antd/lib/locale/de_DE'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) : undefined
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
      name: "orders",
      list: _pages_orders__WEBPACK_IMPORTED_MODULE_10__["OrderList"],
      show: _pages_orders__WEBPACK_IMPORTED_MODULE_10__["OrderShow"],
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Icons"].ShoppingOutlined, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 23
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
      name: "users",
      list: _pages_users__WEBPACK_IMPORTED_MODULE_11__["UserList"],
      show: _pages_users__WEBPACK_IMPORTED_MODULE_11__["UserShow"],
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Icons"].UsergroupAddOutlined, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 23
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
      name: "products",
      list: _pages_products__WEBPACK_IMPORTED_MODULE_13__["ProductList"],
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(components_icons__WEBPACK_IMPORTED_MODULE_19__["PizzaIcon"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 64
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
      name: "stores",
      list: _pages_stores__WEBPACK_IMPORTED_MODULE_14__["StoreList"],
      edit: _pages_stores__WEBPACK_IMPORTED_MODULE_14__["StoreEdit"],
      create: _pages_stores__WEBPACK_IMPORTED_MODULE_14__["StoreCreate"],
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Icons"].ShopOutlined, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 23
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
      name: "categories",
      list: _pages_categories__WEBPACK_IMPORTED_MODULE_15__["CategoryList"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
      name: "couriers",
      list: _pages_couriers__WEBPACK_IMPORTED_MODULE_12__["CourierList"],
      show: _pages_couriers__WEBPACK_IMPORTED_MODULE_12__["CourierShow"],
      create: _pages_couriers__WEBPACK_IMPORTED_MODULE_12__["CouriersCreate"],
      edit: _pages_couriers__WEBPACK_IMPORTED_MODULE_12__["CouriersEdit"],
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(components_icons__WEBPACK_IMPORTED_MODULE_19__["BikeWhiteIcon"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 23
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
      name: "reviews",
      list: _pages_reviews__WEBPACK_IMPORTED_MODULE_16__["ReviewsList"],
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_pankod_refine__WEBPACK_IMPORTED_MODULE_1__["Icons"].StarOutlined, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 23
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, _this);
};

_s(App, "RzwHCHjHBTpbDfNXdxab57D8nH0=", false, function () {
  return [react_i18next__WEBPACK_IMPORTED_MODULE_17__["useTranslation"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.b12476489456ddf6d65b.hot-update.js.map