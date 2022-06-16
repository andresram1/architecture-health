import {Injectable} from '@angular/core';
import {Finding} from "../model/finding.model";
import {BRANCHES} from "../mock/mock-branches";
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoStatusService {
  constructor() {
  }

  getAllRepoStatus(): Observable<Finding[]> {
    const data =  of(BRANCHES);
    return data;
  }

  getRepoStatusByRepo(id: string): Observable<Finding[]> {
    const data =  of(BRANCHES);
    return data;
  }
}
