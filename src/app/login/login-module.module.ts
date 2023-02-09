import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { SingOutComponent } from './sing-out/sing-out.component';
import { MaterialModule } from '../material/material.module';
import { AuthService } from './services/auth.service';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent,
    SingOutComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [AuthService],
  exports: [
    SinginComponent,
    SingupComponent,
    MainPageComponent,
    SingOutComponent,
  ]
})
export class LoginModule { }
