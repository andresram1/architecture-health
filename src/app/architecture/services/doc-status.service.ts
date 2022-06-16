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
    console.log("Retrieving all doc status...");
    return DOCS_MOCK;
  }

  getDocStatusByRepo(id: string): string {
    //return Finding[];
    return "hello";
  }


}
