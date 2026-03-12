import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { QuestionPresenter } from './components/question-presenter/question-presenter';
import { Toolbar } from '../../components/toolbar/toolbar';
import { Progress } from '../../components/progress/progress';
import { Done } from './components/done/done';
import { Flag } from '../../components/flag/flag';
import { QuizStore } from './store/quiz.store';
import { AppStore } from '../../store/app.store';

@Component({
   selector: 'app-quiz-page',
   imports: [SharedModule, QuestionPresenter, Toolbar, Progress, Done, Flag],
   templateUrl: './quiz.html',
   styleUrl: './quiz.scss',
   //providers: [QuizStore] // If You Want to QuizStore destroyed
})
export default class QuizPage {
   readonly appStore = inject(AppStore);
   readonly store = inject(QuizStore);
}