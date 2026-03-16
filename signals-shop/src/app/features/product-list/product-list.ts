import { Component, inject } from "@angular/core";
import { ProductCart } from "./components/product-cart/product-cart";
import { ProductListStore } from "./store/product-list.store";

@Component({
   selector: 'app-product-list',
   imports: [ProductCart],
   templateUrl: './product-list.html',
   styleUrl: './product-list.scss',
   providers: [ProductListStore]
})
export class ProductList {
   readonly store = inject(ProductListStore);
}