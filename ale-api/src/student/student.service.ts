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
          const objToPush = doc.data();
          objToPush.id = doc.id;
          students.push(objToPush);
        });
        return students;
      });
    return students;
  }
}
