import { ProblemSolutionDTO } from "./DTOs/problem_solutionDTO";
import { Problem } from "./models/problem";
import { ProblemSolutionResponse } from "./models/problem_solution_response";
import { Student } from "./models/student";

const endpoint = "http://localhost:3000";

const headers = { "Content-Type": "application/json" };

async function getRequest<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request, { method: "GET" });
  const body = await response.json();
  return body;
}

async function postRequest<T>(
  request: RequestInfo,
  requestBody: object
): Promise<T> {
  const response = await fetch(request, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(requestBody),
    headers: headers,
  });
  const body = await response.json();
  return body;
}

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
