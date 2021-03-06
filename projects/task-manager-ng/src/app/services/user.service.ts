import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor injection
  constructor(private http: HttpClient, private auth: AuthService) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${environment.apiUrl}/users`, {
      headers: {
        'Authorization': `${this.auth.token}`
      }
    }).pipe(
      map(
        response => response as User[]
      )
    );
  }

  createUser(newUser: User): Observable<User> {
    return this.http.post(`${environment.apiUrl}/users`, newUser, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    ).pipe(
      map(
        response => response as User
      )
    );
  }
}
