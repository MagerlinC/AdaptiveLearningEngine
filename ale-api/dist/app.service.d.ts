import { ProblemSolutionDTO } from './DTOs/problem_solutionDTO';
import { Problem } from './models/problem';
import { ProblemSolutionResponse } from './models/problem_solution_response';
export declare class AppService {
    getProblems(): Promise<Problem[]>;
    postProblemSolution(problemSolution: ProblemSolutionDTO): ProblemSolutionResponse;
}
