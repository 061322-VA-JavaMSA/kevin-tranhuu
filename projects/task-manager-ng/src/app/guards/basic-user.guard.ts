import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BasicUserGuard implements CanActivate {
  constructor(private authServ: AuthService, private router: Router){}
  
  canActivate(): boolean | UrlTree {
      if(this.authServ.principal!= null){
        return true;
      } else {
        return this.router.parseUrl('/login');
      }
  }
  
}
