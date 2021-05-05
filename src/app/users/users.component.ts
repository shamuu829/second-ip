import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  username: any;
  repo: Repo[]; 
  reponame: any;

    constructor(private myService: UserserviceService , private router : Router) {
    }
  
    searchName() {
      this.myService.searchUser(this.username)
      this.user = this.myService.user
      this.myService.allRepo(this.username)
      this.repo = this.myService.repo
      this.username = ''

    }
    findRepoName(){
      this.myService.repoSearchName(this.reponame)
      this.repo = this.myService.reposByName
      this.reponame = ''
    }
    // searchRepo() {
    //   localStorage.setItem("reponame", this.reponame);
    // this.router.navigate(['/repositories']);
    // this.reponame = ''
    // }
    ngOnInit() {
      this.myService.searchUser("shamuu829")
      this.user = this.myService.user

      this.myService.allRepo("shamuu829")
      this.repo = this.myService.repo
    }
}
 

