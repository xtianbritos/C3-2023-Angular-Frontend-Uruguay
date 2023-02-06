import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ListInfoComponent } from './list-info/list-info.component';



@NgModule({
  declarations: [
    EditComponent,
    DeleteComponent,
    ListInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomerModule]
})
export class CustomerModule { }
