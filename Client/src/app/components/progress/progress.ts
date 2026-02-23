import { Component, computed, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
   selector: 'app-progress',
   imports: [SharedModule],
   templateUrl: './progress.html',
   styleUrl: './progress.css',
})
export class Progress {
   readonly value = signal(4);
   readonly max = signal(9);
   readonly ratio = computed(() => this.value() / this.max());
}
