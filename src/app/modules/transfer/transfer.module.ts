import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferApiService } from './services/transfer-api.service';
import { ListTransferComponent } from './list-transfer/list-transfer.component';
import { CreateTransferComponent } from './create-transfer/create-transfer.component';
import { EditTransferComponent } from './edit-transfer/edit-transfer.component';
import { RoutingTransferModule } from './routing-transfer.module';



@NgModule({
  declarations: [
    ListTransferComponent,
    CreateTransferComponent,
    EditTransferComponent
  ],
  providers: [
    TransferApiService,
  ],
  imports: [
    CommonModule,
    RoutingTransferModule,
  ],
  exports: [
    ListTransferComponent,
    CreateTransferComponent,
    EditTransferComponent
  ]
})
export class TransferModule { }
