import { Component, computed, inject } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { QuizStore } from '../../store/quiz.store';

@Component({
   selector: 'app-progress',
   imports: [SharedModule],
   templateUrl: './progress.html',
   styleUrl: './progress.css',
})
export class Progress {
   readonly store = inject(QuizStore);

   readonly value = this.store.currentQuestionIndex;
   readonly max = this.store.questionsCount;
   readonly ratio = computed(() => this.value() / this.max());
}
