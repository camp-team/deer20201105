import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageListRoutingModule } from './message-list-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageCardComponent } from './message-card/message-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MessageListComponent, MessageCardComponent],
  imports: [
    CommonModule,
    MessageListRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class MessageListModule {}
