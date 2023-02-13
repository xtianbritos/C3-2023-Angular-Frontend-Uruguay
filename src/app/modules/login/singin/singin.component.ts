import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { AuthService } from '../services/auth.service';
import { CustomerApiService } from '../../customer/services/customer-api.service';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../../../interfaces/logininterface';
import { ApiSecurityService } from '../services/api-security.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit{

  allCustomers: CustomerModel[] = [];

  constructor(
    private auth: AuthService,
    private customerApi: CustomerApiService,
    private securityApi: ApiSecurityService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.customerApi.getCustomers();

    this.customerApi.getCustomers().subscribe(users => {this.allCustomers = users});
  }

  //Reactive sign in form
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });


  signIn(): void {
    let userExisting: CustomerModel | undefined = this.allCustomers.find(
      user =>
      user.email === this.loginForm.value.email &&
      user.password === this.loginForm.value.password
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
