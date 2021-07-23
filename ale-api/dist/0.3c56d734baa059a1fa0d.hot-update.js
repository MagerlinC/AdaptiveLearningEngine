exports.id = 0;
exports.ids = null;
exports.modules = [
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(4);
const problem_module_1 = __webpack_require__(5);
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


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(6);
const problem_controller_1 = __webpack_require__(7);
const problem_service_1 = __webpack_require__(8);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [problem_controller_1.AppController],
        providers: [problem_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");

/***/ }),
/* 7 */
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(6);
const problem_service_1 = __webpack_require__(8);
const problem_solutionDTO_1 = __webpack_require__(15);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getProblems() {
        return this.appService.getProblems();
    }
    postProblemSolution(solution) {
        return this.appService.postProblemSolution(solution);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], AppController.prototype, "getProblems", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof problem_solutionDTO_1.ProblemSolutionDTO !== "undefined" && problem_solutionDTO_1.ProblemSolutionDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "postProblemSolution", null);
AppController = __decorate([
    common_1.Controller('problems'),
    __metadata("design:paramtypes", [typeof (_c = typeof problem_service_1.AppService !== "undefined" && problem_service_1.AppService) === "function" ? _c : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(6);
const elo_service_1 = __webpack_require__(9);
const firebase_1 = __webpack_require__(11);
const problem_solution_response_1 = __webpack_require__(14);
let AppService = class AppService {
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
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateElos = exports.getEloChangeResult = exports.isCorrectAnswer = void 0;
const elo_result_1 = __webpack_require__(10);
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
/* 10 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EloResult = void 0;
class EloResult {
    constructor(aNum, bNum) {
        this.playerAChange = aNum;
        this.playerBChange = bNum;
    }
}
exports.EloResult = EloResult;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dbRef = void 0;
const firebase_1 = __webpack_require__(12);
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
exports.dbRef = firebase_1.default.firestore();


/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";
module.exports = require("firebase");

/***/ }),
/* 13 */
/***/ ((module) => {

"use strict";
module.exports = require("firebase/firestore");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProblemSolutionResponse = void 0;
class ProblemSolutionResponse {
    constructor(success, eloResult) {
        this.problemSuccess = success;
        this.eloChangeResult = eloResult;
    }
}
exports.ProblemSolutionResponse = ProblemSolutionResponse;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProblemSolutionDTO = void 0;
class ProblemSolutionDTO {
    constructor(student, problem, selectedAnswer) {
        this.student = student;
        this.problem = problem;
        this.selectedAnswer = selectedAnswer;
    }
}
exports.ProblemSolutionDTO = ProblemSolutionDTO;


/***/ })
];
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ed72036a2a7e0a23104a")
/******/ })();
/******/ 
/******/ }
;