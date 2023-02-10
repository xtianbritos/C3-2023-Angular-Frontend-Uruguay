import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { AuthService } from '../../login/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  constructor(private atuh: AuthService, private http: HttpClient) { }

  getCustomers(): void{
    this.http
    .get<CustomerModel[]>('http://localhost:3000/customer/')
    .subscribe(users => users.map(user => this.atuh.signedUpUsers.push(user)));
  }
}
