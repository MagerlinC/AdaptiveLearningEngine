import { Injectable } from '@nestjs/common';
import { dbRef } from '../firebase';
import { Student } from './student';

@Injectable()
export class StudentService {
  async getStudents(): Promise<Student[]> {
    const students = await dbRef
      .collection('students')
      .get()
      .then((snapshot) => {
        const students = [];
        snapshot.forEach((doc) => {
          students.push(doc.data());
        });
        return students;
      });
    return students;
  }
}
