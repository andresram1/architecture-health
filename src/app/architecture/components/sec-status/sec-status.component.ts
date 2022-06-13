import { Component, OnInit } from '@angular/core';
import {Finding} from "../../model/finding.model";
import {SECURITY_MOCK} from "../../mock/mock-security";

@Component({
  selector: 'app-sec-status',
  templateUrl: './sec-status.component.html',
  styleUrls: ['./sec-status.component.css']
})
export class SecStatusComponent implements OnInit {

  secStatus: Finding[] = SECURITY_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

  getSummary(): number {

    const findings = this.secStatus.filter(b => {
      if (b.advanceFindings != undefined) {
        return b.advanceFindings?.length > 0;
      }
    }).length;
    const total = this.secStatus.length;
    const formula = (1 - findings/total)*100;
    console.log(formula)
    return formula
  }

  getFindings(): Finding[] {
    // console.log(this.branchStatus.filter(b => b.findings.length > 0));
    return this.secStatus.filter(b => {
      if (b.advanceFindings != undefined) {
        return b.advanceFindings?.length > 0;
      }
    });
  }

}
