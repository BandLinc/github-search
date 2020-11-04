import { UserComponent } from './../user/user.component';
import { GithubService } from './../github.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
//Configure ReposComponent class
export class ReposComponent implements OnInit {
  @Input() repos: any = [];
  constructor(private _githubService: GithubService) {
    this._githubService.getRepos().subscribe((repos) => {
      this.repos = repos;
    });
  }
  ngOnInit(): void {}
}
