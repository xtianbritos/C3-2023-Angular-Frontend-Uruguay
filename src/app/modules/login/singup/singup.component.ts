import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CustomerApiService } from '../../customer/services/customer-api.service';
import { DocumentTypeModel } from '../../../interfaces/Customer.interface';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit{

  documentTypes: DocumentTypeModel[] = this.auth.documentTypes;

  email = '';
  password = '';
  fullName = '';
  document = '';
  phone = '';
  documentType = ''

  constructor(
    private router: Router,
    private auth: AuthService,
    private customerApi: CustomerApiService
  ) {}

  ngOnInit(): void {
    this.customerApi.getDocumentTypes();
  }

  signUp(): void {
    let user = {
      documentType: this.documentType,
      document: this.document,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      password: this.password,
    }

    this.customerApi.postCustomer(user);

    this.router.navigate(['signin']);

  }

}
