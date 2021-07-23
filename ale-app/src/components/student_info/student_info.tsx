import React, { FunctionComponent } from "react";
import { Student } from "../../models/student";
import "./student_info.scss";
import ProfileIcon from "../../assets/man.svg";

type StudentInfoProps = {
  student: Student;
};

export const StudentInfo: FunctionComponent<StudentInfoProps> = ({
  student,
}) => {
  return (
    <div className="student-info">
      <div className="student-header">
        <div className="student-name">{student.name}</div>
        <img className="student-img" alt="profile-icon" src={ProfileIcon} />
      </div>

      <div className="student-rating">
        <div className="rating-desc-text"> Your Rating is:</div>
        <div className="rating-value-text">
          {student.activeRating > 0
            ? student.activeRating
            : student.initialRating}
        </div>
      </div>
    </div>
  );
};
export default StudentInfo;
