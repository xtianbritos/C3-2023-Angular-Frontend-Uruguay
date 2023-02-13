import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { SingOutComponent } from './sing-out/sing-out.component';
import { AuthService } from './services/auth.service';
import { MainPageComponent } from './main-page/main-page.component';
import { ApiSecurityService } from './services/api-security.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CustomerApiService } from '../customer/services/customer-api.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RoutingLoginModule } from './routing-login.module';



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
    FormsModule,
    HttpClientModule,
    RouterModule,
    RoutingLoginModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    ApiSecurityService,
    CustomerApiService,
  ],
  exports: [
    SinginComponent,
    SingupComponent,
    MainPageComponent,
    SingOutComponent,
  ]
})
export class LoginModule { }
