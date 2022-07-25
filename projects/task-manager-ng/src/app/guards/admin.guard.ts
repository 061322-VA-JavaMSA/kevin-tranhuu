import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authServ: AuthService, private router: Router){}

  canActivate(): boolean | UrlTree {
    if(this.authServ.principal!= null && this.authServ.principal.role=='ADMIN'){
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
