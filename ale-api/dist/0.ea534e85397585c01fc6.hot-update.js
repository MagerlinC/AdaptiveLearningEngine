exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 12:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Problem = void 0;
class Problem {
    constructor(id, initialRating, activeRating, subject, categories, type, problemtext, problemAnswer) {
        this.id = id;
        this.initialRating = initialRating;
        this.activeRating = activeRating;
        this.subject = subject;
        this.categories = categories;
        this.type = type;
        this.problemText = problemtext;
        this.problemAnswer = problemAnswer;
    }
}
exports.Problem = Problem;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f168f9abb55cbdb65b81")
/******/ })();
/******/ 
/******/ }
;