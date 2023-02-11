import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { AccountApiService } from './services/account-api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RoutingAccountModule } from './routing-account.module';



@NgModule({
  declarations: [
    CreateAccountComponent,
    EditAccountComponent,
    ListAccountComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    RoutingAccountModule,
  ],
  providers: [AccountApiService],
  exports: [
    CreateAccountComponent,
    EditAccountComponent,
    ListAccountComponent,
  ]
})
export class AccountModule { }
