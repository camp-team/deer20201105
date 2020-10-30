import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UserCardComponent } from './user-card/user-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
  declarations: [HomeComponent, UserCardComponent, TimeLineComponent],
  imports: [CommonModule, HomeRoutingModule, DragDropModule],
})
export class HomeModule {}
