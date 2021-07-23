exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 9:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateElos = exports.getEloChangeResult = exports.isCorrectAnswer = void 0;
const elo_result_1 = __webpack_require__(10);
const firebase_1 = __webpack_require__(11);
const isCorrectAnswer = (problem, selectedAnswer) => {
    return problem.problemAnswer.toLowerCase() === selectedAnswer.toLowerCase();
};
exports.isCorrectAnswer = isCorrectAnswer;
const getEloChangeResult = (submittedSolution) => {
    const problemRating = submittedSolution.problem.activeRating
        ? submittedSolution.problem.activeRating
        : submittedSolution.problem.initialRating;
    const studentRating = submittedSolution.student.activeRating
        ? submittedSolution.student.activeRating
        : submittedSolution.student.initialRating;
    const expectedResultOfStudent = 1 / (1 + 10 ** ((problemRating - studentRating) / 400));
    const kFactor = 20;
    const studentRight = exports.isCorrectAnswer(submittedSolution.problem, submittedSolution.selectedAnswer);
    let playerAChange;
    let playerBChange;
    if (studentRight) {
        playerAChange = (1 - expectedResultOfStudent) * kFactor;
        playerBChange = (0 - expectedResultOfStudent) * kFactor;
    }
    else {
        playerAChange = (0 - expectedResultOfStudent) * kFactor;
        playerBChange = (1 - expectedResultOfStudent) * kFactor;
    }
    return new elo_result_1.EloResult(playerAChange, playerBChange);
};
exports.getEloChangeResult = getEloChangeResult;
const updateElos = (problem, student, eloResult) => {
    const problemId = problem.id;
    const studentId = student.id;
    const studentChangeVal = eloResult.playerAChange;
    updateStudentElo(studentId, studentChangeVal);
    const problemChangeVal = eloResult.playerBChange;
    udpateProblemElo(problemId, problemChangeVal);
};
exports.updateElos = updateElos;
const updateStudentElo = async (studentId, eloDifferenceToApply) => {
    const studentData = await firebase_1.dbRef
        .collection('students')
        .doc(studentId)
        .get()
        .then((snapshot) => snapshot.data());
    const curElo = studentData.activeRating >= 0
        ? studentData.activeRating
        : studentData.initialRating;
    const newElo = curElo + eloDifferenceToApply;
    studentData.activeRating = newElo;
    return firebase_1.dbRef
        .collection('students')
        .doc(studentId)
        .set(studentData)
        .then((res) => res);
};
const udpateProblemElo = (problemId, eloDifferenceToApply) => { };


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9f80ed22490e9002014b")
/******/ })();
/******/ 
/******/ }
;