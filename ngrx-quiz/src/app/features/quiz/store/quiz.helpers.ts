import { Question } from "../../../models/question.model";

export function getCorrectCount(answers: number[], question: Question[]): number {
   let res = 0;
   for (let i = 0; i < answers.length; i++) {
      if ((question.length > i) && (answers[i] === question[i].correctIndex)) {
         res++;
      }
   }
   return res;
}