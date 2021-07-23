exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 7:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(6);
const app_service_1 = __webpack_require__(8);
const problem_solutionDTO_1 = __webpack_require__(14);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getProblems() {
        return this.appService.getProblems();
    }
    postProblemSolution(solution) {
        console.log('ENDPOINT');
        console.log(solution);
        return this.appService.postProblemSolution(solution);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getProblems", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof problem_solutionDTO_1.ProblemSolutionDTO !== "undefined" && problem_solutionDTO_1.ProblemSolutionDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "postProblemSolution", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [typeof (_b = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1e8e064db6efcf67250a")
/******/ })();
/******/ 
/******/ }
;