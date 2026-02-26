import { Component, signal } from '@angular/core';
import { SharedModule } from './shared.module';
import { ItemsList } from "./components/items-list/items-list";
import { Cart } from "./components/cart/cart";
import { Toolbar } from "./components/toolbar/toolbar";

@Component({
   selector: 'app-root',
   imports: [SharedModule, Toolbar, ItemsList, Cart],
   templateUrl: './app.html',
   styleUrl: './app.scss'
})
export class App {
   readonly isCartShowing = signal<boolean>(true);
}
