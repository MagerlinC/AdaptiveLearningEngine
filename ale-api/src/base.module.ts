import { Module } from '@nestjs/common';
import { ProblemController } from './problem/problem.controller';
import { ProblemService } from './problem/problem.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';

@Module({
  imports: [],
  controllers: [ProblemController, StudentController],
  providers: [ProblemService, StudentService],
})
export class BaseModule {}
