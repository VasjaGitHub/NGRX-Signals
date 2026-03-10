import { Route } from "@angular/router";
import { QuizStore } from "./features/quiz/store/quiz.store";

export const routes: Route[] = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
   { path: 'home', loadComponent: () => import('./features/home/home') },
   {
      path: 'quiz',
      loadComponent: () => import('./features/quiz/quiz'),
      providers: [QuizStore]
   }
]