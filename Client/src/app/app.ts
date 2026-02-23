import { Component } from '@angular/core';
import { QuestionPresenter } from "./components/question-presenter/question-presenter";
import { SharedModule } from './shared.module';
import { Toolbar } from "./components/toolbar/toolbar";
import { Progress } from "./components/progress/progress";
import { Done } from "./components/done/done";
import { Busy } from './components/busy/busy';

@Component({
   selector: 'app-root',
   imports: [SharedModule, QuestionPresenter, Toolbar, Progress, Done, Busy],
   templateUrl: './app.html',
   styleUrl: './app.css'
})
export class App {
   title = 'ngrx-quiz';
}