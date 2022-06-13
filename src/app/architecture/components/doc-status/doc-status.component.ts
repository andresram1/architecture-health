import { Component, OnInit } from '@angular/core';
import {Finding} from "../../model/finding.model";
import {DOCS_MOCK} from "../../mock/mock-docs";

@Component({
  selector: 'app-doc-status',
  templateUrl: './doc-status.component.html',
  styleUrls: ['./doc-status.component.css']
})
export class DocStatusComponent implements OnInit {

  docStatus: Finding[] = DOCS_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

  getSummary(): number {

    const findings = this.docStatus.filter(b => {
      if (b.findings != undefined) {
        return b.findings?.length > 0;
      }
    }).length;
    const total = this.docStatus.length;
    const formula = (1 - findings/total)*100;
    console.log(formula)
    return formula
  }

  getFindings(): Finding[] {
    // console.log(this.branchStatus.filter(b => b.findings.length > 0));
    return this.docStatus.filter(b => {
      if (b.findings != undefined) {
        return b.findings?.length > 0;
      }
    });
  }

}
