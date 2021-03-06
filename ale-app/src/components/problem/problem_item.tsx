import React, { FunctionComponent, useState } from "react";
import { Problem } from "../../models/problem";
import { ProblemSolutionResponse } from "../../models/problem_solution_response";
import { Student } from "../../models/student";
import { postSolution } from "../../services/problem-service";
import "./problem_item.scss";
import CheckMarkIcon from "../../assets/checkmark.svg";
import FailureIcon from "../../assets/close.svg";

type ProblemItemProps = {
  problem: Problem;
  student: Student;
  onProblemSubmitted: (newStudent: Student) => void;
};

export const ProblemItem: FunctionComponent<ProblemItemProps> = ({
  problem,
  student,
  onProblemSubmitted,
}) => {
  const [problemInput, setProblemInput] = useState<string>("");
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);
  const [ratingChange, setRatingChange] = useState<number>(0);
  const [problemCompletionStatus, setProblemCompletionStatus] =
    useState<boolean>(false);

  const submitAnswer = async (): Promise<void> => {
    const onResultFunc = (res: ProblemSolutionResponse) => {
      setRatingChange(res.eloChangeResult.playerAChange);
      setProblemCompletionStatus(res.problemSuccess);
      setHasCompleted(true);
    };
    const newStudent: Student = await postSolution(
      problem,
      student,
      problemInput,
      onResultFunc
    ).then((res) => res);
    onProblemSubmitted(newStudent);
  };

  const getProblemInteractionElement = (problem: Problem) => {
    switch (problem.type) {
      case "input":
        return (
          <input
            onChange={(e) => setProblemInput(e.target.value)}
            value={problemInput}
            className="problem-input"
          />
        );
    }
  };

  const SolutionIndicator = (success: boolean, ratingChange: number) => {
    return (
      <div className="solution-result-indicator">
        {success ? (
          <div className="answer-icon">
            <img alt="success" src={CheckMarkIcon} />
          </div>
        ) : (
          <div className="answer-icon">
            <img alt="failure" src={FailureIcon} />
          </div>
        )}
        <div className={"rating-change" + (success ? " green" : " red")}>
          {success ? "+ " + Math.round(ratingChange) : Math.round(ratingChange)}
        </div>
      </div>
    );
  };

  return (
    <div className="problem-item">
      <div className="problem-header">
        <div className="problem-title">{problem.subject}</div>
        <div className="problem-rating">
          (
          {Math.round(
            problem.activeRating >= 0
              ? problem.activeRating
              : problem.initialRating
          )}
          )
        </div>
      </div>
      <div className="problem-text">{problem.problemText}</div>
      {getProblemInteractionElement(problem)}
      <button className="submit-btn" onClick={submitAnswer}>
        Submit Answer
      </button>
      {hasCompleted && SolutionIndicator(problemCompletionStatus, ratingChange)}
    </div>
  );
};
export default ProblemItem;
