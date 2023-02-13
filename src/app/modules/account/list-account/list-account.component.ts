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

  constructor(
    private auth: AuthService,
    private accountApi: AccountApiService,
  ) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accountApi.getAccountsByCustomer().subscribe(accounts => {
      this.listAccounts = accounts;
    });
  }

}
