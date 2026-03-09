import { Component, inject } from '@angular/core';
import { SharedModule } from './shared.module';
import { Toolbar } from "./components/toolbar/toolbar";
import { ItemsList } from "./components/items-list/items-list";
import { Cart } from "./components/cart/cart";
import { ShopStore } from './store/shop.store';

@Component({
   selector: 'app-root',
   imports: [SharedModule, Toolbar, ItemsList, Cart],
   templateUrl: './app.html',
   styleUrl: './app.scss'
})
export class App {
   readonly store = inject(ShopStore);
}