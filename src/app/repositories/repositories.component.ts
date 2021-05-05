import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repo } from '../repo';
import { RepoName } from '../repo-name';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})

export class RepositoriesComponent implements OnInit {
  reponame: any;
  repo: Repo[] ;
  reposByName: RepoName[] ;
  username: any;
  constructor(private searchService: UserserviceService, private router: Router) {
  }
findRepoName(){
    this.searchService.repoSearchName(this.reponame)
    this.repo = this.searchService.reposByName
    this.reponame = ''
  }
  findProfile() {
    localStorage.setItem("username", this.username);
    this.router.navigate(['/users']);
    this.username = ''
  }
  
  ngOnInit()  {
  
  }

}
