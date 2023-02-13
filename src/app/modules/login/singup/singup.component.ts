import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { CustomerApiService } from '../../customer/services/customer-api.service';
import { DocumentTypeModel, CustomerModel } from '../../../interfaces/Customer.interface';
import { RegisterModel } from '../../../interfaces/register.interface';
import { AccountTypeModel } from 'src/app/interfaces/account-type.model';
import { AccountApiService } from '../../account/services/account-api.service';
import { ApiSecurityService } from '../services/api-security.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit{
  
  // email = '';
  // password = '';
  // fullName = '';
  // document = '';
  // phone = '';
  // accountTypeSelected = ''
  // documentTypeSelected = ''
  
  listDocumentTypes: DocumentTypeModel[] = [];
  listAccountTypes: AccountTypeModel[] = [];
 
  constructor(
    private router: Router,
    private auth: AuthService,
    private customerApi: CustomerApiService,
    private accountApi: AccountApiService,
    private securityApi: ApiSecurityService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.customerApi.getDocumentTypes().subscribe(types => {this.listDocumentTypes = types});
    this.accountApi.getAccountTypes().subscribe(types => {this.listAccountTypes = types});
  }


  //Reactive sign up form
  registerForm = this.formBuilder.group({
    accountTypeId: ['', [Validators.required]],
    documentTypeId: ['', [Validators.required]],
    document: ['', [Validators.required, Validators.minLength(8)]],
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });
  

  signUp(): void {
    let user: RegisterModel = this.registerForm.value as RegisterModel;

    this.securityApi.signUp(user);

    this.customerApi.getCustomers().subscribe(users => {this.auth.signedUpUsers = users});

    this.router.navigate(['login','signin']);

  }

}
