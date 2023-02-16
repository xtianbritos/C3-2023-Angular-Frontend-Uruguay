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

  constructor(
    private http: HttpClient,
  ) { }

  getAccountsByCustomer(customerId: string): Observable<AccountModel[]> {
    return this.http.get<AccountModel[]>('http://localhost:3000/account/customer/'+customerId);
  }

  getAccountTypes(): Observable<AccountTypeModel[]> {
    return this.http.get<AccountTypeModel[]>('http://localhost:3000/account/type/all');
  }
}
