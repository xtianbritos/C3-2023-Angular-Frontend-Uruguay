import { Injectable } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { DocumentTypeModel } from '../../../interfaces/Customer.interface';
import { AccountModel } from '../../../interfaces/account.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged: boolean = false;
  
  signedUpUsers: CustomerModel[] = [];

  signedUpUser: Object = {};

  documentTypes: DocumentTypeModel[] = [];

  customerAccounts: AccountModel[] = [];

  constructor() { }


}
