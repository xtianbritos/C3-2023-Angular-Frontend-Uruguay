import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {

  email = '';
  password = '';

  constructor(private router: Router, private auth: AuthService) {}

  signUp(): void {
    let user = {
      id: "asd12a1s2s",
      documentType: {
        id: "a1s5s5e",
        name: "Cedula",
        state: true
      },
      document: "4993495-7",
      fullName: "Christian Britos",
      email: this.email,
      phone: 10,
      password: this.password,
      state: true
    }

    this.auth.signedUpUsers.push(user);

    this.router.navigate(['signin']);

  }

}
