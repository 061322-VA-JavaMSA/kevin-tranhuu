import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.enum';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedInUser: User;

  constructor() { }

  ngOnInit(): void {
    // checking for loggedUser
    // this.loggedInUser = new User(1, 'kev', '', Role.ADMIN);
  }

}
