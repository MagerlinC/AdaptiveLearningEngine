import { Problem } from 'src/models/problem';
import { Student } from 'src/models/student';
export declare class ProblemSolutionDTO {
    student: Student;
    problem: Problem;
    selectedAnswer: string;
}
