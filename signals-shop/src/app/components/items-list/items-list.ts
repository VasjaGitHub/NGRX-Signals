import { Component, inject, signal } from '@angular/core';
import { ItemCard } from "../item-card/item-card";
import { ShopStore } from '../../store/shop.store';

@Component({
   selector: 'app-items-list',
   imports: [ItemCard],
   templateUrl: './items-list.html',
   styleUrl: './items-list.scss'
})
export class ItemsList {
   readonly store = inject(ShopStore);
}
