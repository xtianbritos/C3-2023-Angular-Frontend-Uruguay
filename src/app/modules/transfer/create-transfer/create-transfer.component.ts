import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountModel } from 'src/app/interfaces/account.model';
import { TransferModel } from 'src/app/interfaces/transfer.model';
import { AccountApiService } from '../../account/services/account-api.service';
import { TransferApiService } from '../services/transfer-api.service';

@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.scss']
})
export class CreateTransferComponent {

  money: number = 0;
  
  listAccount:AccountModel[] = []
  
  accountSelected = ''


  constructor(
    private transferApi: TransferApiService,
    private router: Router,
    private accountApi: AccountApiService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.accountApi.getAccountsByCustomer().subscribe(types => {this.listAccount = types});
  }


  //Reactive sign up form
  transferForm = this.formBuilder.group({
    outcome: ['', [Validators.required]],
    income: ['', [Validators.required]],
    reason: ['', [Validators.required]],
    amount: [0, [Validators.required]],
  });


  createTransfer(): void {
    let newTransfer:TransferModel = this.transferForm.value as TransferModel;

    this.transferApi.postTransfer(newTransfer);
    this.router.navigate(['account','list-accounts']);
  }


}
