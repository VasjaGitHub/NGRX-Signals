import { Component, inject } from '@angular/core';
import { CartItem } from './components/cart-item/cart-item';
import { SharedModule } from '../../shared.module';
import { CartStore } from './store/cart.store';

@Component({
   selector: 'app-cart',
   imports: [SharedModule, CartItem],
   templateUrl: './cart.html',
   styleUrl: './cart.scss',
   providers: [CartStore]
})
export class Cart {
   readonly store = inject(CartStore);
}