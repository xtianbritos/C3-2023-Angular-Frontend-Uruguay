import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountModel } from '../../../interfaces/account.model';
import { AccountTypeModel } from 'src/app/interfaces/account-type.model';
import { AuthService } from '../../login/services/auth.service';
import { CustomerModel } from '../../../interfaces/Customer.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  customerId = localStorage.getItem("current-customer-id");

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  getAccountsByCustomer(): Observable<AccountModel[]> {
    return this.http.get<AccountModel[]>('http://localhost:3000/account/customer/'+this.customerId);
  }

  getAccountTypes(): Observable<AccountTypeModel[]> {
    return this.http.get<AccountTypeModel[]>('http://localhost:3000/account/type/all');
  }
}
