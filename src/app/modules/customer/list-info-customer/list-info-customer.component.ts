import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-info-customer',
  templateUrl: './list-info-customer.component.html',
  styleUrls: ['./list-info-customer.component.scss']
})
export class ListInfoCustomerComponent {
  
  constructor(private router: Router) {}
  
  redirectToMain() {
    this.router.navigate(['main']);
  }

}
