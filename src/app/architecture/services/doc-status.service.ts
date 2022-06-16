import {Injectable} from '@angular/core';
import {Finding} from "../model/finding.model";
import {DOCS_MOCK} from "../mock/mock-docs";
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocStatusService {
  constructor() {
  }

  getAllDocStatus(): Observable<Finding[]> {
    const data =  of(DOCS_MOCK);
    return data;
  }

  getDocStatusByRepo(id: string): Observable<Finding[]> {
    const data =  of(DOCS_MOCK);
    return data;
  }

}
