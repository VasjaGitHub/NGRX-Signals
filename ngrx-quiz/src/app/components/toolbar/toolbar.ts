import { Component, input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
   selector: 'app-toolbar',
   imports: [SharedModule],
   templateUrl: './toolbar.html',
   styleUrl: './toolbar.scss'
})
export class Toolbar {
   readonly caption = input.required<string>();

   readonly icon = input<string>('');
}