import { Component, OnInit } from '@angular/core';

import { Repo } from '../../model/repo.model';
import {REPOS} from "../../mock/mock-repos";

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  repos: Repo[] = REPOS;

  constructor() { }

  ngOnInit(): void {
  }

}
