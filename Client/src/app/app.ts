import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './models/person.model';
import { patchState, signalState } from '@ngrx/signals';

@Component({
   selector: 'app-root',
   imports: [RouterOutlet, CommonModule],
   templateUrl: './app.html',
   styleUrl: './app.css'
})
export class App {
   protected readonly title = signal('Client');
   readonly person = signalState<Person>({
      id: 1,
      name: 'John Doe',
      address: {
         street: '123 Main St',
         city: 'Anytown',
         state: 'CA'
      }
   });

   readonly personStreet = computed(() =>
      this.person().address.street
   )

   readonly personStreet_1 = this.person.address.street;

   method() {
      patchState(this.person, {
         name: 'Jane Done'
      });
   }

   method_1() {
      patchState(this.person, p => ({
         id: p.id + 1,
      }));
   }

   method_2() {
      patchState(this.person, p => ({
         address: {
            ...p.address,
            street: '456 Elm St'
         }
      }));
   }
}