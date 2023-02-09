import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInfoCustomerComponent } from './list-info-customer/list-info-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerApiService } from './services/customer-api.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListInfoCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule, HttpClientModule,
  ],
  providers: [CustomerApiService],
  exports: [
    ListInfoCustomerComponent,
    EditCustomerComponent]
})
export class CustomerModule { }
