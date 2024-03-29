import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {DOCS_MOCK} from "../mock/mock-docs";
import {Observable, of, take, throwError} from 'rxjs';
import {catchError, retry} from "rxjs/operators";
import {Summary} from "../model/summary.model";
import {GenericService} from "./generic-service";

@Injectable({
  providedIn: 'root'
})
export class DocStatusService extends GenericService {
  private theUrl = 'api/doc-status';  // URL to web api

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getAllDocStatus(): Observable<Summary<string>> {
    const data =  of(DOCS_MOCK);
    return data;
  }

  getDocStatusByRepo(id: string): Observable<Summary<string>> {
    return this.http.get<Summary<string>>(this.theUrl+"/"+id)
      .pipe(
        take(1),
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
}
