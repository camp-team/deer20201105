import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserShellRoutingModule } from './user-shell-routing.module';
import { UserShellComponent } from './user-shell/user-shell.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
  declarations: [UserShellComponent, UserFooterComponent, UserHeaderComponent],
  imports: [CommonModule, UserShellRoutingModule],
})
export class UserShellModule {}
