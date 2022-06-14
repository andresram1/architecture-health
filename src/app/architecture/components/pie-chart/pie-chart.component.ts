import { Component, Input, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels, ApexFill, ApexGrid,
  ApexLegend, ApexMarkers,
  ApexNonAxisChartSeries, ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis
} from 'ng-apexcharts';

import { PieChartData } from "../../model/pie-chart.model";
import { colors } from "../../utils/colors";

type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: any;
  markers: ApexMarkers;
  grid: ApexGrid;
  labels: string[];
  responsive: ApexResponsive[];
  fill: ApexFill;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() pieChartData: PieChartData;
  public apexPieChartOptions!: Partial<ChartOptions> | any;
  //public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.initChart();
  }

  private calculateHealth(): string {
    let the_color: string;
    if (this.pieChartData.series[0] < 80) {
      if (this.pieChartData.series[0] >= 40 && this.pieChartData.series[0] < 80) {
        the_color = colors.YELLOW;
      } else {
        the_color = colors.PINK;
      }
    } else {
      the_color = colors.GREEN;
    }
    return the_color;
  }

  public initChart(): void {
    const the_legend: ApexLegend = {
      position: 'bottom',
      itemMargin: {
        horizontal: 5,
        vertical: 30
      },
    };

    this.apexPieChartOptions = {
      series: this.pieChartData.series,
      chart: {
        type: 'donut',
        height: 400
      },
      colors: [this.calculateHealth(), colors.LIGHT_BLUE],
      legend: the_legend,
      labels: this.pieChartData.labels
    };
  }
}
