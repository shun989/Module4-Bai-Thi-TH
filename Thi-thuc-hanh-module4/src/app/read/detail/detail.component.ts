// import { Component, OnInit } from '@angular/core';
// import {Book} from "../../book";
// import {BookService} from "../../service/book.service";
// import {ActivatedRoute, Router} from "@angular/router";
//
// @Component({
//   selector: 'app-detail',
//   templateUrl: './detail.component.html',
//   styleUrls: ['./detail.component.css']
// })
// export class DetailComponent implements OnInit {
//
//   book: Book;
//
//   constructor(private router: Router,
//               private route: ActivatedRoute,
//               private location: Location,
//               private bookService: BookService) { }
//
//   ngOnInit(): void {
//     this.getBook();
//   }
//
//   getBook():void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.bookService.getBook(id)
//       .subscribe(book => this.book = book);
//   }
//
//   goBack(): void {
//     this.location.back();
//   }
//
// }
