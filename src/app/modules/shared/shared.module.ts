import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/modules/material/material.module";
import { LoginModule } from "../login/login-module.module";
import { FooterComponent } from "./footer/footer.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        ToolbarComponent,
        FooterComponent,
    ],
    exports: [
        ToolbarComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        LoginModule,
    ]
})
export class SharedModule { }
