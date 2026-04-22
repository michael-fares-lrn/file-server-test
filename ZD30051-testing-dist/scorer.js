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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scorer)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Scorer = /*#__PURE__*/function () {\n  function Scorer(question, response) {\n    _classCallCheck(this, Scorer);\n\n    this.question = question;\n    this.response = response;\n  }\n\n  _createClass(Scorer, [{\n    key: \"getValidResponse\",\n    value: function getValidResponse() {\n      var _this$question, _this$question$valida, _this$question2, _this$question2$valid, _this$question3;\n\n      return ((_this$question = this.question) === null || _this$question === void 0 ? void 0 : (_this$question$valida = _this$question.validation) === null || _this$question$valida === void 0 ? void 0 : _this$question$valida.valid_response) !== undefined ? (_this$question2 = this.question) === null || _this$question2 === void 0 ? void 0 : (_this$question2$valid = _this$question2.validation) === null || _this$question2$valid === void 0 ? void 0 : _this$question2$valid.valid_response : (_this$question3 = this.question) === null || _this$question3 === void 0 ? void 0 : _this$question3.valid_response;\n    }\n  }, {\n    key: \"getAltResponses\",\n    value: function getAltResponses() {\n      var _this$question4, _this$question4$valid, _this$question5, _this$question5$valid, _this$question6;\n\n      return ((_this$question4 = this.question) === null || _this$question4 === void 0 ? void 0 : (_this$question4$valid = _this$question4.validation) === null || _this$question4$valid === void 0 ? void 0 : _this$question4$valid.alt_responses) !== undefined ? (_this$question5 = this.question) === null || _this$question5 === void 0 ? void 0 : (_this$question5$valid = _this$question5.validation) === null || _this$question5$valid === void 0 ? void 0 : _this$question5$valid.alt_responses : (_this$question6 = this.question) === null || _this$question6 === void 0 ? void 0 : _this$question6.alt_responses;\n    }\n  }, {\n    key: \"isValid\",\n    value: function isValid() {\n      var _this$getValidRespons, _this$getAltResponses;\n\n      var question = this.question,\n          response = this.response;\n\n      if (!this.getValidResponse()) {\n        return false;\n      } // Check primary valid response\n\n\n      if (response === this.getValidResponse() || response === ((_this$getValidRespons = this.getValidResponse()) === null || _this$getValidRespons === void 0 ? void 0 : _this$getValidRespons.value)) {\n        return true;\n      } // Check alternative responses\n\n\n      if (((_this$getAltResponses = this.getAltResponses()) === null || _this$getAltResponses === void 0 ? void 0 : _this$getAltResponses.length) > 0) {\n        // TOTO need to do check for .value or not\n        return this.getAltResponses().some(function (alt) {\n          return alt === response || (alt === null || alt === void 0 ? void 0 : alt.value) === response;\n        });\n      }\n\n      return false;\n    }\n  }, {\n    key: \"validateIndividualResponses\",\n    value: function validateIndividualResponses() {\n      return null;\n    }\n  }, {\n    key: \"score\",\n    value: function score() {\n      var question = this.question,\n          response = this.response;\n\n      if (!this.isValid()) {\n        return 0;\n      } else {\n        var validResponses = [this.getValidResponse() || {}].concat(_toConsumableArray(this.getAltResponses() || []));\n        var matchingResponse = validResponses.find(function (r) {\n          return r === response || (r === null || r === void 0 ? void 0 : r.value) === response;\n        });\n        return (matchingResponse === null || matchingResponse === void 0 ? void 0 : matchingResponse.score) || 1;\n      }\n    }\n  }, {\n    key: \"maxScore\",\n    value: function maxScore() {\n      var _this$getValidRespons2;\n\n      return ((_this$getValidRespons2 = this.getValidResponse()) === null || _this$getValidRespons2 === void 0 ? void 0 : _this$getValidRespons2.score) || 1;\n    }\n  }, {\n    key: \"canValidateResponse\",\n    value: function canValidateResponse() {\n      var _this$question7, _this$question7$valid, _this$question7$valid2, _this$question8;\n\n      return !!((_this$question7 = this.question) !== null && _this$question7 !== void 0 && (_this$question7$valid = _this$question7.validation) !== null && _this$question7$valid !== void 0 && (_this$question7$valid2 = _this$question7$valid.valid_response) !== null && _this$question7$valid2 !== void 0 && _this$question7$valid2.value) || !!((_this$question8 = this.question) !== null && _this$question8 !== void 0 && _this$question8.valid_response);\n    }\n  }]);\n\n  return Scorer;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUVBQUMsZ0JBQWVFLFVBQWhCLDRFQUFDLHNCQUEyQkMsY0FBNUIsbURBQUMsdUJBQTJDSSxLQUE1QyxDQUFELElBQXNELENBQUMscUJBQUMsS0FBS1AsUUFBTiw0Q0FBQyxnQkFBZUcsY0FBaEIsQ0FBOUQ7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Njb3Jlci9pbmRleC5qcz9kMjFiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVyIHtcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbiwgcmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgZ2V0VmFsaWRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuICggdGhpcy5xdWVzdGlvbj8udmFsaWRhdGlvbj8udmFsaWRfcmVzcG9uc2UgIT09IHVuZGVmaW5lZCApID8gdGhpcy5xdWVzdGlvbj8udmFsaWRhdGlvbj8udmFsaWRfcmVzcG9uc2UgOiB0aGlzLnF1ZXN0aW9uPy52YWxpZF9yZXNwb25zZVxuICAgIH1cbiAgICBnZXRBbHRSZXNwb25zZXMoKSB7XG4gICAgICAgIHJldHVybiAoIHRoaXMucXVlc3Rpb24/LnZhbGlkYXRpb24/LmFsdF9yZXNwb25zZXMgIT09IHVuZGVmaW5lZCApID8gdGhpcy5xdWVzdGlvbj8udmFsaWRhdGlvbj8uYWx0X3Jlc3BvbnNlcyA6IHRoaXMucXVlc3Rpb24/LmFsdF9yZXNwb25zZXNcbiAgICB9XG5cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBjb25zdCB7IHF1ZXN0aW9uLCByZXNwb25zZSB9ID0gdGhpcztcblxuICAgICAgICBpZiAoIXRoaXMuZ2V0VmFsaWRSZXNwb25zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgcHJpbWFyeSB2YWxpZCByZXNwb25zZVxuICAgICAgICBpZiAocmVzcG9uc2UgPT09IHRoaXMuZ2V0VmFsaWRSZXNwb25zZSgpIHx8IHJlc3BvbnNlID09PSB0aGlzLmdldFZhbGlkUmVzcG9uc2UoKT8udmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGFsdGVybmF0aXZlIHJlc3BvbnNlc1xuICAgICAgICBpZiAodGhpcy5nZXRBbHRSZXNwb25zZXMoKT8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gVE9UTyBuZWVkIHRvIGRvIGNoZWNrIGZvciAudmFsdWUgb3Igbm90XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBbHRSZXNwb25zZXMoKS5zb21lKGFsdCA9PiBhbHQgPT09IHJlc3BvbnNlIHx8IGFsdD8udmFsdWUgPT09IHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVJbmRpdmlkdWFsUmVzcG9uc2VzKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzY29yZSgpIHtcbiAgICAgICAgY29uc3QgeyBxdWVzdGlvbiwgcmVzcG9uc2UgfSA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRSZXNwb25zZXMgPSBbXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRWYWxpZFJlc3BvbnNlKCkgfHwge30sXG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuZ2V0QWx0UmVzcG9uc2VzKCkgfHwgW10pXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hpbmdSZXNwb25zZSA9IHZhbGlkUmVzcG9uc2VzLmZpbmQociA9PiByID09PSByZXNwb25zZSB8fCByPy52YWx1ZSA9PT0gcmVzcG9uc2UpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoaW5nUmVzcG9uc2U/LnNjb3JlIHx8IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXhTY29yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsaWRSZXNwb25zZSgpPy5zY29yZSB8fCAxO1xuICAgIH1cblxuICAgIGNhblZhbGlkYXRlUmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMucXVlc3Rpb24/LnZhbGlkYXRpb24/LnZhbGlkX3Jlc3BvbnNlPy52YWx1ZSB8fCAhIXRoaXMucXVlc3Rpb24/LnZhbGlkX3Jlc3BvbnNlO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJTY29yZXIiLCJxdWVzdGlvbiIsInJlc3BvbnNlIiwidmFsaWRhdGlvbiIsInZhbGlkX3Jlc3BvbnNlIiwidW5kZWZpbmVkIiwiYWx0X3Jlc3BvbnNlcyIsImdldFZhbGlkUmVzcG9uc2UiLCJ2YWx1ZSIsImdldEFsdFJlc3BvbnNlcyIsImxlbmd0aCIsInNvbWUiLCJhbHQiLCJpc1ZhbGlkIiwidmFsaWRSZXNwb25zZXMiLCJtYXRjaGluZ1Jlc3BvbnNlIiwiZmluZCIsInIiLCJzY29yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./scorer/index.js\n");

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