import { Student } from 'src/student/student';
import { EloResult } from './elo_result';

export class ProblemSolutionResponse {
  problemSuccess: boolean;
  newStudentInfo: Student;
  eloChangeResult: EloResult;
  constructor(
    success: boolean,
    newStudentInfo: Student,
    eloChangeResult: EloResult,
  ) {
    this.problemSuccess = success;
    this.newStudentInfo = newStudentInfo;
    this.eloChangeResult = eloChangeResult;
  }
}
