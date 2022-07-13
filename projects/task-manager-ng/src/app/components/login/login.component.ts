import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameInput: string;
  passwordInput: string;

  constructor() { }

  ngOnInit(): void {
    this.usernameInput = '';
    this.passwordInput = '';
  }

  login(){
    console.log(`Login was invoked! Username is : ${this.usernameInput}, password is: ${this.passwordInput}`);
  }
}
