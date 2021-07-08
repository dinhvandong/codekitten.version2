var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["player"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/player.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/player.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player_stage-only_3WHZN {\n    width: calc(480px + 1rem);\n}\n\n.player_editor_wkTja {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n}\n\n.player_stage-only_3WHZN * {\n    box-sizing: border-box;\n}\n", ""]);

// exports
exports.locals = {
	"stage-only": "player_stage-only_3WHZN",
	"stageOnly": "player_stage-only_3WHZN",
	"editor": "player_editor_wkTja"
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, AppStateHOC, setAppElement, guiReducers, guiInitialState, guiMiddleware, initEmbedded, initPlayer, initFullScreen, initLocale, localesInitialState, remixProject, setFullScreen, setPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guiReducers", function() { return guiReducers; });
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppStateHOC", function() { return _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _reducers_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/gui */ "./src/reducers/gui.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guiInitialState", function() { return _reducers_gui__WEBPACK_IMPORTED_MODULE_2__["guiInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guiMiddleware", function() { return _reducers_gui__WEBPACK_IMPORTED_MODULE_2__["guiMiddleware"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initEmbedded", function() { return _reducers_gui__WEBPACK_IMPORTED_MODULE_2__["initEmbedded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initPlayer", function() { return _reducers_gui__WEBPACK_IMPORTED_MODULE_2__["initPlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initFullScreen", function() { return _reducers_gui__WEBPACK_IMPORTED_MODULE_2__["initFullScreen"]; });

/* harmony import */ var _reducers_locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/locales */ "./src/reducers/locales.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initLocale", function() { return _reducers_locales__WEBPACK_IMPORTED_MODULE_3__["initLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "localesInitialState", function() { return _reducers_locales__WEBPACK_IMPORTED_MODULE_3__["localesInitialState"]; });

/* harmony import */ var scratch_paint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scratch-paint */ "./node_modules/scratch-paint/src/index.js");
/* harmony import */ var _reducers_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/mode */ "./src/reducers/mode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFullScreen", function() { return _reducers_mode__WEBPACK_IMPORTED_MODULE_5__["setFullScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPlayer", function() { return _reducers_mode__WEBPACK_IMPORTED_MODULE_5__["setPlayer"]; });

/* harmony import */ var _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/project-state */ "./src/reducers/project-state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remixProject", function() { return _reducers_project_state__WEBPACK_IMPORTED_MODULE_6__["remixProject"]; });

/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAppElement", function() { return react_modal__WEBPACK_IMPORTED_MODULE_7__["setAppElement"]; });

 //import Login from './containers/login';








var guiReducers = {
  locales: _reducers_locales__WEBPACK_IMPORTED_MODULE_3__["default"],
  scratchGui: _reducers_gui__WEBPACK_IMPORTED_MODULE_2__["default"],
  scratchPaint: scratch_paint__WEBPACK_IMPORTED_MODULE_4__["ScratchPaintReducer"]
};


/***/ }),

/***/ "./src/playground/player.css":
/*!***********************************!*\
  !*** ./src/playground/player.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./player.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/player.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/player.jsx":
/*!***********************************!*\
  !*** ./src/playground/player.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/box/box.jsx */ "./src/components/box/box.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _reducers_mode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/mode */ "./src/reducers/mode.js");
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./player.css */ "./src/playground/player.css");
/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_player_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }













if (false) {}




var Player = function Player(_ref) {
  var isPlayerOnly = _ref.isPlayerOnly,
      onSeeInside = _ref.onSeeInside,
      projectId = _ref.projectId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_box_box_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(isPlayerOnly ? _player_css__WEBPACK_IMPORTED_MODULE_11___default.a.stageOnly : _player_css__WEBPACK_IMPORTED_MODULE_11___default.a.editor)
  }, isPlayerOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: onSeeInside
  }, 'See inside'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    canEditTitle: true,
    enableCommunity: true,
    isPlayerOnly: isPlayerOnly,
    projectId: projectId
  }));
};

Player.propTypes = {
  isPlayerOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSeeInside: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    isPlayerOnly: state.scratchGui.mode.isPlayerOnly,
    showMyProject: state.scratchGui.mode.showMyProject
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSeeInside: function onSeeInside() {
      return dispatch(Object(_reducers_mode__WEBPACK_IMPORTED_MODULE_10__["setPlayer"])(false));
    }
  };
};

var ConnectedPlayer = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Player); // note that redux's 'compose' function is just being used as a general utility to make
// the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
// ability to compose reducers.

var WrappedPlayer = Object(redux__WEBPACK_IMPORTED_MODULE_5__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__["default"])(ConnectedPlayer);
var appTarget = document.createElement('div');
document.body.appendChild(appTarget);
react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedPlayer, {
  isPlayerOnly: true
}), appTarget);

/***/ })

},[["./src/playground/player.jsx","lib.min"]]]);
//# sourceMappingURL=player.js.map