import { Component, signal } from '@angular/core';
import { CartItemVm } from './view-model/cart-item.vm';
import { CartItem } from "./components/cart-item/cart-item";
import { SharedModule } from '../../shared.module';

@Component({
   selector: 'app-cart',
   imports: [SharedModule, CartItem],
   templateUrl: './cart.html',
   styleUrl: './cart.scss'
})
export class Cart {
   readonly cartItems = signal<CartItemVm[]>([
      {
         id: 'async-flow-controller',
         name: 'Async Flow Controller',
         quantity: 4,
         price: 49.99,
         total: 199.96
      },
      {
         id: 'injection-pack',
         name: 'Injection Pack',
         quantity: 2,
         price: 29.99,
         total: 59.98
      },
   ]);

   readonly subtotal = signal<number>(259.94);
   readonly tax = signal<number>(20.80);
   readonly total = signal<number>(280.74);
}
