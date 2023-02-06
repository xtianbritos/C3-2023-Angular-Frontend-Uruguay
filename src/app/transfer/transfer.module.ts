import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { AuthService } from '../login/services/auth.service';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    DeleteComponent
  ],
  providers: [AuthService],
  imports: [
    CommonModule
  ]
})
export class TransferModule { }
