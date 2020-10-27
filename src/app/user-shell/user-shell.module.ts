import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserShellRoutingModule } from './user-shell-routing.module';
import { UserShellComponent } from './user-shell/user-shell.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    UserShellComponent,
    UserFooterComponent,
    UserHeaderComponent,
    DeleteUserDialogComponent,
  ],
  imports: [
    CommonModule,
    UserShellRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  entryComponents: [DeleteUserDialogComponent],
})
export class UserShellModule {}
