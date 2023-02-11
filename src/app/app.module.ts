import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccountModule } from './modules/account/account.module';
import { CustomerModule } from './modules/customer/customer.module';
import { DepositModule } from './modules/deposit/deposit.module';
import { LoginModule } from './modules/login/login-module.module';
import { TransferModule } from './modules/transfer/transfer.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule,
    SharedModule,
    LoginModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
