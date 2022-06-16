import {Injectable} from '@angular/core';
import {Finding} from "../model/finding.model";
import {SECURITY_MOCK} from "../mock/mock-security";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SecStatusService {
  constructor() {
  }

  getAllSecStatus(): Observable<Finding[]> {
    return of(SECURITY_MOCK);
  }

  getSecStatusByRepo(id: string): Observable<Finding[]> {
    return of(SECURITY_MOCK);
  }
}
