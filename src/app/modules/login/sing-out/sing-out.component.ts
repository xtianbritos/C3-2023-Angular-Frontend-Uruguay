import { Component } from '@angular/core';
import { ApiSecurityService } from '../services/api-security.service';

@Component({
  selector: 'app-sing-out',
  templateUrl: './sing-out.component.html',
  styleUrls: ['./sing-out.component.scss']
})
export class SingOutComponent {

  constructor(private securityApi: ApiSecurityService) {}

  signout() {
    this.securityApi.signOut();
  }

}
