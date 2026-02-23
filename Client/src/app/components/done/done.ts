import { Component, computed, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
   selector: 'app-done',
   imports: [SharedModule],
   templateUrl: './done.html',
   styleUrl: './done.css',
})
export class Done {
   readonly correct = signal(3);
   readonly total = signal(8);
   readonly score = computed(() => this.correct() / this.total());
}
