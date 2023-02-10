import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthGuard } from "./guards/auth.guard";
import { SignedInGuard } from "./guards/signed-in.guard";
import { ListInfoCustomerComponent } from "./modules/customer/list-info-customer/list-info-customer.component";
import { MainPageComponent } from "./modules/login/main-page/main-page.component";
import { SinginComponent } from "./modules/login/singin/singin.component";
import { SingupComponent } from "./modules/login/singup/singup.component";
import { ListAccountComponent } from './modules/account/list-account/list-account.component';
import { CreateDepositComponent } from './modules/deposit/create-deposit/create-deposit.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainPageComponent},
  {path: 'signin', component: SinginComponent, canActivate: [SignedInGuard]},
  {path: 'signup', component: SingupComponent, canActivate: [SignedInGuard]},
  {path: 'customer', component: ListInfoCustomerComponent, canActivate: [AuthGuard]},
  {path: 'list-accounts', component: ListAccountComponent, canActivate: [AuthGuard]},
  {path: 'deposit', component: CreateDepositComponent, canActivate: [AuthGuard]},
  {path: 'not-found', component: NotFoundComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
