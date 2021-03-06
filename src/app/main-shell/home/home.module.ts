import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { UserCardComponent } from './user-card/user-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TimeLineComponent } from './time-line/time-line.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { ClosingComponent } from './closing/closing.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    UserCardComponent,
    TimeLineComponent,
    ClosingComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DragDropModule,
    MglTimelineModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
