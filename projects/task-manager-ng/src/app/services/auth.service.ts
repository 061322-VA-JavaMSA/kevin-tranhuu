import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  principal: User;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    console.log(`${username} + ${password}`);
    /*
      POST - /auth
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        body - username and password
    */

    // preparing our credentials to be in the body as form params
    let credentials = `username=${username}&password=${password}`;

    // environment allows us to easily switch between dev url and prod url
    return this.http.post(`${environment.apiUrl}/auth`, credentials, {
      headers: {
        // we're leveraging form params and not exposing credentials to the url
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials: true // allows us to use HTTP Session cookie
    }).pipe(
      map(
        response => { 
          this.principal = response as User;
          console.log(this.principal);
        }
      )
    );
  }

  logout() {
    this.principal = null;
    return this.http.delete(`${environment.apiUrl}/auth`, {
      withCredentials: true
    });
  }
}
