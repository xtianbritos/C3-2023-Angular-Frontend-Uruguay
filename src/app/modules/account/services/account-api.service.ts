import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountModel } from '../../../interfaces/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  constructor(private http: HttpClient) { }

  getAccountTypes(): Observable<AccountModel[]> {
    return this.http.get<AccountModel[]>('http://localhost:3000/account/type/all');
  }
}
