"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const elo_service_1 = require("./elo_service");
const category_1 = require("./models/category");
const problem_1 = require("./models/problem");
const problem_solution_response_1 = require("./models/problem_solution_response");
let AppService = class AppService {
    getProblems() {
        const p1 = new problem_1.Problem('0', 900, null, 'English', [new category_1.Category('0', 'grammar')], 'input', 'Input the correct tense of the verb in the following sentence: "The developer did fix/fixed the bug"', 'fix');
        const p2 = new problem_1.Problem('1', 1200, null, 'English', [new category_1.Category('0', 'grammar')], 'input', 'Input the correct tense of the verb in the following sentence: "I wish I was/were rich and famous!"', 'were');
        return [p1, p2];
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
//# sourceMappingURL=app.service.js.map