import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterModel } from '../../../interfaces/register.interface';
import { Observable } from 'rxjs';
import { JwtModel } from '../../../interfaces/jwt.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiSecurityService {
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };


  constructor(private http: HttpClient) { }

  signUp(user: RegisterModel): void {
    this.http.
    post<JwtModel>('http://localhost:3000/security/signup', user, this.options)
    .subscribe(token => localStorage.setItem('jwt', token.jwt));
  }
}
