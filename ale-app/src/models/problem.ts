import { Category } from "./category";
import { RatedObject } from "./rated_object";

export class Problem implements RatedObject {
  id: string;
  initialRating: number;
  activeRating: number;
  subject: string;
  categories: Category[];
  type: string;
  problemText: string;
  problemAnswer: string;

  constructor(
    id: string,
    initialRating: number,
    activeRating: number,
    subject: string,
    categories: Category[],
    type: string,
    problemtext: string,
    problemAnswer: string
  ) {
    this.id = id;
    this.initialRating = initialRating;
    this.activeRating = activeRating;
    this.subject = subject;
    this.categories = categories;
    this.type = type;
    this.problemText = problemtext;
    this.problemAnswer = problemAnswer;
  }
}
