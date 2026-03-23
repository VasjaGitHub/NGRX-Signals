import { Component, inject } from '@angular/core';
import { SharedModule } from './shared.module';
import { Busy } from './components/busy/busy';
import { AppStore } from './store/app.store';

@Component({
   selector: 'app-root',
   imports: [SharedModule, Busy],
   templateUrl: './app.html',
   styleUrl: './app.scss',
})
export class App {
   readonly store = inject(AppStore);
}