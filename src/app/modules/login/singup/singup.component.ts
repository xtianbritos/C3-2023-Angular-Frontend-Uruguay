import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { CustomerApiService } from '../../customer/services/customer-api.service';
import { DocumentTypeModel, CustomerModel } from '../../../interfaces/Customer.interface';
import { RegisterModel } from '../../../interfaces/register.interface';
import { AccountTypeModel } from 'src/app/interfaces/account-type.model';
import { AccountApiService } from '../../account/services/account-api.service';
import { ApiSecurityService } from '../services/api-security.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit{
  
  email = '';
  password = '';
  fullName = '';
  document = '';
  phone = '';
  accountTypeSelected = ''
  documentTypeSelected = ''
  
  listDocumentTypes: DocumentTypeModel[] = [];
  listAccountTypes: AccountTypeModel[] = [];
 
  constructor(
    private router: Router,
    private auth: AuthService,
    private customerApi: CustomerApiService,
    private accountApi: AccountApiService,
    private securityApi: ApiSecurityService,
  ) {}

  ngOnInit(): void {
    this.customerApi.getDocumentTypes().subscribe(types => {this.listDocumentTypes = types});
    this.accountApi.getAccountTypes().subscribe(types => {this.listAccountTypes = types});
  }
  

  signUp(): void {
    let user: RegisterModel = {
      accountTypeId: this.accountTypeSelected,
      documentTypeId: this.documentTypeSelected,
      document: this.document,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      password: this.password,
    }

    this.securityApi.signUp(user);

    this.customerApi.getCustomers().subscribe(users => {this.auth.signedUpUsers = users});

    this.router.navigate(['login','signin']);
  }

}
