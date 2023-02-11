import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ListInfoCustomerComponent } from './list-info-customer/list-info-customer.component';

const routes: Routes = [
  {path: 'customer', component: ListInfoCustomerComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingCustomerModule {}
