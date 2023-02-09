import { Injectable } from '@angular/core';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged: boolean = false;
  
  signedUpUsers: CustomerModel[] = [];

  constructor() { }


}
