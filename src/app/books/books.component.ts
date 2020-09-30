import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: Book = {
    id: 1,
    title: 'There, There',
    author: 'Tommy Orange'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
