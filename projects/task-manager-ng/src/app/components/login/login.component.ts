import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameInput: string;
  passwordInput: string;

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
    this.usernameInput = '';
    this.passwordInput = '';
  }

  login(){
    console.log(`Login was invoked! Username is : ${this.usernameInput}, password is: ${this.passwordInput}`);
    /*
    fetch...
    */
   this.authServ.login(this.usernameInput, this.passwordInput);
  }
}
