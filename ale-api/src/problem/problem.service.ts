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
import { Student } from 'src/student/student';

@Injectable()
export class ProblemService {
  async getProblems(): Promise<Problem[]> {
    const problems = await dbRef
      .collection('problems')
      .get()
      .then((snapshot) => {
        const problems = [];
        snapshot.forEach((doc) => {
          const objToPush = doc.data();
          objToPush.id = doc.id;
          problems.push(objToPush);
        });
        return problems;
      });
    return problems;
  }

  async postProblemSolution(
    problemSolution: ProblemSolutionDTO,
  ): Promise<ProblemSolutionResponse> {
    const eloResult: EloResult = getEloChangeResult(problemSolution);
    // Send new ratings to DB
    const updatedStudent: Student = await updateElos(
      problemSolution.problem,
      problemSolution.student,
      eloResult,
    ).then((res) => res);
    const problemSuccess = isCorrectAnswer(
      problemSolution.problem,
      problemSolution.selectedAnswer,
    );
    return new ProblemSolutionResponse(
      problemSuccess,
      updatedStudent,
      eloResult,
    );
  }
}
