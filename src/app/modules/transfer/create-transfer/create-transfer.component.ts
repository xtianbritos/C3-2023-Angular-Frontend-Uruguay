import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountModel } from 'src/app/interfaces/account.model';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { TransferModel } from 'src/app/interfaces/transfer.model';
import { AccountApiService } from '../../account/services/account-api.service';
import { CustomerApiService } from '../../customer/services/customer-api.service';
import { TransferApiService } from '../services/transfer-api.service';

@Component({
  selector: 'app-create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.scss']
})
export class CreateTransferComponent {

  listOfCustomers:CustomerModel[] = [];
  
  listAccount:AccountModel[] = [];

  listAccountIncome:AccountModel[] | undefined = undefined;
  
  incomeCustomerSearched: boolean = false;

  errorMessage: string | undefined = undefined;

  currentCustomerId = localStorage.getItem('current-customer-id');

  constructor(
    private transferApi: TransferApiService,
    private router: Router,
    private accountApi: AccountApiService,
    private customerApi: CustomerApiService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.accountApi.getAccountsByCustomer(this.currentCustomerId!).subscribe(types => {this.listAccount = types});
  }


  //Reactive transfer form
  transferForm = this.formBuilder.group({
    outcome: ['', [Validators.required]],
    documentIncome: ['', [Validators.required]],
    income: ['', [Validators.required]],
    reason: ['', [Validators.required]],
    amount: [0, [Validators.required, Validators.min(1)]],
  });


  createTransfer(): void {
    let newTransfer:TransferModel = this.transferForm.value as TransferModel;

    this.transferApi.postTransfer(newTransfer);
    this.router.navigate(['account','list-accounts']);
  }

  searchAccountsByDocument(): void {
    this.errorMessage = undefined;
    
    this.customerApi.getCustomers()
    .subscribe(customers => {
      this.listOfCustomers = customers;

      let customerExisting = this.listOfCustomers.find(customer => customer.document === this.transferForm.controls.documentIncome.value);

      if(customerExisting != undefined) {
        this.accountApi.getAccountsByCustomer(customerExisting.id)
        .subscribe(accounts => {
          this.listAccountIncome = accounts;
          this.incomeCustomerSearched = true;
        })
      }
      else {
        this.errorMessage = 'There is no customer with that document';
      } 
    })
  }


}
