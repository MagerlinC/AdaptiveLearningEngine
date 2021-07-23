exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 8:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProblemService = void 0;
const common_1 = __webpack_require__(6);
const elo_service_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../elo_service'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const firebase_1 = __webpack_require__(11);
const problem_solution_response_1 = __webpack_require__(14);
let ProblemService = class ProblemService {
    async getProblems() {
        const problems = await firebase_1.dbRef
            .collection('problems')
            .get()
            .then((snapshot) => {
            const problems = [];
            snapshot.forEach((doc) => {
                problems.push(doc.data());
            });
            return problems;
        });
        return problems;
    }
    postProblemSolution(problemSolution) {
        const eloResult = elo_service_1.getEloChangeResult(problemSolution);
        elo_service_1.updateElos(problemSolution.problem, problemSolution.student, eloResult);
        const problemSuccess = elo_service_1.isCorrectAnswer(problemSolution.problem, problemSolution.selectedAnswer);
        return new problem_solution_response_1.ProblemSolutionResponse(problemSuccess, eloResult);
    }
};
ProblemService = __decorate([
    common_1.Injectable()
], ProblemService);
exports.ProblemService = ProblemService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("94bc870440d703fdb7f4")
/******/ })();
/******/ 
/******/ }
;