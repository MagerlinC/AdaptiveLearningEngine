exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 3:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(4);
const problem_module_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './problem.module'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
async function bootstrap() {
    const app = await core_1.NestFactory.create(problem_module_1.AppModule);
    app.enableCors();
    await app.listen(3000);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fad8e64b637287017424")
/******/ })();
/******/ 
/******/ }
;