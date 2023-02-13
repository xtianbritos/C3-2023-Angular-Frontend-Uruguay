import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { AuthService } from '../services/auth.service';
import { CustomerApiService } from '../../customer/services/customer-api.service';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../../../interfaces/logininterface';
import { ApiSecurityService } from '../services/api-security.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit{
  
  email = '';
  password = '';

  allCustomers: CustomerModel[] = [];

  constructor(
    private auth: AuthService,
    private customerApi: CustomerApiService,
    private securityApi: ApiSecurityService,
  ) {}

  ngOnInit(): void {
    this.customerApi.getCustomers();

    this.customerApi.getCustomers().subscribe(users => {this.allCustomers = users});
  }

  signIn(): void {
    let userExisting: CustomerModel | undefined = this.allCustomers.find(
      user =>
      user.email === this.email &&
      user.password === this.password
    );

    if(!userExisting) {
      alert('Wrong password or email');
      throw new Error('Wrong password or email');
    }
    alert('User signed in successfully')
    let user: LoginModel = {
      username: userExisting.email,
      password: userExisting.password
    }
    this.securityApi.signIn(user);

    localStorage.setItem("current-customer-id", userExisting.id);
  }

}
