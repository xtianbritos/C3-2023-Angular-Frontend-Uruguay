import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { GoogleUserModel } from 'src/app/interfaces/google-user.model';
import { LoginModel } from 'src/app/interfaces/logininterface';
import { AuthService } from '../services/auth.service';
import { ApiSecurityService } from '../services/api-security.service';
import { CustomerApiService } from '../../customer/services/customer-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  myCustomer: CustomerModel = {
    id: '',
    documentType: {id: '', name: '', state: false},
    document: '',
    fullName: '',
    email: '',
    phone: 0,
    password: '',
    state: false
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private securityApi: ApiSecurityService,
    private customerApi: CustomerApiService,
  ) {}

  ngOnInit(): void {}


  signUpGoogle() {
    this.auth.signUpGoogle()
    .then(response => {
      this.auth.dataFromGoogle.displayName = response.user.displayName;
      this.auth.dataFromGoogle.email = response.user.email;
      this.auth.dataFromGoogle.phoneNumber = response.user.phoneNumber;
      this.auth.dataFromGoogle.photoURL = response.user.photoURL;
      
      this.router.navigate(['login','signup']);
    });
  }

  signInGoogle(): void {
    this.auth.signUpGoogle()
    .then(response => {
      this.auth.dataFromGoogle.email = response.user.email;

      try {
        this.customerApi.getCustomerByEmail()
        .subscribe(customer => {
          this.myCustomer = customer;
  
          alert('User signed in successfully')
          let user: LoginModel = {
            username: this.myCustomer.email,
            password: this.myCustomer.password
          }
          this.securityApi.signIn(user);
      
          localStorage.setItem("current-customer-id", this.myCustomer.id);
          
        });
        
      } catch (error) {
        alert('There is no customer associated with that account');
      }

    })
  }
  
}
