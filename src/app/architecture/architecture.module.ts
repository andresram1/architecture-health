import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoComponent } from './components/repo/repo.component';
import { MaterialModule } from "../material/material.module";
import { RepoStatusComponent } from './components/repo-status/repo-status.component';
import { DocStatusComponent } from './components/doc-status/doc-status.component';
import { SecStatusComponent } from './components/sec-status/sec-status.component';
import { ArchitectureRoutingModule } from "./architecture-routing.module";
import { StatusPipe } from './pipes/status.pipe';
import { NgApexchartsModule } from "ng-apexcharts";
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import {FormsModule} from "@angular/forms";
import {docStatusHttpInterceptorProvider} from "./interceptors/doc-status-http-interceptor";
import {HttpClientModule} from "@angular/common/http";
import {repoStatusHttpInterceptorProvider} from "./interceptors/repo-status-http-interceptor";
import {secStatusHttpInterceptorProvider} from "./interceptors/sec-status-http-interceptor";


@NgModule({
  declarations: [
    RepoListComponent,
    RepoComponent,
    RepoStatusComponent,
    DocStatusComponent,
    SecStatusComponent,
    StatusPipe,
    PieChartComponent
  ],
  exports: [
    RepoListComponent
  ],
  imports: [
      CommonModule,
      MaterialModule,
      ArchitectureRoutingModule,
      NgApexchartsModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [
    docStatusHttpInterceptorProvider, repoStatusHttpInterceptorProvider, secStatusHttpInterceptorProvider
  ]
})
export class ArchitectureModule { }
