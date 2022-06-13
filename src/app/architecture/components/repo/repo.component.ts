import { Component, OnInit, Input } from '@angular/core';
import { Repo } from "../../model/repo.model";

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  @Input() repo: Repo;

  constructor() {
    console.log('1. Constructor...');
  }

  ngOnInit(): void {
  }

}
