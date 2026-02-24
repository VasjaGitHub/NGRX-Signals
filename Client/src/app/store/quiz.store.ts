import { signalStore, withComputed, withState } from "@ngrx/signals";
import { initialQuizSlice } from "./quiz.slice";
import { computed } from "@angular/core";

export const QuizStore = signalStore(
   { providedIn: 'root' },
   withState(initialQuizSlice),
   withComputed((store) => {
      const currentQuestionIndex = computed(() => store.answears().length);
      const isDone = computed(() => store.answears().length === store.questions().length);
      const currentQuestion = computed(() => store.questions()[currentQuestionIndex()]);
      const questionsCount = computed(() => store.questions().length);
      
      return {
         currentQuestionIndex,
         isDone,
         currentQuestion,
         questionsCount
      }
   })
);