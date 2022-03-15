import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksResponse } from '../interfaces/books-response';
import { BookDetails } from '../interfaces/book-response';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl: string = 'https://api.itbook.store/1.0/';

  constructor(
    private http: HttpClient
  ) { }

  getBooks():Observable<BooksResponse>{
    console.log('Request API')
    return this.http.get<BooksResponse>( `${ this.baseUrl }search/angular`);
  }

  getBookDetails(id: string):Observable<BookDetails>{
    return this.http.get<BookDetails>(`${ this.baseUrl }books/${ id }`);
  } 
}
