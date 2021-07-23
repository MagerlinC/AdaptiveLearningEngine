import { EloResult } from './elo_result';
export declare class ProblemSolutionResponse {
    problemSuccess: boolean;
    eloChangeResult: EloResult;
    constructor(success: boolean, eloResult: EloResult);
}
