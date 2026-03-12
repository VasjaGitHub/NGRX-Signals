import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { QuizStore } from '../../store/quiz.store';

@Component({
   selector: 'app-question-presenter',
   imports: [SharedModule],
   templateUrl: './question-presenter.html',
   styleUrl: './question-presenter.scss',
})
export class QuestionPresenter {
   readonly store = inject(QuizStore);
};