import {Component, OnInit} from '@angular/core';
import {Finding} from "../../model/finding.model";
import {PieChartData} from "../../model/pie-chart.model";
import {ActivatedRoute} from '@angular/router';
import {RepoStatusService} from "../../services/repo-status.service";


@Component({
  selector: 'app-repo-status',
  templateUrl: './repo-status.component.html',
  styleUrls: ['./repo-status.component.css']
})
export class RepoStatusComponent implements OnInit {

  branchStatus: Finding[] = [];
  pieChartData: PieChartData;
  repo_id: string;

  constructor(private activatedRoute: ActivatedRoute,
              private repoStatusService: RepoStatusService) { }

  ngOnInit(): void {
    this.repo_id = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  getSummary(): number {
    this.repoStatusService.getRepoStatusByRepo(this.repo_id)
      .subscribe(data => this.branchStatus = data);
    const findings = this.branchStatus.filter(b => {
      if (b.findings != undefined) {
        return b.findings?.length > 0;
      }
    }).length;
    const total = this.branchStatus.length;
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
    return this.branchStatus.filter(b => {
      if (b.findings != undefined) {
        return b.findings?.length > 0;
      }
    });
  }

}
