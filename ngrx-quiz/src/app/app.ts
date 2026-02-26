import { Component, inject } from '@angular/core';
import { QuestionPresenter } from "./components/question-presenter/question-presenter";
import { SharedModule } from './shared.module';
import { Toolbar } from "./components/toolbar/toolbar";
import { Progress } from "./components/progress/progress";
import { Done } from "./components/done/done";
import { QuizStore } from './store/quiz.store';

@Component({
   selector: 'app-root',
   imports: [SharedModule, QuestionPresenter, Toolbar, Progress, Done],
   templateUrl: './app.html',
   styleUrl: './app.css'
})
export class App {
   readonly store = inject(QuizStore);
   title = 'ngrx-quiz';
}