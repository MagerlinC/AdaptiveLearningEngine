import { AppService } from './app.service';
import { ProblemSolutionDTO } from './DTOs/problem_solutionDTO';
import { Problem } from './models/problem';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getProblems(): Promise<Problem[]>;
    postProblemSolution(solution: ProblemSolutionDTO): import("./models/problem_solution_response").ProblemSolutionResponse;
}
