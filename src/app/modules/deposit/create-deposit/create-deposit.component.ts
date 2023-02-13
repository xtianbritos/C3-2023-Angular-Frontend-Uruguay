import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/interfaces/account.model';
import { AccountTypeModel } from '../../../interfaces/account-type.model';
import { AccountApiService } from '../../account/services/account-api.service';
import { Router } from '@angular/router';
import { DepositApiService } from '../services/deposit-api.service';
import { DepositModel } from '../../../interfaces/deposit.model';

@Component({
  selector: 'app-create-deposit',
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.scss']
})
export class CreateDepositComponent implements OnInit{
  
  money: number = 0;
  
  listAccount:AccountModel[] = []
  
  accountSelected = ''
  


  constructor(
    private accountApi: AccountApiService,
    private router: Router,
    private depositApi: DepositApiService,
  ) {}

  ngOnInit(): void {
    this.accountApi.getAccountsByCustomer().subscribe(types => {this.listAccount = types});
  }

  createDeposit(): void {
    let newDeposit:DepositModel = {
      account: this.accountSelected,
      amount: this.money
    }

    this.depositApi.postDeposit(newDeposit);
    this.router.navigate(['account','list-accounts']);
  }


}


