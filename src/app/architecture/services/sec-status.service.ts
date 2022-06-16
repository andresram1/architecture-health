import {Injectable} from '@angular/core';
import {Finding} from "../model/finding.model";
import {SECURITY_MOCK} from "../mock/mock-security";

@Injectable({
  providedIn: 'root'
})
export class SecStatusService {
  constructor() {
  }

  getAllSecStatus(): Finding[] {
    return SECURITY_MOCK;
  }

  getSecStatusByRepo(id: string): Finding[] {
    return SECURITY_MOCK;
  }
}
