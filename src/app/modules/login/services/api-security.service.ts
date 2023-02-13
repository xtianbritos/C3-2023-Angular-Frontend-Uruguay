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
    .subscribe(token => token);

    this.customerApi.getCustomers();
  }
  signIn(user: LoginModel): void {
    this.http
    .post<JwtModel>('http://localhost:3000/security/signin', user, this.options)
    .subscribe(token => {
      localStorage.setItem('jwt', token.jwt);
      this.router.navigate(['customer', 'customer']);
    });
  }
  
  signOut(): void {

    if(localStorage.getItem('jwt') != null) {
      
      let token = {
        jwt: localStorage.getItem('jwt')
      }

      this.http.post<boolean>('http://localhost:3000/security/signout', token, this.options)
      .subscribe(res => {
        if(res) {
          localStorage.removeItem('jwt');
          localStorage.removeItem('current-customer-id');
          
          this.router.navigate(['login','signin']);
        }
      });
    }
    

  }
}
