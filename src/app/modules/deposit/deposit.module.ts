import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositApiService } from './services/deposit-api.service';
import { ListDepositComponent } from './list-deposit/list-deposit.component';
import { EditDepositComponent } from './edit-deposit/edit-deposit.component';
import { CreateDepositComponent } from './create-deposit/create-deposit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingDepositModule } from './routing-deposit.module';
import { MaterialModule } from '../material/material.module';
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [
    ListDepositComponent,
    EditDepositComponent,
    CreateDepositComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RoutingDepositModule,
    MatPaginatorModule,
  ],
  providers: [DepositApiService],
  exports: [
    ListDepositComponent,
    EditDepositComponent,
    CreateDepositComponent
  ]
})
export class DepositModule { }
