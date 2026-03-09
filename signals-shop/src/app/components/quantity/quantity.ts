import { Component, input, output } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
   selector: 'app-quantity',
   imports: [SharedModule],
   templateUrl: './quantity.html',
   styleUrl: './quantity.scss'
})
export class Quantity {
   readonly amount = input.required();

   readonly increment = output();
   readonly decrement = output();
}