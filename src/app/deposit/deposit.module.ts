import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { DepositApiService } from './services/deposit-api.service';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [DepositApiService],
  exports: [DepositModule]
})
export class DepositModule { }
