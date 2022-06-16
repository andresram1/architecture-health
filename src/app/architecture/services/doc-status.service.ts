import { Injectable } from '@angular/core';
import { Finding } from "../model/finding.model";
import {DOCS_MOCK} from "../mock/mock-docs";

@Injectable({
  providedIn: 'root'
})
export class DocStatusService {
  constructor() {
  }

  getAllDocStatus(): Finding[] {
    return DOCS_MOCK;
  }

  getDocStatusByRepo(id: string): Finding[] {
    return DOCS_MOCK;
  }

}
