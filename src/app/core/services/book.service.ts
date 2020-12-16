import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BookInterface} from '../../areas/interfaces/book.interface';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

// TODO Injectable
@Injectable({
  providedIn: 'root'
})

export class BookService {
  private booksUrl = 'assets/api/books.json';
  constructor(private http: HttpClient) { }
  getBooks(): Observable<BookInterface[]> {
    return this.http.get<BookInterface[]>(this.booksUrl)
      // TODO Pipe()
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
