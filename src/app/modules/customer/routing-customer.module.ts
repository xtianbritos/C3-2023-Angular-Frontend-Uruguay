import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListInfoCustomerComponent } from './list-info-customer/list-info-customer.component';

const routes: Routes = [
  {path: '', component: ListInfoCustomerComponent, canActivate: [AuthGuard]},
  {path: 'edit', component: EditCustomerComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingCustomerModule {}
