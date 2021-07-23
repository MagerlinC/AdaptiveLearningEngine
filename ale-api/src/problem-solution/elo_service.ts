import { ProblemSolutionDTO } from '../problem/problem_solutionDTO';
import { EloResult } from './elo_result';
import { Problem } from '../problem/problem';
import { Student } from '../student/student';

export const isCorrectAnswer = (
  problem: Problem,
  selectedAnswer: string,
): boolean => {
  return problem.problemAnswer.toLowerCase() === selectedAnswer.toLowerCase();
};

export const getEloChangeResult = (
  submittedSolution: ProblemSolutionDTO,
): EloResult => {
  const problemRating = submittedSolution.problem.activeRating
    ? submittedSolution.problem.activeRating
    : submittedSolution.problem.initialRating;
  const studentRating = submittedSolution.student.activeRating
    ? submittedSolution.student.activeRating
    : submittedSolution.student.initialRating;

  const expectedResultOfStudent =
    1 / (1 + 10 ** ((problemRating - studentRating) / 400));

  const kFactor = 20;
  const studentRight = isCorrectAnswer(
    submittedSolution.problem,
    submittedSolution.selectedAnswer,
  );

  let playerAChange: number;
  let playerBChange: number;

  if (studentRight) {
    playerAChange = (1 - expectedResultOfStudent) * kFactor;
    playerBChange = (0 - expectedResultOfStudent) * kFactor;
  } else {
    playerAChange = (0 - expectedResultOfStudent) * kFactor;
    playerBChange = (1 - expectedResultOfStudent) * kFactor;
  }

  return new EloResult(playerAChange, playerBChange);
};

export const updateElos = (
  problem: Problem,
  student: Student,
  eloResult: EloResult,
): void => {};
