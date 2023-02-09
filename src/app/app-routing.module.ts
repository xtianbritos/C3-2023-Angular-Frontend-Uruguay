import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './login/singup/singup.component';
import { SinginComponent } from './login/singin/singin.component';
import { MainPageComponent } from './login/main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'signin', component: SinginComponent},
  {path: 'signup', component: SingupComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
