import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './login/singup/singup.component';
import { SinginComponent } from './login/singin/singin.component';
import { MainPageComponent } from './login/main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { SignedInGuard } from './guards/signed-in.guard';
import { ListInfoCustomerComponent } from './customer/list-info-customer/list-info-customer.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'signin', component: SinginComponent, canActivate: [SignedInGuard]},
  {path: 'signup', component: SingupComponent, canActivate: [SignedInGuard]},
  {path: 'customer', component: ListInfoCustomerComponent, canActivate: [AuthGuard]},
  {path: 'not-found', component: NotFoundComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
