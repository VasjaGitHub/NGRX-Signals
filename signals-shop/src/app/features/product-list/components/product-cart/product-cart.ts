import { Component, computed, inject, input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { ProductItemVm } from '../../view-model/product-item.vm';
import { Ranking } from '../ranking/ranking';
import { ProductListStore } from '../../store/product-list.store';

@Component({
   selector: 'app-product-cart',
   imports: [SharedModule, Ranking],
   templateUrl: './product-cart.html',
   styleUrl: './product-cart.scss'
})
export class ProductCart {
   readonly store = inject(ProductListStore);
   readonly product = input.required<ProductItemVm>();
   readonly image = computed(() => `images/${this.product().id}.png`);

   readonly isInCart = computed(() => this.product().quantity > 0);
}