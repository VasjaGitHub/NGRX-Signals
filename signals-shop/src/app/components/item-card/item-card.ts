import { Component, computed, inject, input } from '@angular/core';
import { Ranking } from "../ranking/ranking";
import { SharedModule } from '../../shared.module';
import { ProductItemVm } from '../items-list/view-model/product-item.vm';
import { ShopStore } from '../../store/shop.store';

@Component({
   selector: 'app-item-card',
   imports: [SharedModule, Ranking],
   templateUrl: './item-card.html',
   styleUrl: './item-card.scss'
})
export class ItemCard {
   store = inject(ShopStore);
   readonly product = input.required<ProductItemVm>();
   readonly image = computed(() => `images/${this.product().id}.png`);

   readonly isInCart = computed(() => this.product().quantity > 0);
}
