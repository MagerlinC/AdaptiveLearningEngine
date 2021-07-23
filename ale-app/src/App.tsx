import React, { useEffect, useState } from "react";
import "./App.scss";
import ProblemItem from "./components/problem/problem_item";
import StudentInfo from "./components/student_info/student_info";
import { Problem } from "./models/problem";
import { Student } from "./models/student";
import { getProblems } from "./problem-service";

function App() {
  const [problems, setProblems] = useState<Problem[]>([]);

  const student = new Student("TestStudent0", 1150, -1, "Timmy");

  useEffect(() => {
    getProblems((problemList) => setProblems(problemList));
  }, []);

  return (
    <div className="App">
      <header className="App-header">ALeEn</header>
      <div className="student-info-section">
        <div className="welcome-text"> Welcome back, {student.name}!</div>
        <StudentInfo student={student} />
      </div>
      <div className="page-body">
        <div className="problem-list">
          {problems.map((problem) => (
            <ProblemItem key={problem.id} student={student} problem={problem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
