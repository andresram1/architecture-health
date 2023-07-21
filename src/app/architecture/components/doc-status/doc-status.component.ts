import {Component, OnInit} from '@angular/core';
import {Finding} from "../../model/finding.model";
import {PieChartData} from "../../model/pie-chart.model";
import {DocStatusService} from "../../services/doc-status.service";
import {ActivatedRoute} from '@angular/router';
import {Summary} from "../../model/summary.model";


@Component({
  selector: 'app-doc-status',
  templateUrl: './doc-status.component.html',
  styleUrls: ['./doc-status.component.css']
})
export class DocStatusComponent implements OnInit {

  docStatus: Summary<string>;
  pieChartData: PieChartData;
  repo_id: string;

  findings: number;
  total: number;
  formula: number;
  finding_list: Finding<string>[];

  constructor(private activatedRoute: ActivatedRoute,
              private docStatusService: DocStatusService) { }

  ngOnInit(): void {
    this.repo_id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.docStatusService.getDocStatusByRepo(this.repo_id)
      .subscribe(docs => {
        this.docStatus = docs;
        this.finding_list = docs.finding_list.filter(b => {
          if (b.details != undefined) {
            return b.details?.length > 0;
          }
        });
        this.findings = docs.total_issues;
        this.total = docs.total_files;
        this.formula  = (1 - docs.total_issues / docs.total_files)*100;
        this.pieChartData = {
          series: [this.formula, (100 - this.formula)],
          labels: ["Current Health", "Gap"]
        };
      });
  }

  getSummary(): number {
    return this.formula
  }

  getFindings(): Finding<string>[] {
    return this.finding_list;
  }
}
