import { ProblemSolutionDTO } from "../DTOs/problem_solutionDTO";
import { Problem } from "../models/problem";
import { ProblemSolutionResponse } from "../models/problem_solution_response";
import { Student } from "../models/student";
import { getRequest, postRequest } from "./service-configs";

const endpoint = "http://localhost:3000/problems";

export const getProblems = (onResultFunc: (pList: Problem[]) => void): void => {
  getRequest<Problem[]>(endpoint).then((res) => onResultFunc(res));
};

export const postSolution = (
  problem: Problem,
  student: Student,
  answer: string,
  onResultFunc: (res: ProblemSolutionResponse) => void
) => {
  const body = new ProblemSolutionDTO(student, problem, answer);
  postRequest<ProblemSolutionResponse>(endpoint, body).then((res) =>
    onResultFunc(res)
  );
};
