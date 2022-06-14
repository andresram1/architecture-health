import { Component, OnInit } from '@angular/core';
import {Finding} from "../../model/finding.model";
import {BRANCHES} from "../../mock/mock-branches";
import {PieChartData} from "../../model/pie-chart.model";
import {PieChartComponent} from "../pie-chart/pie-chart.component";

@Component({
  selector: 'app-repo-status',
  templateUrl: './repo-status.component.html',
  styleUrls: ['./repo-status.component.css']
})
export class RepoStatusComponent implements OnInit {

  branchStatus: Finding[] = BRANCHES;
  pieChartData: PieChartData;

  constructor() {

  }

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
    //console.log(formula)

    const newSerie: PieChartData = {
      series: [formula, (100-formula)],
      labels: ["Current Health", "Gap"]
    };
    this.pieChartData = newSerie;

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
