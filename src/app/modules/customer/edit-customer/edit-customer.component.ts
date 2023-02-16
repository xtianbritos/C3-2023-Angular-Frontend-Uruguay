import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountTypeModel } from 'src/app/interfaces/account-type.model';
import { DocumentTypeModel } from 'src/app/interfaces/Customer.interface';
import { RegisterModel } from 'src/app/interfaces/register.interface';
import { AccountApiService } from '../../account/services/account-api.service';
import { ApiSecurityService } from '../../login/services/api-security.service';
import { AuthService } from '../../login/services/auth.service';
import { CustomerApiService } from '../services/customer-api.service';
import { CustomerModel } from '../../../interfaces/Customer.interface';
import { EditCustomerModel } from 'src/app/interfaces/edit-customer.interface';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent {
  
  listDocumentTypes: DocumentTypeModel[] = [];
  listAccountTypes: AccountTypeModel[] = [];

  listDocumentsInUse: string[] = []
  listEmailsInUse: string[] = []
  listPhonesInUse: string[] = []
 
  constructor(
    private router: Router,
    private auth: AuthService,
    private customerApi: CustomerApiService,
    private accountApi: AccountApiService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.customerApi.getDocumentTypes().subscribe(types => {this.listDocumentTypes = types});
    this.accountApi.getAccountTypes().subscribe(types => {this.listAccountTypes = types});
  }


  //Reactive edit form
  editForm = this.formBuilder.group({
    documentType: [this.auth.currentCustomer.documentType.id, [Validators.required]],
    document: [this.auth.currentCustomer.document, [Validators.required, Validators.minLength(8)]],
    fullName: [this.auth.currentCustomer.fullName, [Validators.required]],
    phone: [this.auth.currentCustomer.phone, [Validators.required]],
  });
  

  edit(): void {
    let currentCustomer: CustomerModel = this.auth.currentCustomer;
    let customerFromForm: EditCustomerModel = this.editForm.value as EditCustomerModel;

    let user: EditCustomerModel = {}

    if(customerFromForm.documentType != currentCustomer.documentType.id) user.documentType = customerFromForm.documentType;
    if(customerFromForm.document != currentCustomer.document) user.document = customerFromForm.document;
    if(customerFromForm.fullName != currentCustomer.fullName) user.fullName = customerFromForm.fullName;
    if(customerFromForm.phone != currentCustomer.phone) user.phone = customerFromForm.phone;

    this.customerApi.patchCustomer(user);

    this.router.navigate(['customer']);
  }

}
