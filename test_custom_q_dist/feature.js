/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./feature.js":
/*!********************!*\
  !*** ./feature.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feature_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature/index */ \"./feature/index.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ \"../scss/main.scss\");\n\n\n/*global LearnosityAmd*/\n\nLearnosityAmd.define([], function () {\n  return {\n    Feature: _feature_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQTs7QUFDQUMsYUFBYSxDQUFDQyxNQUFkLENBQXFCLEVBQXJCLEVBQXlCLFlBQVk7QUFDakMsU0FBTztBQUNIRixJQUFBQSxPQUFPLEVBQVBBLHNEQUFPQTtBQURKLEdBQVA7QUFHSCxDQUpEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmVhdHVyZS5qcz8xOTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGZWF0dXJlIGZyb20gJy4vZmVhdHVyZS9pbmRleCc7XG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuLypnbG9iYWwgTGVhcm5vc2l0eUFtZCovXG5MZWFybm9zaXR5QW1kLmRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIEZlYXR1cmVcbiAgICB9O1xufSk7XG4iXSwibmFtZXMiOlsiRmVhdHVyZSIsIkxlYXJub3NpdHlBbWQiLCJkZWZpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./feature.js\n");

/***/ }),

/***/ "./feature/constants.js":
/*!******************************!*\
  !*** ./feature/constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PREFIX\": () => (/* binding */ PREFIX)\n/* harmony export */ });\n/**\n * When creating a Learnosity Custom Question, it’s important to prefix the CSS class names being used inside\n * your custom Question UI.\n * You should avoid using a generic class name like `.btn`.\n * Instead, you should add a prefix to it like `.company-name-my-custom-question-btn`\n * to avoid CSS conflict with the host page and the CSS used by the Learnosity API.\n */\nvar PREFIX = 'lrn-custom-feature';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlL2NvbnN0YW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxNQUFNLEdBQUcsb0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mZWF0dXJlL2NvbnN0YW50cy5qcz9mNjQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2hlbiBjcmVhdGluZyBhIExlYXJub3NpdHkgQ3VzdG9tIFF1ZXN0aW9uLCBpdOKAmXMgaW1wb3J0YW50IHRvIHByZWZpeCB0aGUgQ1NTIGNsYXNzIG5hbWVzIGJlaW5nIHVzZWQgaW5zaWRlXG4gKiB5b3VyIGN1c3RvbSBRdWVzdGlvbiBVSS5cbiAqIFlvdSBzaG91bGQgYXZvaWQgdXNpbmcgYSBnZW5lcmljIGNsYXNzIG5hbWUgbGlrZSBgLmJ0bmAuXG4gKiBJbnN0ZWFkLCB5b3Ugc2hvdWxkIGFkZCBhIHByZWZpeCB0byBpdCBsaWtlIGAuY29tcGFueS1uYW1lLW15LWN1c3RvbS1xdWVzdGlvbi1idG5gXG4gKiB0byBhdm9pZCBDU1MgY29uZmxpY3Qgd2l0aCB0aGUgaG9zdCBwYWdlIGFuZCB0aGUgQ1NTIHVzZWQgYnkgdGhlIExlYXJub3NpdHkgQVBJLlxuICovXG5leHBvcnQgY29uc3QgUFJFRklYID0gJ2xybi1jdXN0b20tZmVhdHVyZSc7XG4iXSwibmFtZXMiOlsiUFJFRklYIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./feature/constants.js\n");

/***/ }),

/***/ "./feature/index.js":
/*!**************************!*\
  !*** ./feature/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Feature)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./feature/constants.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Feature = /*#__PURE__*/function () {\n  function Feature(init, lrnUtils) {\n    var _this = this;\n\n    _classCallCheck(this, Feature);\n\n    this.init = init;\n    this.events = init.events;\n    this.lrnUtils = lrnUtils;\n    this.el = init.$el.get(0);\n    this.render().then(function () {\n      _this.registerPublicMethods();\n\n      if (init.state === 'review') {\n        /**\n         * below, we call the disable public method on the custom feature to display it in a read-only mode\n         * to learners and/or instructors viewing their completed assessment results (via Reports API or Items API in \"review\" mode).\n         * (Please see this.registerPublicMethods below for more detials about the .disable() method, including an example implementation)\n         */\n        init.getFacade().disable();\n      }\n\n      init.events.trigger('ready');\n    });\n  }\n\n  _createClass(Feature, [{\n    key: \"render\",\n    value: function render() {\n      var el = this.el,\n          init = this.init;\n      var feature = init.feature; // TODO: Requires implementation\n\n      el.innerHTML = \"\\n                <div class=\\\"lrn_feature_wrapper \".concat(_constants__WEBPACK_IMPORTED_MODULE_0__.PREFIX, \"\\\">\\n                    <div id=\\\"pulled_metadata\\\" hidden></div>\\n                </div>            \\n        \");\n      return Promise.all([]).then(function () {\n        // TODO - Requires implementation\n\n        /**  The logic to render the UI of your custom question should go here. \n         * \n         * For example this might be a call to a function or instantiation of a class to render your UI component(s).\n         * \n         * \n         */\n\n        /** Example implementation below that renders a simple decorative text display\n         *  - you may replace the following lines below with your own code */\n        // create a simple h1\n        var myFeatureHeading = document.createElement('h4');\n        myFeatureHeading.classList.add('my-custom-feature-heading'); // add the text given for our custom feature JSON's example_custom_property in feature.json\n\n        myFeatureHeading.innerHTML = feature.my_metadata; // append the h1 to the custom feature wrapper hook element\n\n        el.querySelector('.lrn_feature_wrapper').appendChild(myFeatureHeading);\n        el.querySelector('#pulled_metadata').innerHTML = \"test metadata\";\n      });\n    }\n    /**\n     * Add public methods to the created feature instance that is accessible during runtime\n     *\n     * Example: questionsApp.feature('my-custom-feature-feature-id').myNewMethod();\n     * \n     */\n\n  }, {\n    key: \"registerPublicMethods\",\n    value: function registerPublicMethods() {\n      var init = this.init; // Attach the methods you want on this object\n\n      var facade = init.getFacade();\n\n      facade.disable = function () {// TODO: Requires implementation\n\n        /**\n         * The purpose of this method is to prevent learner interaction with your question's UI.\n         * \n         * If you plan to display your custom feature in \"review\" state, then you may want to implement this\n         * method to prevent a learner or instructor who is reviewing their completed results from being able to interact with the feature UI.\n         */\n        // EXAMPLE implementation\n        // document.getElementById('my-feature').setAttribute('disabled', true)\n      };\n\n      facade.enable = function () {\n        /**\n         * The purpose of this method is to re-enable learner interaction with your feature's UI\n         * after it has been previously disabled.\n         *               \n         * (For example, you plan to temporarily disable the feature UI for a student taking the assessment until they complete another task like spend a set time reading the instructions.)\n         */\n        // EXAMPLE implementation\n        // document.getElementById('my-feature').removeAttribute('disabled')\n      };\n    }\n  }]);\n\n  return Feature;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQztBQUNqQixtQkFBWUMsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEI7QUFBQTs7QUFBQTs7QUFDeEIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0UsTUFBTCxHQUFjRixJQUFJLENBQUNFLE1BQW5CO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLRSxFQUFMLEdBQVVILElBQUksQ0FBQ0ksR0FBTCxDQUFTQyxHQUFULENBQWEsQ0FBYixDQUFWO0FBRUEsU0FBS0MsTUFBTCxHQUFjQyxJQUFkLENBQW1CLFlBQUs7QUFDcEIsV0FBSSxDQUFDQyxxQkFBTDs7QUFFQSxVQUFJUixJQUFJLENBQUNTLEtBQUwsS0FBZSxRQUFuQixFQUE2QjtBQUU1QjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ2FULFFBQUFBLElBQUksQ0FBQ1UsU0FBTCxHQUFpQkMsT0FBakI7QUFDSDs7QUFHRVgsTUFBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVlVLE9BQVosQ0FBb0IsT0FBcEI7QUFDSCxLQWZEO0FBZ0JIOzs7O1dBRUQsa0JBQVM7QUFDTCxVQUFRVCxFQUFSLEdBQXFCLElBQXJCLENBQVFBLEVBQVI7QUFBQSxVQUFZSCxJQUFaLEdBQXFCLElBQXJCLENBQVlBLElBQVo7QUFDQSxVQUFRYSxPQUFSLEdBQW9CYixJQUFwQixDQUFRYSxPQUFSLENBRkssQ0FJTDs7QUFDQVYsTUFBQUEsRUFBRSxDQUFDVyxTQUFILGdFQUMwQ2hCLDhDQUQxQztBQU1BLGFBQU9pQixPQUFPLENBQUNDLEdBQVIsQ0FBWSxFQUFaLEVBQWdCVCxJQUFoQixDQUFxQixZQUFNO0FBQzVCOztBQUNGO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTtBQUNaO0FBRWdCO0FBQ0EsWUFBTVUsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUF6QjtBQUNBRixRQUFBQSxnQkFBZ0IsQ0FBQ0csU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLDJCQUEvQixFQWQwQixDQWUxQjs7QUFDQUosUUFBQUEsZ0JBQWdCLENBQUNILFNBQWpCLEdBQTZCRCxPQUFPLENBQUNTLFdBQXJDLENBaEIwQixDQWlCMUI7O0FBQ0FuQixRQUFBQSxFQUFFLENBQUNvQixhQUFILENBQWlCLHNCQUFqQixFQUF5Q0MsV0FBekMsQ0FBcURQLGdCQUFyRDtBQUNBZCxRQUFBQSxFQUFFLENBQUNvQixhQUFILENBQWlCLGtCQUFqQixFQUFxQ1QsU0FBckMsR0FBaUQsZUFBakQ7QUFDUCxPQXBCTSxDQUFQO0FBcUJIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksaUNBQXdCO0FBQ3BCLFVBQVFkLElBQVIsR0FBaUIsSUFBakIsQ0FBUUEsSUFBUixDQURvQixDQUVwQjs7QUFDQSxVQUFNeUIsTUFBTSxHQUFHekIsSUFBSSxDQUFDVSxTQUFMLEVBQWY7O0FBRUFlLE1BQUFBLE1BQU0sQ0FBQ2QsT0FBUCxHQUFpQixZQUFNLENBQ25COztBQUNBO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVZO0FBQ0E7QUFFSCxPQVpEOztBQWFBYyxNQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQjtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFWTtBQUNBO0FBQ0gsT0FWRDtBQVdIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmVhdHVyZS9pbmRleC5qcz9iNTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBSRUZJWCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmVhdHVyZSB7XG4gICAgY29uc3RydWN0b3IoaW5pdCwgbHJuVXRpbHMpIHtcbiAgICAgICAgdGhpcy5pbml0ID0gaW5pdDtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBpbml0LmV2ZW50cztcbiAgICAgICAgdGhpcy5scm5VdGlscyA9IGxyblV0aWxzO1xuICAgICAgICB0aGlzLmVsID0gaW5pdC4kZWwuZ2V0KDApO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCkudGhlbigoKSA9PntcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQdWJsaWNNZXRob2RzKCk7XG5cbiAgICAgICAgICAgIGlmIChpbml0LnN0YXRlID09PSAncmV2aWV3Jykge1xuXG4gICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICogYmVsb3csIHdlIGNhbGwgdGhlIGRpc2FibGUgcHVibGljIG1ldGhvZCBvbiB0aGUgY3VzdG9tIGZlYXR1cmUgdG8gZGlzcGxheSBpdCBpbiBhIHJlYWQtb25seSBtb2RlXG4gICAgICAgICAgICAgICogdG8gbGVhcm5lcnMgYW5kL29yIGluc3RydWN0b3JzIHZpZXdpbmcgdGhlaXIgY29tcGxldGVkIGFzc2Vzc21lbnQgcmVzdWx0cyAodmlhIFJlcG9ydHMgQVBJIG9yIEl0ZW1zIEFQSSBpbiBcInJldmlld1wiIG1vZGUpLlxuICAgICAgICAgICAgICAqIChQbGVhc2Ugc2VlIHRoaXMucmVnaXN0ZXJQdWJsaWNNZXRob2RzIGJlbG93IGZvciBtb3JlIGRldGlhbHMgYWJvdXQgdGhlIC5kaXNhYmxlKCkgbWV0aG9kLCBpbmNsdWRpbmcgYW4gZXhhbXBsZSBpbXBsZW1lbnRhdGlvbilcbiAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICBpbml0LmdldEZhY2FkZSgpLmRpc2FibGUoKTtcbiAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpbml0LmV2ZW50cy50cmlnZ2VyKCdyZWFkeScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZWwsIGluaXQgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgZmVhdHVyZSB9ID0gaW5pdDtcblxuICAgICAgICAvLyBUT0RPOiBSZXF1aXJlcyBpbXBsZW1lbnRhdGlvblxuICAgICAgICBlbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxybl9mZWF0dXJlX3dyYXBwZXIgJHtQUkVGSVh9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwdWxsZWRfbWV0YWRhdGFcIiBoaWRkZW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXG4gICAgICAgIGA7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtdKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgLy8gVE9ETyAtIFJlcXVpcmVzIGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgICAvKiogIFRoZSBsb2dpYyB0byByZW5kZXIgdGhlIFVJIG9mIHlvdXIgY3VzdG9tIHF1ZXN0aW9uIHNob3VsZCBnbyBoZXJlLiBcbiAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICogRm9yIGV4YW1wbGUgdGhpcyBtaWdodCBiZSBhIGNhbGwgdG8gYSBmdW5jdGlvbiBvciBpbnN0YW50aWF0aW9uIG9mIGEgY2xhc3MgdG8gcmVuZGVyIHlvdXIgVUkgY29tcG9uZW50KHMpLlxuICAgICAgICAgICAgICogXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqLyBcblxuICAgICAgICAgICAgLyoqIEV4YW1wbGUgaW1wbGVtZW50YXRpb24gYmVsb3cgdGhhdCByZW5kZXJzIGEgc2ltcGxlIGRlY29yYXRpdmUgdGV4dCBkaXNwbGF5XG4gICAgICAgICAgICAgKiAgLSB5b3UgbWF5IHJlcGxhY2UgdGhlIGZvbGxvd2luZyBsaW5lcyBiZWxvdyB3aXRoIHlvdXIgb3duIGNvZGUgKi9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHNpbXBsZSBoMVxuICAgICAgICAgICAgICAgIGNvbnN0IG15RmVhdHVyZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXG4gICAgICAgICAgICAgICAgbXlGZWF0dXJlSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdteS1jdXN0b20tZmVhdHVyZS1oZWFkaW5nJylcbiAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHRleHQgZ2l2ZW4gZm9yIG91ciBjdXN0b20gZmVhdHVyZSBKU09OJ3MgZXhhbXBsZV9jdXN0b21fcHJvcGVydHkgaW4gZmVhdHVyZS5qc29uXG4gICAgICAgICAgICAgICAgbXlGZWF0dXJlSGVhZGluZy5pbm5lckhUTUwgPSBmZWF0dXJlLm15X21ldGFkYXRhO1xuICAgICAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgaDEgdG8gdGhlIGN1c3RvbSBmZWF0dXJlIHdyYXBwZXIgaG9vayBlbGVtZW50XG4gICAgICAgICAgICAgICAgZWwucXVlcnlTZWxlY3RvcignLmxybl9mZWF0dXJlX3dyYXBwZXInKS5hcHBlbmRDaGlsZChteUZlYXR1cmVIZWFkaW5nKVxuICAgICAgICAgICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJyNwdWxsZWRfbWV0YWRhdGEnKS5pbm5lckhUTUwgPSBcInRlc3QgbWV0YWRhdGFcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcHVibGljIG1ldGhvZHMgdG8gdGhlIGNyZWF0ZWQgZmVhdHVyZSBpbnN0YW5jZSB0aGF0IGlzIGFjY2Vzc2libGUgZHVyaW5nIHJ1bnRpbWVcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHF1ZXN0aW9uc0FwcC5mZWF0dXJlKCdteS1jdXN0b20tZmVhdHVyZS1mZWF0dXJlLWlkJykubXlOZXdNZXRob2QoKTtcbiAgICAgKiBcbiAgICAgKi9cbiAgICByZWdpc3RlclB1YmxpY01ldGhvZHMoKSB7XG4gICAgICAgIGNvbnN0IHsgaW5pdCB9ID0gdGhpcztcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBtZXRob2RzIHlvdSB3YW50IG9uIHRoaXMgb2JqZWN0XG4gICAgICAgIGNvbnN0IGZhY2FkZSA9IGluaXQuZ2V0RmFjYWRlKCk7XG5cbiAgICAgICAgZmFjYWRlLmRpc2FibGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBSZXF1aXJlcyBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgcHVycG9zZSBvZiB0aGlzIG1ldGhvZCBpcyB0byBwcmV2ZW50IGxlYXJuZXIgaW50ZXJhY3Rpb24gd2l0aCB5b3VyIHF1ZXN0aW9uJ3MgVUkuXG4gICAgICAgICAgICAgKiBcbiAgICAgICAgICAgICAqIElmIHlvdSBwbGFuIHRvIGRpc3BsYXkgeW91ciBjdXN0b20gZmVhdHVyZSBpbiBcInJldmlld1wiIHN0YXRlLCB0aGVuIHlvdSBtYXkgd2FudCB0byBpbXBsZW1lbnQgdGhpc1xuICAgICAgICAgICAgICogbWV0aG9kIHRvIHByZXZlbnQgYSBsZWFybmVyIG9yIGluc3RydWN0b3Igd2hvIGlzIHJldmlld2luZyB0aGVpciBjb21wbGV0ZWQgcmVzdWx0cyBmcm9tIGJlaW5nIGFibGUgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgZmVhdHVyZSBVSS5cbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvLyBFWEFNUExFIGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktZmVhdHVyZScpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKVxuXG4gICAgICAgIH07XG4gICAgICAgIGZhY2FkZS5lbmFibGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBwdXJwb3NlIG9mIHRoaXMgbWV0aG9kIGlzIHRvIHJlLWVuYWJsZSBsZWFybmVyIGludGVyYWN0aW9uIHdpdGggeW91ciBmZWF0dXJlJ3MgVUlcbiAgICAgICAgICAgICAqIGFmdGVyIGl0IGhhcyBiZWVuIHByZXZpb3VzbHkgZGlzYWJsZWQuXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICogKEZvciBleGFtcGxlLCB5b3UgcGxhbiB0byB0ZW1wb3JhcmlseSBkaXNhYmxlIHRoZSBmZWF0dXJlIFVJIGZvciBhIHN0dWRlbnQgdGFraW5nIHRoZSBhc3Nlc3NtZW50IHVudGlsIHRoZXkgY29tcGxldGUgYW5vdGhlciB0YXNrIGxpa2Ugc3BlbmQgYSBzZXQgdGltZSByZWFkaW5nIHRoZSBpbnN0cnVjdGlvbnMuKVxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8vIEVYQU1QTEUgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1mZWF0dXJlJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXG4gICAgICAgIH07XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlBSRUZJWCIsIkZlYXR1cmUiLCJpbml0IiwibHJuVXRpbHMiLCJldmVudHMiLCJlbCIsIiRlbCIsImdldCIsInJlbmRlciIsInRoZW4iLCJyZWdpc3RlclB1YmxpY01ldGhvZHMiLCJzdGF0ZSIsImdldEZhY2FkZSIsImRpc2FibGUiLCJ0cmlnZ2VyIiwiZmVhdHVyZSIsImlubmVySFRNTCIsIlByb21pc2UiLCJhbGwiLCJteUZlYXR1cmVIZWFkaW5nIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibXlfbWV0YWRhdGEiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJmYWNhZGUiLCJlbmFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./feature/index.js\n");

/***/ }),

/***/ "../scss/main.scss":
/*!*************************!*\
  !*** ../scss/main.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3Njc3MvbWFpbi5zY3NzP2U1MTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./feature.js");
/******/ 	
/******/ })()
;