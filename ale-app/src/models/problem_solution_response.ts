import { EloResult } from "./elo_result";

export class ProblemSolutionResponse {
  problemSuccess: boolean;
  eloChangeResult: EloResult;
  constructor(success: boolean, eloResult: EloResult) {
    this.problemSuccess = success;
    this.eloChangeResult = eloResult;
  }
}
