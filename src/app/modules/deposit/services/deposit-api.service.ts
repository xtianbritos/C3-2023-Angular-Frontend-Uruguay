import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepositModel } from '../../../interfaces/deposit.model';

@Injectable({
  providedIn: 'root'
})
export class DepositApiService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  options = { headers: this.headers };

  constructor(
    private http: HttpClient,
  ) { }

  getDeposits(): void {}

  postDeposit(deposit: DepositModel): void {
    this.http.
    post<DepositModel>('http://localhost:3000/deposit/', deposit, this.options)
    .subscribe(deposit => deposit );

    this.getDeposits();
  }
}
