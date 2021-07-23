import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProblemSolutionDTO } from './DTOs/problem_solutionDTO';
import { Problem } from './models/problem';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProblems(): Problem[] {
    return this.appService.getProblems();
  }

  @Post()
  postProblemSolution(@Body() solution: ProblemSolutionDTO) {
    return this.appService.postProblemSolution(solution);
  }
}
