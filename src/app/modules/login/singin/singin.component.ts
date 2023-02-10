import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { AuthService } from '../services/auth.service';
import { CustomerApiService } from '../../customer/services/customer-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit{
  
  email = '';
  password = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private customerApi: CustomerApiService,
  ) {}

  ngOnInit(): void {
    this.customerApi.getCustomers();
  }

  redirect() {
    this.router.navigate(['signup']);
  }

  signIn(): void {
    let userExisting = this.auth.signedUpUsers.find(user =>
      user.email === this.email &&
      user.password === this.password
    );

    if(!userExisting) {
      alert('Wrong password or email');
      throw new Error('Wrong password or email');
    }
    alert('User signed in successfully')
    this.auth.userLogged = true;
    this.auth.signedUpUser = userExisting;
    this.router.navigate(['customer']);
  }

}
