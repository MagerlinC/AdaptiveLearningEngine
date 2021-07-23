import { Injectable } from '@nestjs/common';
import { ProblemSolutionDTO } from './DTOs/problem_solutionDTO';
import { getEloChangeResult, isCorrectAnswer, updateElos } from './elo_service';
import { Category } from './models/category';
import { EloResult } from './models/elo_result';
import { Problem } from './models/problem';
import { ProblemSolutionResponse } from './models/problem_solution_response';

@Injectable()
export class AppService {
  getProblems(): Problem[] {
    const p1 = new Problem(
      '0',
      800,
      null,
      'English',
      [new Category('0', 'grammar')],
      'input',
      'Input the correct tense of the verb in the following sentence: "The developer did fix/fixed the bug"',
      'fix',
    );
    const p2 = new Problem(
      '1',
      1200,
      null,
      'English',
      [new Category('0', 'grammar')],
      'input',
      'Input the correct tense of the verb in the following sentence: "I wish I was/were rich and famous!"',
      'were',
    );
    return [p1, p2];
  }
  postProblemSolution(
    problemSolution: ProblemSolutionDTO,
  ): ProblemSolutionResponse {
    const eloResult: EloResult = getEloChangeResult(problemSolution);
    // Send new ratings to DB
    updateElos(problemSolution.problem, problemSolution.student, eloResult);
    const problemSuccess = isCorrectAnswer(
      problemSolution.problem,
      problemSolution.selectedAnswer,
    );
    return new ProblemSolutionResponse(problemSuccess, eloResult);
  }
}
