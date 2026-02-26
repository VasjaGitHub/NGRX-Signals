import { Component, signal } from '@angular/core';
import { ItemCard } from "../item-card/item-card";
import { sampleProductItems } from './view-model/product-item.vm';

@Component({
   selector: 'app-items-list',
   imports: [ItemCard],
   templateUrl: './items-list.html',
   styleUrl: './items-list.scss'
})
export class ItemsList {
   readonly products = signal(sampleProductItems);
}
