import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.enum';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedInUser: User;

  constructor(private authServ:AuthService) { }

  ngOnInit(): void {
    // checking for loggedUser
    // this.loggedInUser = new User(1, 'kev', '', Role.ADMIN);
    this.loggedInUser = this.authServ.principal;
  }

}
