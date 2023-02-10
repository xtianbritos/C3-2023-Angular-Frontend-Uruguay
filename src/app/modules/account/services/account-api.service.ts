import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountModel } from '../../../interfaces/account.model';
import { AccountTypeModel } from 'src/app/interfaces/account-type.model';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  constructor(private http: HttpClient) { }

  getAccountTypes(): Observable<AccountTypeModel[]> {
    return this.http.get<AccountTypeModel[]>('http://localhost:3000/account/type/all');
  }
}
