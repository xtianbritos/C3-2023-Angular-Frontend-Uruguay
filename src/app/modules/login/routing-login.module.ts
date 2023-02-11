import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignedInGuard } from 'src/app/guards/signed-in.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'main', component: MainPageComponent},
      {path: 'signin', component: SinginComponent, canActivate: [SignedInGuard]},
      {path: 'signup', component: SingupComponent, canActivate: [SignedInGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingLoginModule {}
