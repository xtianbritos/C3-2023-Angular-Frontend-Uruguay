import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/modules/material/material.module";
import { FilterBarComponent } from "./filter-bar/filter-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";



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
