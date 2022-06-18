import {Component, OnInit} from '@angular/core';
import {Finding} from "../../model/finding.model";
import {PieChartData} from "../../model/pie-chart.model";
import {ActivatedRoute} from '@angular/router';
import {SecStatusService} from "../../services/sec-status.service";
import {Summary} from "../../model/summary.model";

@Component({
  selector: 'app-sec-status',
  templateUrl: './sec-status.component.html',
  styleUrls: ['./sec-status.component.css']
})
export class SecStatusComponent implements OnInit {

  secStatus: Summary;
  pieChartData: PieChartData;
  repo_id: string;

  findings: number;
  total: number;
  formula: number;
  finding_list: Finding[];

  constructor(private activatedRoute: ActivatedRoute,
              private secStatusService: SecStatusService) { }

  ngOnInit(): void {
    this.repo_id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.secStatusService.getSecStatusByRepo(this.repo_id)
      .subscribe(secStatusData => {
        this.secStatus = secStatusData;
        this.finding_list = secStatusData.finding_list.filter(b => {
          if (b.advanceFindings != undefined) {
            return b.advanceFindings?.length > 0;
          }
        });;
        this.findings = secStatusData.total_issues;
        this.total = secStatusData.total_files;
        this.formula  = (1 - secStatusData.total_issues / secStatusData.total_files)*100;
        this.pieChartData = {
          series: [this.formula, (100 - this.formula)],
          labels: ["Current Health", "Gap"]
        };
      });
  }

  getSummary(): number {
    return this.formula
  }

  getFindings(): Finding[] {
    return this.finding_list;
  }

}
