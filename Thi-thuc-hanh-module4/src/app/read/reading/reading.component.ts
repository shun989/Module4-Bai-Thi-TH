import { Component, OnInit } from '@angular/core';
import {Product} from "../../../../../../Module4-Angular-Bai7-Service-Router/angular-product-manager/src/app/model/product";
import {ProductService} from "../../../../../../Module4-Angular-Bai7-Service-Router/angular-product-manager/src/app/service/product.service";
import {Book} from "../../book";
import {BookService} from "../../service/book.service";
import {Hero} from "../../../../../../Module4-Angular-Bai7-Service-Router/angular-tour-of-heroes/src/app/hero";

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {
  searchText: any;
  book: Book = {};
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
  addNewBook() {
    this.books.push(this.book);
  }

  deleteBook(index: number): void {
    if (confirm('Are you sure?')) {
      this.books.splice(index, 1);
    }
  }

}
