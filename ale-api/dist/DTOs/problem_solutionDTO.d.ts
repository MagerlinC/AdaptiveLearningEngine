import { Problem } from '../models/problem';
import { Student } from '../models/student';
export declare class ProblemSolutionDTO {
    student: Student;
    problem: Problem;
    selectedAnswer: string;
    constructor(student: Student, problem: Problem, selectedAnswer: string);
}
