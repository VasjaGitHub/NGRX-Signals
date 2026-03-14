import { Component, inject } from '@angular/core';
import { CartItem } from "./components/cart-item/cart-item";
import { SharedModule } from '../../shared.module';
import { ShopStore } from '../../store/shop.store';

@Component({
   selector: 'app-cart',
   imports: [SharedModule, CartItem],
   templateUrl: './cart.html',
   styleUrl: './cart.scss'
})
export class Cart {
   readonly store = inject(ShopStore);
}
