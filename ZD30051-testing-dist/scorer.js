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

/***/ "./scorer.js":
/*!*******************!*\
  !*** ./scorer.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scorer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scorer/index */ \"./scorer/index.js\");\n/*globals LearnosityAmd*/\n\nLearnosityAmd.define([], function () {\n  return {\n    Scorer: _scorer_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY29yZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBRUFDLGFBQWEsQ0FBQ0MsTUFBZCxDQUFxQixFQUFyQixFQUF5QixZQUFZO0FBQ2pDLFNBQU87QUFDSEYsSUFBQUEsTUFBTSxFQUFOQSxxREFBTUE7QUFESCxHQUFQO0FBR0gsQ0FKRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Njb3Jlci5qcz9mYjhmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFscyBMZWFybm9zaXR5QW1kKi9cbmltcG9ydCBTY29yZXIgZnJvbSAnLi9zY29yZXIvaW5kZXgnO1xuXG5MZWFybm9zaXR5QW1kLmRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFNjb3JlclxuICAgIH07XG59KTtcbiJdLCJuYW1lcyI6WyJTY29yZXIiLCJMZWFybm9zaXR5QW1kIiwiZGVmaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scorer.js\n");

/***/ }),

/***/ "./scorer/index.js":
/*!*************************!*\
  !*** ./scorer/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scorer)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Scorer = /*#__PURE__*/function () {\n  function Scorer(question, response) {\n    _classCallCheck(this, Scorer);\n\n    this.question = question;\n    this.response = response;\n  }\n\n  _createClass(Scorer, [{\n    key: \"getValidResponse\",\n    value: function getValidResponse() {\n      var _this$question, _this$question$valida, _this$question2, _this$question2$valid, _this$question3;\n\n      return ((_this$question = this.question) === null || _this$question === void 0 ? void 0 : (_this$question$valida = _this$question.validation) === null || _this$question$valida === void 0 ? void 0 : _this$question$valida.valid_response) !== undefined ? (_this$question2 = this.question) === null || _this$question2 === void 0 ? void 0 : (_this$question2$valid = _this$question2.validation) === null || _this$question2$valid === void 0 ? void 0 : _this$question2$valid.valid_response : (_this$question3 = this.question) === null || _this$question3 === void 0 ? void 0 : _this$question3.valid_response;\n    }\n  }, {\n    key: \"getAltResponses\",\n    value: function getAltResponses() {\n      var _this$question4, _this$question4$valid, _this$question5, _this$question5$valid, _this$question6;\n\n      return ((_this$question4 = this.question) === null || _this$question4 === void 0 ? void 0 : (_this$question4$valid = _this$question4.validation) === null || _this$question4$valid === void 0 ? void 0 : _this$question4$valid.alt_responses) !== undefined ? (_this$question5 = this.question) === null || _this$question5 === void 0 ? void 0 : (_this$question5$valid = _this$question5.validation) === null || _this$question5$valid === void 0 ? void 0 : _this$question5$valid.alt_responses : (_this$question6 = this.question) === null || _this$question6 === void 0 ? void 0 : _this$question6.alt_responses;\n    }\n  }, {\n    key: \"isValid\",\n    value: function isValid() {\n      var _this$getValidRespons, _this$getAltResponses;\n\n      var question = this.question,\n          response = this.response;\n\n      if (!this.getValidResponse()) {\n        return false;\n      } // Check primary valid response\n\n\n      if (response === this.getValidResponse() || response === ((_this$getValidRespons = this.getValidResponse()) === null || _this$getValidRespons === void 0 ? void 0 : _this$getValidRespons.value)) {\n        return true;\n      } // Check alternative responses\n\n\n      if (((_this$getAltResponses = this.getAltResponses()) === null || _this$getAltResponses === void 0 ? void 0 : _this$getAltResponses.length) > 0) {\n        // TOTO need to do check for .value or not\n        return this.getAltResponses().some(function (alt) {\n          return alt === response || (alt === null || alt === void 0 ? void 0 : alt.value) === response;\n        });\n      }\n\n      return false;\n    }\n  }, {\n    key: \"validateIndividualResponses\",\n    value: function validateIndividualResponses() {\n      return null;\n    }\n  }, {\n    key: \"score\",\n    value: function score() {\n      var question = this.question,\n          response = this.response;\n\n      if (!response) {\n        return 0;\n      }\n\n      if (!this.isValid()) {\n        return 0;\n      } else {\n        var validResponses = [this.getValidResponse() || {}].concat(_toConsumableArray(this.getAltResponses() || []));\n        var matchingResponse = validResponses.find(function (r) {\n          return r === response || (r === null || r === void 0 ? void 0 : r.value) === response;\n        });\n\n        if (matchingResponse) {\n          console.log(\"inside matching response\", matchingResponse);\n\n          if (matchingResponse !== null && matchingResponse !== void 0 && matchingResponse.score) {\n            return matchingResponse.score;\n          } else {\n            return 1;\n          }\n        } else {\n          return 0;\n        }\n      }\n    }\n  }, {\n    key: \"maxScore\",\n    value: function maxScore() {\n      var _this$getValidRespons2;\n\n      return ((_this$getValidRespons2 = this.getValidResponse()) === null || _this$getValidRespons2 === void 0 ? void 0 : _this$getValidRespons2.score) || 1;\n    }\n  }, {\n    key: \"canValidateResponse\",\n    value: function canValidateResponse() {\n      var _this$question7, _this$question7$valid, _this$question7$valid2, _this$question8;\n\n      return !!((_this$question7 = this.question) !== null && _this$question7 !== void 0 && (_this$question7$valid = _this$question7.validation) !== null && _this$question7$valid !== void 0 && (_this$question7$valid2 = _this$question7$valid.valid_response) !== null && _this$question7$valid2 !== void 0 && _this$question7$valid2.value) || !!((_this$question8 = this.question) !== null && _this$question8 !== void 0 && _this$question8.valid_response);\n    }\n  }]);\n\n  return Scorer;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBRkQsTUFFTztBQUNILG1CQUFPLENBQVA7QUFDSDtBQUNKLFNBUEQsTUFPTztBQUNILGlCQUFPLENBQVA7QUFDSDtBQUNKO0FBQ0o7OztXQUVELG9CQUFXO0FBQUE7O0FBQ1AsYUFBTyxnQ0FBS2IsZ0JBQUwsb0ZBQXlCYSxLQUF6QixLQUFrQyxDQUF6QztBQUNIOzs7V0FFRCwrQkFBc0I7QUFBQTs7QUFDbEIsYUFBTyxDQUFDLHFCQUFDLEtBQUtuQixRQUFOLHFFQUFDLGdCQUFlRSxVQUFoQiw0RUFBQyxzQkFBMkJDLGNBQTVCLG1EQUFDLHVCQUEyQ0ksS0FBNUMsQ0FBRCxJQUFzRCxDQUFDLHFCQUFDLEtBQUtQLFFBQU4sNENBQUMsZ0JBQWVHLGNBQWhCLENBQTlEO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY29yZXIvaW5kZXguanM/ZDIxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlciB7XG4gICAgY29uc3RydWN0b3IocXVlc3Rpb24sIHJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBxdWVzdGlvbjtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cblxuICAgIGdldFZhbGlkUmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiAoIHRoaXMucXVlc3Rpb24/LnZhbGlkYXRpb24/LnZhbGlkX3Jlc3BvbnNlICE9PSB1bmRlZmluZWQgKSA/IHRoaXMucXVlc3Rpb24/LnZhbGlkYXRpb24/LnZhbGlkX3Jlc3BvbnNlIDogdGhpcy5xdWVzdGlvbj8udmFsaWRfcmVzcG9uc2VcbiAgICB9XG4gICAgZ2V0QWx0UmVzcG9uc2VzKCkge1xuICAgICAgICByZXR1cm4gKCB0aGlzLnF1ZXN0aW9uPy52YWxpZGF0aW9uPy5hbHRfcmVzcG9uc2VzICE9PSB1bmRlZmluZWQgKSA/IHRoaXMucXVlc3Rpb24/LnZhbGlkYXRpb24/LmFsdF9yZXNwb25zZXMgOiB0aGlzLnF1ZXN0aW9uPy5hbHRfcmVzcG9uc2VzXG4gICAgfVxuXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgY29uc3QgeyBxdWVzdGlvbiwgcmVzcG9uc2UgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCF0aGlzLmdldFZhbGlkUmVzcG9uc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIHByaW1hcnkgdmFsaWQgcmVzcG9uc2VcbiAgICAgICAgaWYgKHJlc3BvbnNlID09PSB0aGlzLmdldFZhbGlkUmVzcG9uc2UoKSB8fCByZXNwb25zZSA9PT0gdGhpcy5nZXRWYWxpZFJlc3BvbnNlKCk/LnZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBhbHRlcm5hdGl2ZSByZXNwb25zZXNcbiAgICAgICAgaWYgKHRoaXMuZ2V0QWx0UmVzcG9uc2VzKCk/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFRPVE8gbmVlZCB0byBkbyBjaGVjayBmb3IgLnZhbHVlIG9yIG5vdFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWx0UmVzcG9uc2VzKCkuc29tZShhbHQgPT4gYWx0ID09PSByZXNwb25zZSB8fCBhbHQ/LnZhbHVlID09PSByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhbGlkYXRlSW5kaXZpZHVhbFJlc3BvbnNlcygpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2NvcmUoKSB7XG4gICAgICAgIGNvbnN0IHsgcXVlc3Rpb24sIHJlc3BvbnNlIH0gPSB0aGlzO1xuICAgICAgICBpZighcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZFJlc3BvbnNlcyA9IFtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFZhbGlkUmVzcG9uc2UoKSB8fCB7fSxcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5nZXRBbHRSZXNwb25zZXMoKSB8fCBbXSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb25zdCBtYXRjaGluZ1Jlc3BvbnNlID0gdmFsaWRSZXNwb25zZXMuZmluZChyID0+IHIgPT09IHJlc3BvbnNlIHx8IHI/LnZhbHVlID09PSByZXNwb25zZSk7XG4gICAgICAgICAgICBpZihtYXRjaGluZ1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgbWF0Y2hpbmcgcmVzcG9uc2VcIiwgbWF0Y2hpbmdSZXNwb25zZSlcbiAgICAgICAgICAgICAgICBpZihtYXRjaGluZ1Jlc3BvbnNlPy5zY29yZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hpbmdSZXNwb25zZS5zY29yZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWF4U2NvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbGlkUmVzcG9uc2UoKT8uc2NvcmUgfHwgMTtcbiAgICB9XG5cbiAgICBjYW5WYWxpZGF0ZVJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnF1ZXN0aW9uPy52YWxpZGF0aW9uPy52YWxpZF9yZXNwb25zZT8udmFsdWUgfHwgISF0aGlzLnF1ZXN0aW9uPy52YWxpZF9yZXNwb25zZTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiU2NvcmVyIiwicXVlc3Rpb24iLCJyZXNwb25zZSIsInZhbGlkYXRpb24iLCJ2YWxpZF9yZXNwb25zZSIsInVuZGVmaW5lZCIsImFsdF9yZXNwb25zZXMiLCJnZXRWYWxpZFJlc3BvbnNlIiwidmFsdWUiLCJnZXRBbHRSZXNwb25zZXMiLCJsZW5ndGgiLCJzb21lIiwiYWx0IiwiaXNWYWxpZCIsInZhbGlkUmVzcG9uc2VzIiwibWF0Y2hpbmdSZXNwb25zZSIsImZpbmQiLCJyIiwiY29uc29sZSIsImxvZyIsInNjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scorer/index.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scorer.js");
/******/ 	
/******/ })()
;