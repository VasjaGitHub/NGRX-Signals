import { Component, computed, input } from '@angular/core';
import { CartItemVm } from '../../view-model/cart-item.vm';
import { SharedModule } from '../../../../shared.module';
import { Quantity } from "../../../quantity/quantity";

@Component({
   selector: 'app-cart-item',
   imports: [SharedModule, Quantity],
   templateUrl: './cart-item.html',
   styleUrl: './cart-item.scss'
})
export class CartItem {
   readonly item = input.required<CartItemVm>();
   readonly image = computed(() => `images/${this.item().id}.png`);
}
