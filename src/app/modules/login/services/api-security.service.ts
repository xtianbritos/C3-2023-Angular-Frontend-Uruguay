import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterModel } from '../../../interfaces/register.interface';
import { Observable } from 'rxjs';
import { JwtModel } from '../../../interfaces/jwt.interface';
import { LoginModel } from '../../../interfaces/logininterface';
import { CustomerApiService } from '../../customer/services/customer-api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiSecurityService {
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };


  constructor(
    private http: HttpClient,
    private customerApi: CustomerApiService,
    private router: Router,
  ) { }

  signUp(user: RegisterModel): void {
    this.http.
    post<JwtModel>('http://localhost:3000/security/signup', user, this.options)
    .subscribe(token => console.log(token));

    this.customerApi.getCustomers();
  }
  signIn(user: LoginModel): void {
    this.http
    .post<JwtModel>('http://localhost:3000/security/signin', user, this.options)
    .subscribe(token => {
      localStorage.setItem('jwt', token.jwt);
      this.router.navigate(['customer']);
    });
  }
  
  signOut(): void {
    localStorage.removeItem('jwt');
    this.router.navigate(['signin']);
  }
}
