import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignedInGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (localStorage.getItem('jwt')) {
      alert('You are already logged in')
      return this.router.navigate(['not-found']).then(() => false);
    }
    return true;
  }
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (localStorage.getItem('jwt')) {
        alert('You are already logged in')
        return this.router.navigate(['not-found']).then(() => false);
      }
      return true;
  }
  
}
