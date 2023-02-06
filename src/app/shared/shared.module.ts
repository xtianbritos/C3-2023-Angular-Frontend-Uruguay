import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    FilterBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    FilterBarComponent
  ]
})
export class SharedModule { }
