import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { AuthService } from '../../login/services/auth.service';
import { DocumentTypeModel } from '../../../interfaces/Customer.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };


  constructor(
    private auth: AuthService,
    private http: HttpClient,
  ) { }


  getCustomers(): Observable<CustomerModel[]>{
    return this.http
    .get<CustomerModel[]>('http://localhost:3000/customer/', this.options);
  }

  getCustomerById(): Observable<CustomerModel>{
    return this.http
    .get<CustomerModel>('http://localhost:3000/customer/'+localStorage.getItem('current-customer-id'),
      this.options);
  }

  getCustomerByEmail(): Observable<CustomerModel>{
    return this.http
    .get<CustomerModel>('http://localhost:3000/customer/email/'+this.auth.dataFromGoogle.email,
      this.options);
  }


  postCustomer(customer: Object): void {
    this.http.post('http://localhost:3000/security/customer', customer, this.options)
    .subscribe(user => user);

    this.getCustomers();
  }

  getDocumentTypes(): Observable<DocumentTypeModel[]> {
    return this.http
    .get<DocumentTypeModel[]>('http://localhost:3000/customer/document/type', this.options);
  }
}
