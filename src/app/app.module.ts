import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginModule } from './modules/login/login-module.module';
import { SharedModule } from './modules/shared/shared.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

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
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
