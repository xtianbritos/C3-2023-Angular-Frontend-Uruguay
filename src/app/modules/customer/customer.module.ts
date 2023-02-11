import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInfoCustomerComponent } from './list-info-customer/list-info-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerApiService } from './services/customer-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../login/services/auth.service';
import { RoutingCustomerModule } from './routing-customer.module';



@NgModule({
  declarations: [
    ListInfoCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RoutingCustomerModule,
  ],
  providers: [
    CustomerApiService,
    AuthService,
    AuthService],
  exports: [
    ListInfoCustomerComponent,
    EditCustomerComponent]
})
export class CustomerModule { }
