import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./main-shell/main-shell.module').then((m) => m.MainShellModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./user-shell/user-shell.module').then((m) => m.UserShellModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    canLoad: [UserGuard],
    canActivate: [UserGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
