"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Problem = void 0;
class Problem {
    constructor(id, initialRating, activeRating, subject, categories, type, problemtext, problemAnswer) {
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
exports.Problem = Problem;
//# sourceMappingURL=problem.js.map