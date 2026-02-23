import { Component, signal } from '@angular/core';
import { Question } from '../../models/question.model';
import { SharedModule } from '../../shared.module';

@Component({
   selector: 'app-question-presenter',
   imports: [SharedModule],
   templateUrl: './question-presenter.html',
   styleUrl: './question-presenter.css',
})
export class QuestionPresenter {
   readonly question = signal<Question>({
      caption: ['Red', 'Green'],
      answers: ['Red', 'Green', 'Blue', 'Yellow'],
      correctIndex: 3
   });
}
