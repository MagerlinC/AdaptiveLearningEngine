import { RatedObject } from '../problem-solution/rated_object';

export class Student implements RatedObject {
  id: string;
  initialRating: number;
  activeRating: number;
  name: string;
}
