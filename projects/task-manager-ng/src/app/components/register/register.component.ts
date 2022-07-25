import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role.enum';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User;
  passwordVerification: String;
  errorMessage: String;

  constructor(private userServ: UserService, private router:Router) { }

  ngOnInit(): void {
    this.newUser = new User(0, '', '', Role.BASIC_USER);
  }

  register(){
    this.errorMessage = '';

    if(this.passwordVerification == this.newUser.password){
      this.userServ.createUser(this.newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        () => {
          this.errorMessage = 'Unable to create user.'
        }
      );
    } else {
      this.errorMessage = 'Passwords do not match.'
    }
  }
}
