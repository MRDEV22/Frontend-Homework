import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { BookDetails } from '../../interfaces/book-response';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookdetails!: BookDetails;
  rating!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService
  ) {  }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;
    
    this.booksService.getBookDetails( id ).subscribe( book => {
      console.log(book);
      this.bookdetails = book;
      this.rating = Number(book.rating);
    })
  }

}
