import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NotFoundComponent } from "./components/not-found/not-found.component";


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
