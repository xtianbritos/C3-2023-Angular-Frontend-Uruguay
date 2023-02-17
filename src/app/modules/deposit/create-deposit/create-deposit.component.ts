import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/interfaces/account.model';
import { AccountTypeModel } from '../../../interfaces/account-type.model';
import { AccountApiService } from '../../account/services/account-api.service';
import { Router } from '@angular/router';
import { DepositApiService } from '../services/deposit-api.service';
import { DepositModel } from '../../../interfaces/deposit.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-deposit',
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.scss']
})
export class CreateDepositComponent implements OnInit{
    
  listAccount:AccountModel[] = []
  
  currentCustomerId = localStorage.getItem('current-customer-id');

  constructor(
    private accountApi: AccountApiService,
    private router: Router,
    private depositApi: DepositApiService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.accountApi.getAccountsByCustomer(this.currentCustomerId!).subscribe(types => {this.listAccount = types});
  }

  //Reactive deposit form
  depositForm = this.formBuilder.group({
    amount: [0, [Validators.required, Validators.min(1)]],
    account: ['', [Validators.required]]
  });

  createDeposit(): void {
    let newDeposit:DepositModel = {
      account: this.depositForm.value.account!,
      amount: this.depositForm.value.amount!
    }

    this.depositApi.postDeposit(newDeposit);
    this.router.navigate(['account','list-accounts']);
  }


}


