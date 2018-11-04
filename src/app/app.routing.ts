import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutComponent} from './core/components/about/about.component';
import {HomeComponent} from './core/components/home/home.component';
import {AuthGuard} from './core/guards/auth.guard';
import {AdminGuard} from './core/guards/admin.guard';
import {AwayGuard} from './core/guards/away.guard';
import {AuthorizedUserGuard} from './core/guards/authorized-user.guard';


const ROUTES: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard, AuthorizedUserGuard]
  },
  {
    path: 'about', component: AboutComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AwayGuard]
  },
  {
    path: 'order', loadChildren: 'app/order/order.module#OrderModule',
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'user/:id', loadChildren: 'app/user/user.module#UserModule',
    canActivate: [AuthGuard]
  },
  {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


