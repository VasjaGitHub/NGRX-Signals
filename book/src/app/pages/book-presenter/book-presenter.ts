import { Component, inject, input, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { BookPresenterStore } from './store/book-presenter.store';
import { BOOKS_COLLECTION } from '../../data/books-collection';

@Component({
   selector: 'app-book-presenter',
   imports: [],
   templateUrl: './book-presenter.html',
   styleUrl: './book-presenter.scss',
   providers: [BookPresenterStore]
})
export default class BookPresenter {
   readonly id = input.required({ transform: numberAttribute });
   store = inject(BookPresenterStore);

   readonly router = inject(Router);

   next() {
      this.router.navigate(['books', Math.min(this.id() + 1, BOOKS_COLLECTION.length - 1)]);
   }

   previous() {
      this.router.navigate(['books', Math.max(this.id() - 1, 0)]);
   }

   constructor() {
      this.store.setBookId(this.id);
   }
}