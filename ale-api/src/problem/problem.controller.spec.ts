import { Test, TestingModule } from '@nestjs/testing';
import { ProblemController } from './problem.controller';
import { ProblemService } from './problem.service';

describe('AppController', () => {
  let appController: ProblemController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProblemController],
      providers: [ProblemService],
    }).compile();

    appController = app.get<ProblemController>(ProblemController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getProblems()).toBe('Hello World!');
    });
  });
});
