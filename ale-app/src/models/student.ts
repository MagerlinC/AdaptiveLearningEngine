import { RatedObject } from "./rated_object";

export class Student implements RatedObject {
  id: string;
  initialRating: number;
  activeRating: number;
  name: string;
  constructor(
    id: string,
    initialRating: number,
    activeRating: number,
    name: string
  ) {
    this.id = id;
    this.initialRating = initialRating;
    this.activeRating = activeRating;
    this.name = name;
  }
}
