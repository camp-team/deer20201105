import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [HomeComponent, UserCardComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
