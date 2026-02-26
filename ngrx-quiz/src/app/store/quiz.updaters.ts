import { PartialStateUpdater } from "@ngrx/signals";
import { QuizSlice } from "./quiz.slice";

export function addAnswer(index: number): PartialStateUpdater<QuizSlice> {
   return state => ({
      answears: [...state.answears, index]
   });
}

export function resetQuiz(): PartialStateUpdater<QuizSlice> {
   return () => ({
      answears: []
   });
}