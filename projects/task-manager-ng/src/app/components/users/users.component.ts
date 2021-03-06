import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.enum';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userSer: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userSer.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      err => {
        console.log(err);
      }
    );
  }
}
