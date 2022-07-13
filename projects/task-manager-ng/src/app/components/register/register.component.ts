import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.enum';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: User;

  constructor() { }

  ngOnInit(): void {
    this.newUser = new User(0, '', '', Role.BASIC_USER);
  }

  register(){
    console.log(`User to be registered:`);
    console.log(this.newUser);
  }
}
