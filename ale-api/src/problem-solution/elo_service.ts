import { ProblemSolutionDTO } from '../problem/problem_solutionDTO';
import { EloResult } from './elo_result';
import { Problem } from '../problem/problem';
import { Student } from '../student/student';
import { dbRef } from 'src/firebase';

export const isCorrectAnswer = (
  problem: Problem,
  selectedAnswer: string,
): boolean => {
  return problem.problemAnswer.toLowerCase() === selectedAnswer.toLowerCase();
};

export const getEloChangeResult = (
  submittedSolution: ProblemSolutionDTO,
): EloResult => {
  const problemRating =
    submittedSolution.problem.activeRating > 0
      ? submittedSolution.problem.activeRating
      : submittedSolution.problem.initialRating;
  const studentRating =
    submittedSolution.student.activeRating > 0
      ? submittedSolution.student.activeRating
      : submittedSolution.student.initialRating;

  const expectedResultOfStudent =
    1 / (1 + 10 ** ((problemRating - studentRating) / 400));

  const kFactor = 20;
  const studentRight = isCorrectAnswer(
    submittedSolution.problem,
    submittedSolution.selectedAnswer,
  );

  let playerAChange: number;
  let playerBChange: number;

  if (studentRight) {
    playerAChange = (1 - expectedResultOfStudent) * kFactor;
    playerBChange = (0 - expectedResultOfStudent) * kFactor;
  } else {
    playerAChange = (0 - expectedResultOfStudent) * kFactor;
    playerBChange = (1 - expectedResultOfStudent) * kFactor;
  }

  return new EloResult(playerAChange, playerBChange);
};

export const updateElos = async (
  problem: Problem,
  student: Student,
  eloResult: EloResult,
): Promise<Student> => {
  const problemId = problem.id;
  const studentId = student.id;

  // Update Problem ELO
  const problemChangeVal = eloResult.playerBChange;
  udpateProblemElo(problemId, problemChangeVal);
  // Update Student ELO
  const studentChangeVal = eloResult.playerAChange;
  return updateStudentElo(studentId, studentChangeVal).then((res) => res);
};

const updateStudentElo = async (
  studentId: string,
  eloDifferenceToApply: number,
): Promise<Student> => {
  const studentData: Student | any = await dbRef
    .collection('students')
    .doc(studentId)
    .get()
    .then((snapshot) => snapshot.data());
  studentData.id = studentId;
  const curElo =
    studentData.activeRating >= 0
      ? studentData.activeRating
      : studentData.initialRating;
  const newElo = curElo + eloDifferenceToApply;
  studentData.activeRating = newElo;

  dbRef.collection('students').doc(studentId).set(studentData);
  return studentData;
};

const udpateProblemElo = async (
  problemId: string,
  eloDifferenceToApply: number,
): Promise<Problem> => {
  const problemData: Student | any = await dbRef
    .collection('problems')
    .doc(problemId)
    .get()
    .then((snapshot) => snapshot.data());
  problemData.id = problemId;
  const curElo =
    problemData.activeRating >= 0
      ? problemData.activeRating
      : problemData.initialRating;
  const newElo = curElo + eloDifferenceToApply;
  problemData.activeRating = newElo;

  dbRef.collection('problems').doc(problemId).set(problemData);
  return problemData;
};
