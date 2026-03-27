import { getState, patchState, signalStoreFeature, SignalStoreFeature, withHooks } from "@ngrx/signals";
import { QuizSlice } from "../features/quiz/store/quiz.slice";
import { effect } from "@angular/core";

export function withLocalStorage(key: string): SignalStoreFeature {
   return signalStoreFeature(
      withHooks(store => ({
         onInit: () => {
            const stateJson = localStorage.getItem(key);
            if (stateJson) {
               const state = JSON.parse(stateJson) as QuizSlice;
               patchState(store, state);
            }

            effect(() => {
               const state = getState(store);
               const stateJson = JSON.stringify(state);
               localStorage.setItem(key, stateJson);
            })
         }
      }))
   );
}