import {Injectable} from '@angular/core';
import {Finding} from "../model/finding.model";
import {BRANCHES} from "../mock/mock-branches";

@Injectable({
  providedIn: 'root'
})
export class RepoStatusService {
  constructor() {
  }

  getAllRepoStatus(): Finding[] {
    return BRANCHES;
  }

  getRepoStatusByRepo(id: string): Finding[] {
    return BRANCHES;
  }
}
