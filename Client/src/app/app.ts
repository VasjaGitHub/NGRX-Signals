import { Component, inject } from '@angular/core';
import { QuestionPresenter } from "./components/question-presenter/question-presenter";
import { SharedModule } from './shared.module';
import { Toolbar } from "./components/toolbar/toolbar";
import { Progress } from "./components/progress/progress";
import { Done } from "./components/done/done";
import { QuizStore } from './store/quiz.store';
import { JsonPipe } from '@angular/common';

@Component({
   selector: 'app-root',
   imports: [SharedModule, QuestionPresenter, Toolbar, Progress, Done, JsonPipe],
   templateUrl: './app.html',
   styleUrl: './app.css',
   providers: [QuizStore]
})
export class App {
   title = 'ngrx-quiz';
   readonly store = inject(QuizStore);
}