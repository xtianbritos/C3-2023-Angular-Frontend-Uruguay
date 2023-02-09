import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/interfaces/Customer.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {
  
  email = '';
  password = '';

  constructor(private router: Router, private auth: AuthService) {}

  redirect() {
    this.router.navigate(['signup']);
  }

  signIn(): void {
    let userExisting = this.auth.signedUpUsers.findIndex(user =>
      user.email === this.email &&
      user.password === this.password
    );

    if(userExisting === -1 ) {
      alert('Wrong password or email');
      throw new Error('Wrong password or email');
    }
    alert('User signed in successfully')
    this.auth.userLogged = true;
    this.router.navigate(['customer']);
  }

}
