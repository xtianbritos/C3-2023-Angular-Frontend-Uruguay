import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignedInGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.auth.userLogged) {
        alert('You are already logged in')
        return this.router.navigate(['/not-found']).then(() => false);
      }
      return true;
  }
  
}
