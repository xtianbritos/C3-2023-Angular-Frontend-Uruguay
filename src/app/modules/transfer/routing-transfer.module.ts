import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CreateTransferComponent } from './create-transfer/create-transfer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: CreateTransferComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingTransferModule {}
