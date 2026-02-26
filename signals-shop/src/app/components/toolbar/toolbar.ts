import { Component, computed, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
   selector: 'app-toolbar',
   imports: [SharedModule],
   templateUrl: './toolbar.html',
   styleUrl: './toolbar.scss',
   // host: {
   //    '(keydown.enter)': 'onEnter()'
   // }
})
export class Toolbar {
   readonly searchValue = signal('');

   readonly cartCount = signal(2);
   readonly cartActive = computed(() => this.cartCount() > 0);
}
