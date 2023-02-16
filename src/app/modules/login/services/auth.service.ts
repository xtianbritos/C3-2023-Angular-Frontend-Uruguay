import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, UserCredential } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { GoogleUserModel } from 'src/app/interfaces/google-user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // signedUpUsers: CustomerModel[] = [];

  // signedUpUser: Object = {};

  // documentTypes: DocumentTypeModel[] = [];

  currentCustomer: CustomerModel = {
    id: '',
    documentType: {id: '', name: '', state: false},
    document: '',
    fullName: '',
    email: '',
    phone: 0,
    password: '',
    state: false
  };
  
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

  signOutGoogle(): void {
    if (localStorage.getItem("google-signedin") === "true") {
      localStorage.removeItem("google-signedin");
      this.auth.signOut();
      signOut(this.auth);
      window.location.assign('https://accounts.google.com/Logout');
    }
  }
}
