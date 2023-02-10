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
  
  email = '';
  password = '';
  fullName = '';
  document = '';
  phone = '';
  documentTypeSelected = ''
  
  listDocumentTypes: DocumentTypeModel[] = [];
 
  constructor(
    private router: Router,
    private auth: AuthService,
    private customerApi: CustomerApiService
  ) {}

  ngOnInit(): void {
    this.customerApi.getDocumentTypes().subscribe(types => {
      console.log(types);
      this.listDocumentTypes = types});
    console.log(this.listDocumentTypes);
  }
  

  signUp(): void {
    let user = {
      documentType: this.documentTypeSelected,
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
