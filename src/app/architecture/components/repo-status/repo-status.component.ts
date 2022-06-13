import { Component, OnInit } from '@angular/core';
import {Finding} from "../../model/finding.model";
import {BRANCHES} from "../../mock/mock-branches";

@Component({
  selector: 'app-repo-status',
  templateUrl: './repo-status.component.html',
  styleUrls: ['./repo-status.component.css']
})
export class RepoStatusComponent implements OnInit {

  branchStatus: Finding[] = BRANCHES;

  constructor() { }

  ngOnInit(): void {
  }

  getSummary(): number {

    const findings = this.branchStatus.filter(b => {
      if (b.findings != undefined) {
        return b.findings?.length > 0;
      }
    }).length;
    const total = this.branchStatus.length;
    const formula = (1 - findings/total)*100;
    console.log(formula)
    return formula
  }

  getFindings(): Finding[] {
    // console.log(this.branchStatus.filter(b => b.findings.length > 0));
    return this.branchStatus.filter(b => {
      if (b.findings != undefined) {
        return b.findings?.length > 0;
      }
    });
  }

}
