exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 9:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateElos = exports.getEloChangeResult = exports.isCorrectAnswer = void 0;
const elo_result_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './models/elo_result'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const isCorrectAnswer = (problem, selectedAnswer) => {
    return problem.problemAnswer.toLowerCase() === selectedAnswer.toLowerCase();
};
exports.isCorrectAnswer = isCorrectAnswer;
const getEloChangeResult = (submittedSolution) => {
    const problemRating = submittedSolution.problem.activeRating
        ? submittedSolution.problem.activeRating
        : submittedSolution.problem.initialRating;
    const studentRating = submittedSolution.student.activeRating
        ? submittedSolution.student.activeRating
        : submittedSolution.student.initialRating;
    const expectedResultOfStudent = 1 / (1 + 10 ** ((problemRating - studentRating) / 400));
    const kFactor = 20;
    const studentRight = exports.isCorrectAnswer(submittedSolution.problem, submittedSolution.selectedAnswer);
    let playerAChange;
    let playerBChange;
    if (studentRight) {
        playerAChange = (1 - expectedResultOfStudent) * kFactor;
        playerBChange = (0 - expectedResultOfStudent) * kFactor;
    }
    else {
        playerAChange = (0 - expectedResultOfStudent) * kFactor;
        playerBChange = (1 - expectedResultOfStudent) * kFactor;
    }
    return new elo_result_1.EloResult(playerAChange, playerBChange);
};
exports.getEloChangeResult = getEloChangeResult;
const updateElos = (problem, student, eloResult) => { };
exports.updateElos = updateElos;


/***/ }),

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
const elo_service_1 = __webpack_require__(9);
const firebase_1 = __webpack_require__(11);
const problem_solution_response_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../models/problem_solution_response'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
/******/ 	__webpack_require__.h = () => ("b3100a6f00faf4ce1d02")
/******/ })();
/******/ 
/******/ }
;