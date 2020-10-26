import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainShellRoutingModule } from './main-shell-routing.module';
import { MainShellComponent } from './main-shell/main-shell.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [MainShellComponent, MainFooterComponent, MainHeaderComponent],
  imports: [CommonModule, MainShellRoutingModule],
})
export class MainShellModule {}
