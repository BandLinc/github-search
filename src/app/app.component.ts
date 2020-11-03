import { GithubService } from './github.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService],
})
export class AppComponent {
  title = 'git-search';
}
