import { Component, OnInit } from '@angular/core';

import { Book } from '../book';
import { BookService } from '../book.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;
  constructor(private bookService: BookService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.messageService.add(`BooksComponent: user has selected book id=${book.id}`);
  }

  getBooks(): void {
    this.bookService.getBooks().
      subscribe(response => this.books = response);
  }
}
