import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../services/customer-api.service';
import { AuthService } from '../../login/services/auth.service';
import { CustomerModel } from '../../../interfaces/Customer.interface';
import { ApiSecurityService } from '../../login/services/api-security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-info-customer',
  templateUrl: './list-info-customer.component.html',
  styleUrls: ['./list-info-customer.component.scss']
})
export class ListInfoCustomerComponent implements OnInit{

  customer: CustomerModel  = {
    id: '',
    documentType: {id: '', name: '', state: true},
    document: '',
    fullName: '',
    email: '',
    phone: 0,
    password: '',
    state: false
  };

  // currentId = localStorage.getItem('current-customer-id');
 
  constructor(
    private customerApi: CustomerApiService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.customerApi.getCustomerById().subscribe(c => {this.customer = c});
  }

  sendCustomerToEdit() {
    this.customerApi.getCustomerById().subscribe(customer => {
      this.authService.currentCustomer = customer;

      this.router.navigate(['customer','edit']);
    });
  }
}
