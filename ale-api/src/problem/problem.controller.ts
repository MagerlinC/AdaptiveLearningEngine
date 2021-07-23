import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemSolutionDTO } from './problem_solutionDTO';
import { Problem } from './problem';

@Controller('problems')
export class ProblemController {
  constructor(private readonly appService: ProblemService) {}

  @Get()
  getProblems(): Promise<Problem[]> {
    return this.appService.getProblems();
  }

  @Post()
  postProblemSolution(@Body() solution: ProblemSolutionDTO) {
    return this.appService.postProblemSolution(solution);
  }
}
