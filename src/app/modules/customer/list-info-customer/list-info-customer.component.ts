import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerApiService } from '../services/customer-api.service';
import { AuthService } from '../../login/services/auth.service';
import { CustomerModel } from '../../../interfaces/Customer.interface';

@Component({
  selector: 'app-list-info-customer',
  templateUrl: './list-info-customer.component.html',
  styleUrls: ['./list-info-customer.component.scss']
})
export class ListInfoCustomerComponent implements OnInit{

  customer: CustomerModel = <CustomerModel>this.auth.signedUpUser;
  
  constructor(
    private router: Router,
    private api: CustomerApiService,
    private auth: AuthService,
  ) {}

  ngOnInit(): void {
    this.api.getCustomers();
  }
  
  redirectToMain() {
    this.router.navigate(['main']);
  }

}
