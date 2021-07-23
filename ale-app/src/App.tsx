import React, { useEffect, useState } from "react";
import "./App.scss";
import ProblemItem from "./components/problem/problem_item";
import StudentInfo from "./components/student_info/student_info";
import { Problem } from "./models/problem";
import { Student } from "./models/student";
import { getProblems } from "./services/problem-service";
import { getStudents } from "./services/student-service";
import LoadingIcon from "./assets/spinner.svg";

function App() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>(
    undefined
  );

  useEffect(() => {
    getProblems((problemList) => setProblems(problemList));
    getStudents((studentList) => {
      setStudents(studentList);
      setSelectedStudent(studentList[0]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">ALeEn</header>
      {loading ? (
        <div className="loading-spinner-wrapper">
          <img
            alt="loading"
            className="loading-spinner-icon"
            src={LoadingIcon}
          />
        </div>
      ) : selectedStudent ? (
        <div className="page-body">
          <div className="student-info-section">
            <div className="welcome-text">
              Welcome back, {selectedStudent?.name}!
            </div>
            <StudentInfo student={selectedStudent} />
          </div>
          <div className="problem-list">
            {problems.map((problem) => (
              <ProblemItem
                key={problem.id}
                student={selectedStudent}
                problem={problem}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="no-student">Please select a student.</div>
      )}
    </div>
  );
}

export default App;
