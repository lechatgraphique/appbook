import {Component, Input, OnInit} from '@angular/core';
import {BookService} from '../../../core/services/book.service';
import {BookInterface} from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-lists',
  templateUrl: './book-lists.component.html'
})

export class BookListsComponent implements OnInit{
  @Input() bgColor: string;
  books: BookInterface[] = [];
  errorMessage: string;
  constructor(private bookService: BookService) {
  }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: products => {
        this.books = products;
      },
      error: err => this.errorMessage = err
    });
  }
}
