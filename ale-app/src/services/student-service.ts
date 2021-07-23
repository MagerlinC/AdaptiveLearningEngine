import { Student } from "../models/student";
import { getRequest } from "./service-configs";

const endpoint = "http://localhost:3000/students";

export const getStudents = (onResultFunc: (sList: Student[]) => void): void => {
  getRequest<Student[]>(endpoint).then((res) => onResultFunc(res));
};
