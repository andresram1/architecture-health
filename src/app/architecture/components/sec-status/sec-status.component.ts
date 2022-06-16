import {Component, OnInit} from '@angular/core';
import {Finding} from "../../model/finding.model";
import {PieChartData} from "../../model/pie-chart.model";
import {ActivatedRoute} from '@angular/router';
import {SecStatusService} from "../../services/sec-status.service";

@Component({
  selector: 'app-sec-status',
  templateUrl: './sec-status.component.html',
  styleUrls: ['./sec-status.component.css']
})
export class SecStatusComponent implements OnInit {

  secStatus: Finding[] = [];
  pieChartData: PieChartData;
  repo_id: string;

  constructor(private activatedRoute: ActivatedRoute,
              private secStatusService: SecStatusService) { }

  ngOnInit(): void {
    this.repo_id = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  getSummary(): number {
    this.secStatus = this.secStatusService.getSecStatusByRepo(this.repo_id);
    const findings = this.secStatus.filter(b => {
      if (b.advanceFindings != undefined) {
        return b.advanceFindings?.length > 0;
      }
    }).length;
    const total = this.secStatus.length;
    const formula = (1 - findings/total)*100;
    //console.log(formula)
    this.pieChartData = {
      series: [formula, (100 - formula)],
      labels: ["Current Health", "Gap"]
    };
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
