import { Component, computed, inject } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { QuizStore } from '../../store/quiz.store';

@Component({
   selector: 'app-done',
   imports: [SharedModule],
   templateUrl: './done.html',
   styleUrl: './done.css',
})
export class Done {
   readonly store = inject(QuizStore);

   readonly correct = this.store.correctCount;
   readonly total = this.store.questionsCount;
   readonly score = computed(() => this.correct() / this.total());
}
