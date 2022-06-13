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


@NgModule({
  declarations: [
    RepoListComponent,
    RepoComponent,
    RepoStatusComponent,
    DocStatusComponent,
    SecStatusComponent,
    StatusPipe
  ],
  exports: [
    RepoListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ArchitectureRoutingModule
  ]
})
export class ArchitectureModule { }
