import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from './modules/customer/services/customer-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private customerApi: CustomerApiService) {}
  
  ngOnInit(): void {
    this.customerApi.getDocumentTypes();
  }
}
