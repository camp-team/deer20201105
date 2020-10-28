import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { UserShellComponent } from './user-shell/user-shell.component';

const routes: Routes = [
  {
    path: '',
    component: UserShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserShellRoutingModule {}
