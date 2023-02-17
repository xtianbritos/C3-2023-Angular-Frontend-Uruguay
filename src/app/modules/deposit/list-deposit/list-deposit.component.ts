import { Component } from '@angular/core';

import { RealDepositModel } from 'src/app/interfaces/deposit.model';
import { DepositApiService } from '../services/deposit-api.service';
import { CustomerModel } from '../../../interfaces/Customer.interface';
import { CustomerApiService } from '../../customer/services/customer-api.service';

@Component({
  selector: 'app-list-deposit',
  templateUrl: './list-deposit.component.html',
  styleUrls: ['./list-deposit.component.scss']
})
export class ListDepositComponent {

  listAllDeposits: RealDepositModel[] = [];
  listCustomerDeposits: RealDepositModel[] = [];

  currentCustomer:CustomerModel = {
    id: '',
    documentType: {id:'', state: false, name:''},
    document: '',
    fullName: '',
    email: '',
    phone: 0,
    password: '',
    state: false
  };

  constructor(
    private depositApi: DepositApiService,
    private customerApi: CustomerApiService,
  ) {}

  ngOnInit(): void {
    this.depositApi.getAllDeposits().subscribe(deposits => {
      this.listAllDeposits = deposits as RealDepositModel[];
    });
    
    this.customerApi.getCustomerById().subscribe(customer => {
      this.currentCustomer = customer;
      
      this.findCustomerDeposits();
    })
  }

  convertDateToShow(dateNumber: number): string {
    let date = new Date(dateNumber as number);
    
    let dateYMD = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+ date.getDate();

    let timeHMS = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();

    let dateFormated = dateYMD+" - "+timeHMS;	

    return dateFormated;
  }


  findCustomerDeposits() {
    this.listCustomerDeposits = this.listAllDeposits.filter(deposit =>
      deposit.account.customer.id === this.currentCustomer.id
    );
  }

}
