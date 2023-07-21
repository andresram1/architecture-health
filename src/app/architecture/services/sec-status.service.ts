import {Injectable} from '@angular/core';
import {SECURITY_MOCK} from "../mock/mock-security";
import {Observable, of, take} from "rxjs";
import {Summary} from "../model/summary.model";
import {GenericService} from "./generic-service";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {AdvancedFinding} from "../model/finding.model";

@Injectable({
  providedIn: 'root'
})
export class SecStatusService extends GenericService {
  private theUrl = 'api/sec-status';  // URL to web api

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getAllSecStatus(): Observable<Summary<AdvancedFinding>> {
    return of(SECURITY_MOCK);
  }

  getSecStatusByRepo(id: string): Observable<Summary<AdvancedFinding>> {
    return this.http.get<Summary<AdvancedFinding>>(this.theUrl+"/"+id)
      .pipe(
        take(1),
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }
}
