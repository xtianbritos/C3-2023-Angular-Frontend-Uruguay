import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { GoogleUserModel } from 'src/app/interfaces/google-user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // userLogged: boolean = false;
  
  // signedUpUsers: CustomerModel[] = [];

  // signedUpUser: Object = {};

  // documentTypes: DocumentTypeModel[] = [];

  // customerAccounts: AccountModel[] = [];

  dataFromGoogle: GoogleUserModel = {};

  constructor(private auth: Auth) { }

  signUpGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}
