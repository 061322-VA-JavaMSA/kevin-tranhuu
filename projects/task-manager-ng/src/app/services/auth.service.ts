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
  token: String;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
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
      observe: 'response'
    }).pipe(
      map(
        response => { 
          this.principal = response.body as User;
          this.token =  response.headers.get('Authorization') || '';
        }
      )
    );
  }

  logout() {
    this.principal = null;
    this.token = '';
  }
}
