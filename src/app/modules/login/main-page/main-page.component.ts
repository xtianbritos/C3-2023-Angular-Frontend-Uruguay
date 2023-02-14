import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleUserModel } from 'src/app/interfaces/google-user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  signInGoogle() {
    this.auth.signInGoogle()
    .then(response => {
      this.auth.dataFromGoogle.displayName = response.user.displayName;
      this.auth.dataFromGoogle.email = response.user.email;
      this.auth.dataFromGoogle.phoneNumber = response.user.phoneNumber;
      this.auth.dataFromGoogle.photoURL = response.user.photoURL;
      
      console.log(this.auth.dataFromGoogle);

      this.router.navigate(['login','signup']);
    });
  }
  
}
