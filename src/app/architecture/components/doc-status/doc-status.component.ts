import {Component, OnInit} from '@angular/core';
import {Finding} from "../../model/finding.model";
import {PieChartData} from "../../model/pie-chart.model";
import {DocStatusService} from "../../services/doc-status.service";
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-doc-status',
  templateUrl: './doc-status.component.html',
  styleUrls: ['./doc-status.component.css']
})
export class DocStatusComponent implements OnInit {

  docStatus: Finding[] = [];
  pieChartData: PieChartData;
  repo_id: string;

  constructor(private activatedRoute: ActivatedRoute,
              private docStatusService: DocStatusService) { }

  ngOnInit(): void {
    this.repo_id = this.activatedRoute.snapshot.paramMap.get('id')!;
  }

  getSummary(): number {
    this.docStatus = this.docStatusService.getDocStatusByRepo(this.repo_id);
    const findings = this.docStatus.filter(b => {
      if (b.findings != undefined) {
        return b.findings?.length > 0;
      }
    }).length;
    const total = this.docStatus.length;
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
    return this.docStatus.filter(b => {
      if (b.findings != undefined) {
        return b.findings?.length > 0;
      }
    });
  }

}
