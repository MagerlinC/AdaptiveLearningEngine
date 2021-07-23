import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProblemSolutionDTO } from '../problem/problem_solutionDTO';
import { Student } from './student';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getProblems(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Post()
  postProblemSolution(@Body() solution: ProblemSolutionDTO) {}
}
