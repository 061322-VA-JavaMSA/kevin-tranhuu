import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameInput: string;
  passwordInput: string;
  errorMessage: string;

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usernameInput = '';
    this.passwordInput = '';
    this.errorMessage = '';
  }

  login(){
   this.authServ.login(this.usernameInput, this.passwordInput).subscribe(
    () => {
      this.router.navigate(['']);
    },
    () => {
      this.errorMessage = 'Unable to login.';
    }
   );
  }
}
