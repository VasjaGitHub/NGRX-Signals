import { Component, inject } from '@angular/core';
import { SharedModule } from './shared.module';
import { Toolbar } from "./components/toolbar/toolbar";
import { ShopStore } from './store/shop.store';
import { Cart } from './features/cart/cart';
import { ProductList } from './features/product-list/product-list';

@Component({
   selector: 'app-root',
   imports: [SharedModule, Toolbar, Cart, ProductList],
   templateUrl: './app.html',
   styleUrl: './app.scss'
})
export class App {
   readonly store = inject(ShopStore);
}