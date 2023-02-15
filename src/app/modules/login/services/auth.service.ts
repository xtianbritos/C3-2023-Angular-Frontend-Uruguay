import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, UserCredential } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccountModel } from 'src/app/interfaces/account.model';
import { GoogleUserModel } from 'src/app/interfaces/google-user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // signedUpUsers: CustomerModel[] = [];

  // signedUpUser: Object = {};

  // documentTypes: DocumentTypeModel[] = [];
  
  dataFromGoogle: GoogleUserModel = {};
  
  private navBarState: BehaviorSubject<boolean> = new BehaviorSubject(false);  
  navBarState$: Observable<boolean> = this.navBarState.asObservable();
  

  constructor(private auth: Auth) { }
    

  setNavBarState(state: boolean) {
    this.navBarState.next(state);
  }


  signUpGoogle(): Promise<UserCredential> {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}
