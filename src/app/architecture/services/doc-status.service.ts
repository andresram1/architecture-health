import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {DOCS_MOCK} from "../mock/mock-docs";
import {Observable, of, throwError} from 'rxjs';
import {catchError, retry} from "rxjs/operators";
import {Summary} from "../model/summary.model";

@Injectable({
  providedIn: 'root'
})
export class DocStatusService {
  private heroesUrl = 'api/doc-status';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getAllDocStatus(): Observable<Summary> {
    const data =  of(DOCS_MOCK);
    return data;
  }

  getDocStatusByRepo(id: string): Observable<Summary> {
    return this.http.get<Summary>(this.heroesUrl+"/"+id)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
