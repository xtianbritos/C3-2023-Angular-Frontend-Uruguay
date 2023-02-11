import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CreateDepositComponent } from './create-deposit/create-deposit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'deposit', component: CreateDepositComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingDepositModule {}
