import { Component, computed, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ShopStore } from '../../store/shop.store';

@Component({
   selector: 'app-toolbar',
   imports: [SharedModule],
   templateUrl: './toolbar.html',
   styleUrl: './toolbar.scss',
   host: {
      '(keydown.enter)': 'onEnter()'
   }
})
export class Toolbar {
   onEnter() {
      throw new Error('Method not implemented.');
   }
   readonly store = inject(ShopStore);
}