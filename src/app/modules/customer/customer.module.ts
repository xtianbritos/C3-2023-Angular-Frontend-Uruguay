import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInfoCustomerComponent } from './list-info-customer/list-info-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerApiService } from './services/customer-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../login/services/auth.service';
import { RoutingCustomerModule } from './routing-customer.module';
import { MovementsComponent } from './movements/movements.component';
import { DepositModule } from '../deposit/deposit.module';
import { TransferModule } from '../transfer/transfer.module';


@NgModule({
  declarations: [
    ListInfoCustomerComponent,
    EditCustomerComponent,
    MovementsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RoutingCustomerModule,
    ReactiveFormsModule,
    DepositModule,
    TransferModule,
  ],
  providers: [
    CustomerApiService,
    AuthService,
    AuthService],
  exports: [
    ListInfoCustomerComponent,
    EditCustomerComponent,
    MovementsComponent,
  ]
})
export class CustomerModule { }
