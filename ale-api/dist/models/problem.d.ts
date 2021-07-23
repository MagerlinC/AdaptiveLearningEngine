import { Category } from './category';
import { RatedObject } from './rated_object';
export declare class Problem implements RatedObject {
    id: string;
    initialRating: number;
    activeRating: number;
    subject: string;
    categories: Category[];
    type: string;
    problemText: string;
    problemAnswer: string;
    constructor(id: string, initialRating: number, activeRating: number, subject: string, categories: Category[], type: string, problemtext: string, problemAnswer: string);
}
