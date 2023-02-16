import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/services/auth.service';
import { AccountModel } from '../../../interfaces/account.model';
import { AccountApiService } from '../services/account-api.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent implements OnInit{

  listAccounts: AccountModel[] = [];

  currentCustomerId = localStorage.getItem('current-customer-id');

  constructor(
    private accountApi: AccountApiService,
  ) {}

  ngOnInit(): void {
    this.accountApi.getAccountsByCustomer(this.currentCustomerId!).subscribe(accounts => {
      this.listAccounts = accounts;
    });
  }

}
