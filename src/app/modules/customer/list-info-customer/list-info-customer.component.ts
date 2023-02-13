import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { AuthService } from '../../login/services/auth.service';
import { CustomerModel } from '../../../interfaces/Customer.interface';

@Component({
  selector: 'app-list-info-customer',
  templateUrl: './list-info-customer.component.html',
  styleUrls: ['./list-info-customer.component.scss']
})
export class ListInfoCustomerComponent implements OnInit{

  customer: CustomerModel = this.auth.signedUpUser as CustomerModel;

  currentId = localStorage.getItem('current-customer-id');
  
  constructor(
    private api: CustomerApiService,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {

    this.api.getCustomers().subscribe(users => {
      this.auth.signedUpUsers = users;
      this.customer = this.findCurrentUser();
    });

  }

  findCurrentUser(): CustomerModel {
    let currentUser = this.auth.signedUpUsers.find(user => user.id === this.currentId);

    if(currentUser) {
      return currentUser
    }
    throw new Error('Customer not found');
  }

}
