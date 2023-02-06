import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransferModule { }
