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
  {path: '', redirectTo: 'login/main', pathMatch: 'full'},
  {path: 'not-found', component: NotFoundComponent},

  {
    path: 'account',
    loadChildren: () => import('../app/modules/account/account.module').then(m => m.AccountModule)      
  },
  {
    path: 'deposit',
    loadChildren: () => import('../app/modules/deposit/deposit.module').then(m => m.DepositModule)      
  },
  {
    path: 'customer',
    loadChildren: () => import('../app/modules/customer/customer.module').then(m => m.CustomerModule)      
  },
  {
    path: 'login',
    loadChildren: () => import('../app/modules/login/login-module.module').then(m => m.LoginModule)      
  },
  {
    path: 'transfer',
    loadChildren: () => import('../app/modules/transfer/transfer.module').then(m => m.TransferModule)      
  },

  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
