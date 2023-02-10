import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { AuthService } from '../../login/services/auth.service';
import { DocumentTypeModel } from '../../../interfaces/Customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
    // ,'Authorization': this.basic
  });
  
  options = { headers: this.headers };

  constructor(private atuh: AuthService, private http: HttpClient) { }

  getCustomers(): void{
    this.http
    .get<CustomerModel[]>('http://localhost:3000/customer/')
    .subscribe(users => users.map(user => this.atuh.signedUpUsers.push(user)));
  }

  postCustomer(customer: Object): void {
    this.http.post<CustomerModel>('http://localhost:3000/security/customer', customer, this.options);
    this.getCustomers();
  }

  getDocumentTypes(): void{
    this.http
    .get<DocumentTypeModel[]>('http://localhost:3000/customer/document/type')
    .subscribe(types => types.map(type => this.atuh.documentTypes.push(type)));
  }
}
