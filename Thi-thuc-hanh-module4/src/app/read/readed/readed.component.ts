import { Component, OnInit } from '@angular/core';
import {Book} from "../../book";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-readed',
  templateUrl: './readed.component.html',
  styleUrls: ['./readed.component.css']
})
export class ReadedComponent implements OnInit {
  searchText: any;
  books: Book[] = [];
  constructor(private bookService: BookService) { }
  displayedColumns: any[] = ['id', 'name'];
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.books = this.bookService.getAll(
    );
  }

  deleteBook(index: number): void {
    if (confirm('Are you sure?')) {
      this.books.splice(index, 1);
    }
  }

}
