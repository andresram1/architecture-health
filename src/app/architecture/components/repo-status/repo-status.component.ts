import {Component, OnInit} from '@angular/core';
import {Finding} from "../../model/finding.model";
import {PieChartData} from "../../model/pie-chart.model";
import {ActivatedRoute} from '@angular/router';
import {RepoStatusService} from "../../services/repo-status.service";
import {Summary} from "../../model/summary.model";


@Component({
  selector: 'app-repo-status',
  templateUrl: './repo-status.component.html',
  styleUrls: ['./repo-status.component.css']
})
export class RepoStatusComponent implements OnInit {

  branchStatus: Summary;
  pieChartData: PieChartData;
  repo_id: string;

  findings: number;
  total: number;
  formula: number;
  finding_list: Finding[];

  constructor(private activatedRoute: ActivatedRoute,
              private repoStatusService: RepoStatusService) { }

  ngOnInit(): void {
    this.repo_id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.repoStatusService.getRepoStatusByRepo(this.repo_id)
      .subscribe(repoStatusData => {
        this.branchStatus = repoStatusData;
        this.finding_list = repoStatusData.finding_list.filter(b => {
          if (b.findings != undefined) {
            return b.findings?.length > 0;
          }
        });
        this.findings = repoStatusData.total_issues;
        this.total = repoStatusData.total_files;
        this.formula  = (1 - repoStatusData.total_issues / repoStatusData.total_files)*100;
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
