import { Injectable } from '@nestjs/common';
import { ProblemSolutionDTO } from './problem_solutionDTO';
import {
  getEloChangeResult,
  isCorrectAnswer,
  updateElos,
} from '../problem-solution/elo_service';
import { dbRef } from '../firebase';
import { EloResult } from '../problem-solution/elo_result';
import { Problem } from './problem';
import { ProblemSolutionResponse } from '../problem-solution/problem_solution_response';

@Injectable()
export class ProblemService {
  async getProblems(): Promise<Problem[]> {
    const problems = await dbRef
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
