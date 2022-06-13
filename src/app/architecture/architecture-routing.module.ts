import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RepoListComponent} from "./components/repo-list/repo-list.component";
import {DocStatusComponent} from "./components/doc-status/doc-status.component";
import {RepoStatusComponent} from "./components/repo-status/repo-status.component";
import {SecStatusComponent} from "./components/sec-status/sec-status.component";

const routes: Routes = [
  {
    path: '',
    component: RepoListComponent
  },
  {
    path: 'doc-status/:id',
    component: DocStatusComponent
  },
  {
    path: 'repo-status/:id',
    component: RepoStatusComponent
  },
  {
    path: 'sec-status/:id',
    component: SecStatusComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchitectureRoutingModule { }
