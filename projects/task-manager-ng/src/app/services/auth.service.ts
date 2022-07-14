import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  principal: User;

  constructor() { }

  login(username: string, password: string){

  }

  logout(){
    
  }
}
