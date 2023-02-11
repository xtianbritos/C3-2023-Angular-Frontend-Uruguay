import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { SignedInGuard } from 'src/app/guards/signed-in.guard';
import { ListAccountComponent } from './list-account/list-account.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'list-accounts', component: ListAccountComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingAccountModule {}
