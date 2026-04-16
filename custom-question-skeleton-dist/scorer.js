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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scorer)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Scorer = /*#__PURE__*/function () {\n  function Scorer(question, response) {\n    _classCallCheck(this, Scorer);\n\n    this.question = question;\n    this.response = response;\n  }\n  /**\n   * Check if the current question's response is valid or not\n   * (Required)\n   * @returns {boolean}\n   */\n\n\n  _createClass(Scorer, [{\n    key: \"isValid\",\n    value: function isValid() {\n      // TODO: Requires implementation\n      return false;\n    }\n    /**\n     * Returns an object displaying the validation state of each individual item inside the stored response\n     * For example:\n     * The student response value is: { min: 10, max: 20 } and our correct answer is { min: 10, max: 30 }\n     * Then we expect the result of this validateIndividualResponses will be:\n     * { min: true, max: false }\n     * @returns {{}|null}\n     */\n\n  }, {\n    key: \"validateIndividualResponses\",\n    value: function validateIndividualResponses() {\n      // TODO: Requires implementation\n      return null;\n    }\n    /**\n     * Returns the score of the stored response\n     * @returns {number|null}\n     */\n\n  }, {\n    key: \"score\",\n    value: function score() {\n      // TODO: Requires implementation\n      return 0;\n    }\n    /**\n     * Returns the possible max score of the stored response\n     * @returns {number}\n     */\n\n  }, {\n    key: \"maxScore\",\n    value: function maxScore() {\n      // TODO: Requires implementation\n      return 0;\n    }\n    /**\n     * Check if the current question is scorable or not.\n     * For example:\n     * - If there is no valid response data set in the question, this method should return false\n     * - If this question type is not scorable (like an essay or open ended question) then this will return false\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"canValidateResponse\",\n    value: function canValidateResponse() {\n      return true;\n    }\n  }]);\n\n  return Scorer;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY29yZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7QUFDakIsa0JBQVlDLFFBQVosRUFBc0JDLFFBQXRCLEVBQWdDO0FBQUE7O0FBQzVCLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBQ0ksbUJBQVU7QUFDTjtBQUVBLGFBQU8sS0FBUDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLHVDQUE4QjtBQUMxQjtBQUNBLGFBQU8sSUFBUDtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7Ozs7V0FDSSxpQkFBUTtBQUNKO0FBQ0EsYUFBTyxDQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7OztXQUNJLG9CQUFXO0FBQ1A7QUFDQSxhQUFPLENBQVA7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksK0JBQXNCO0FBQ2xCLGFBQU8sSUFBUDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2NvcmVyL2luZGV4LmpzP2QyMWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVyIHtcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbiwgcmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgcXVlc3Rpb24ncyByZXNwb25zZSBpcyB2YWxpZCBvciBub3RcbiAgICAgKiAoUmVxdWlyZWQpXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgLy8gVE9ETzogUmVxdWlyZXMgaW1wbGVtZW50YXRpb25cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgZGlzcGxheWluZyB0aGUgdmFsaWRhdGlvbiBzdGF0ZSBvZiBlYWNoIGluZGl2aWR1YWwgaXRlbSBpbnNpZGUgdGhlIHN0b3JlZCByZXNwb25zZVxuICAgICAqIEZvciBleGFtcGxlOlxuICAgICAqIFRoZSBzdHVkZW50IHJlc3BvbnNlIHZhbHVlIGlzOiB7IG1pbjogMTAsIG1heDogMjAgfSBhbmQgb3VyIGNvcnJlY3QgYW5zd2VyIGlzIHsgbWluOiAxMCwgbWF4OiAzMCB9XG4gICAgICogVGhlbiB3ZSBleHBlY3QgdGhlIHJlc3VsdCBvZiB0aGlzIHZhbGlkYXRlSW5kaXZpZHVhbFJlc3BvbnNlcyB3aWxsIGJlOlxuICAgICAqIHsgbWluOiB0cnVlLCBtYXg6IGZhbHNlIH1cbiAgICAgKiBAcmV0dXJucyB7e318bnVsbH1cbiAgICAgKi9cbiAgICB2YWxpZGF0ZUluZGl2aWR1YWxSZXNwb25zZXMoKSB7XG4gICAgICAgIC8vIFRPRE86IFJlcXVpcmVzIGltcGxlbWVudGF0aW9uXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNjb3JlIG9mIHRoZSBzdG9yZWQgcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfG51bGx9XG4gICAgICovXG4gICAgc2NvcmUoKSB7XG4gICAgICAgIC8vIFRPRE86IFJlcXVpcmVzIGltcGxlbWVudGF0aW9uXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBvc3NpYmxlIG1heCBzY29yZSBvZiB0aGUgc3RvcmVkIHJlc3BvbnNlXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBtYXhTY29yZSgpIHtcbiAgICAgICAgLy8gVE9ETzogUmVxdWlyZXMgaW1wbGVtZW50YXRpb25cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgcXVlc3Rpb24gaXMgc2NvcmFibGUgb3Igbm90LlxuICAgICAqIEZvciBleGFtcGxlOlxuICAgICAqIC0gSWYgdGhlcmUgaXMgbm8gdmFsaWQgcmVzcG9uc2UgZGF0YSBzZXQgaW4gdGhlIHF1ZXN0aW9uLCB0aGlzIG1ldGhvZCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgICogLSBJZiB0aGlzIHF1ZXN0aW9uIHR5cGUgaXMgbm90IHNjb3JhYmxlIChsaWtlIGFuIGVzc2F5IG9yIG9wZW4gZW5kZWQgcXVlc3Rpb24pIHRoZW4gdGhpcyB3aWxsIHJldHVybiBmYWxzZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGNhblZhbGlkYXRlUmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJTY29yZXIiLCJxdWVzdGlvbiIsInJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scorer/index.js\n");

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