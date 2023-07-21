import {Injectable} from '@angular/core';
import {BRANCHES} from "../mock/mock-branches";
import {Observable, of, take} from 'rxjs';
import {Summary} from "../model/summary.model";
import {catchError, retry} from "rxjs/operators";
import {GenericService} from "./generic-service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RepoStatusService extends GenericService {
  private theUrl = 'api/repo-status';  // URL to web api

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getAllRepoStatus(): Observable<Summary<string>> {
    const data =  of(BRANCHES);
    return data;
  }

  getRepoStatusByRepo(id: string): Observable<Summary<string>> {
    return this.http.get<Summary<string>>(this.theUrl+"/"+id)
      .pipe(
        take(1),
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
}
