exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 11:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.studentsRef = exports.problemsRef = void 0;
const app_1 = __webpack_require__(12);
__webpack_require__(16);
const firebaseConfig = {
    apiKey: 'AIzaSyAQgVo8ymurkua0weoyoax1kSCM-QiyMcU',
    authDomain: 'adaptive-learning-engine.firebaseapp.com',
    projectId: 'adaptive-learning-engine',
    storageBucket: 'adaptive-learning-engine.appspot.com',
    messagingSenderId: '457503847028',
    appId: '1:457503847028:web:ff2f68c5c69788114dd721',
};
app_1.default.initializeApp(firebaseConfig);
const databaseRef = app_1.default.database().ref();
exports.problemsRef = databaseRef.child('problems');
exports.studentsRef = databaseRef.child('students');


/***/ }),

/***/ 16:
/***/ ((module) => {

"use strict";
module.exports = require("firebase/firestore");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("790fce8a40607a40c0f0")
/******/ })();
/******/ 
/******/ }
;