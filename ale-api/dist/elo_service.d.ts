import { ProblemSolutionDTO } from './DTOs/problem_solutionDTO';
import { EloResult } from './models/elo_result';
import { Problem } from './models/problem';
import { Student } from './models/student';
export declare const isCorrectAnswer: (problem: Problem, selectedAnswer: string) => boolean;
export declare const getEloChangeResult: (submittedSolution: ProblemSolutionDTO) => EloResult;
export declare const updateElos: (problem: Problem, student: Student, eloResult: EloResult) => void;
