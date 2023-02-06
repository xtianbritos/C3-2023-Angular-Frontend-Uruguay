import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { AccountApiService } from './services/account-api.service';



@NgModule({
  declarations: [
    CreateAccountComponent,
    EditAccountComponent,
    ListAccountComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [AccountApiService],
  exports: [CreateAccountComponent,
    EditAccountComponent,
    ListAccountComponent]
})
export class AccountModule { }
