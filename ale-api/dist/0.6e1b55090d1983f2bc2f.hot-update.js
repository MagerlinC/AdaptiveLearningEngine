exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 11:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.studentsRef = exports.problemsRef = void 0;
const firebase_1 = __webpack_require__(16);
__webpack_require__(13);
const firebaseConfig = {
    apiKey: 'AIzaSyAQgVo8ymurkua0weoyoax1kSCM-QiyMcU',
    authDomain: 'adaptive-learning-engine.firebaseapp.com',
    projectId: 'adaptive-learning-engine',
    storageBucket: 'adaptive-learning-engine.appspot.com',
    messagingSenderId: '457503847028',
    appId: '1:457503847028:web:ff2f68c5c69788114dd721',
};
firebase_1.default.initializeApp(firebaseConfig);
const databaseRef = firebase_1.default.firestore().ref();
exports.problemsRef = databaseRef.child('problems');
exports.studentsRef = databaseRef.child('students');


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8db644a0b6db030a42b0")
/******/ })();
/******/ 
/******/ }
;