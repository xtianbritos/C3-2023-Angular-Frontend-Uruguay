import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerApiService } from './modules/customer/services/customer-api.service';
import { AuthService } from './modules/login/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  userState: boolean = false;

  constructor(
    private customerApi: CustomerApiService,
    private authService: AuthService,
  ) {}
  
  ngOnInit(): void {
    this.authService.navBarState$.subscribe(state => {
      this.userState = state;
    });
    
    this.customerApi.getDocumentTypes();
  }

  changeState() {
    this.authService.setNavBarState(!this.userState);
  }
}
