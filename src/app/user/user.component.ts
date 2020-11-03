import { ReposComponent } from './../repos/repos.component';
import { GithubService } from './../github.service';
import { Component, OnInit, Output } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: any = [];
  @Output() repos: any = [];
  username: string;
  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe((user) => {
      console.log(user);
      this.user = user;
    });
    this._githubService.getRepos().subscribe((repos) => {
      this.repos = repos;
    });
  }

  searchUser() {
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe((user) => {
      this.user = user;
    });
    this._githubService.getRepos().subscribe((repos) => {
      this.repos = repos;
    });
  }
  ngOnInit(): void {}

  public getRepos() {
    return this.repos;
  }
}
