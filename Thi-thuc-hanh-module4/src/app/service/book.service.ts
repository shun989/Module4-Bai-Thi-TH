import { Injectable } from '@angular/core';
import {Book} from "../book";
import {Product} from "../../../../../Module4-Angular-Bai7-Service-Router/angular-product-manager/src/app/model/product";
import {Hero} from "../../../../../Module4-Angular-Bai7-Service-Router/angular-tour-of-heroes/src/app/hero";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[] = [
    {
      "id": 0,
      "name": "Elon Musk",
      "read": true
    },
    {
      "id": 1,
      "name": "Getting Things Done",
      "read": true
    },
    {
      "id": 2,
      "name": "Long Kinh",
      "read": true
    },
    {
      "id": 3,
      "name": "Sapiens",
      "read": false
    },
    {
      "id": 4,
      "name": "Toi di Code dao",
      "read": false
    },
    {
      "id": 5,
      "name": "Hoc nghe",
      "read": false
    },
    {
      "id": 6,
      "name": "Clean Code",
      "read": false
    }
  ];

  constructor() { }

  getAll() {
    return this.books;
  }

  saveProduct(book: Book) {
    this.books.push(book);
  }



}
