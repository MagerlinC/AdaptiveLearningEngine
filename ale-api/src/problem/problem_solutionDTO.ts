import { Problem } from './problem';
import { Student } from '../student/student';

export class ProblemSolutionDTO {
  student: Student;
  problem: Problem;
  selectedAnswer: string;

  constructor(student: Student, problem: Problem, selectedAnswer: string) {
    this.student = student;
    this.problem = problem;
    this.selectedAnswer = selectedAnswer;
  }
}
