import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role.enum';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // this field will be an attribute on the component directive
  // <app-nav [loggedInUser]="value"></app-nav>
  @Input() loggedInUser: User;

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    // checking for loggedUser
    // this.loggedInUser = new User(1, 'kev', '', Role.ADMIN);
    // this.loggedInUser = this.authServ.principal;
  }

  logout() {
    console.log('logout()')
    this.authServ.logout();
    this.router.navigate(['login']);
  }
}
