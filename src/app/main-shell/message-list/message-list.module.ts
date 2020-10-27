import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageListRoutingModule } from './message-list-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageCardComponent } from './message-card/message-card.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MessageListComponent, MessageCardComponent],
  imports: [CommonModule, MessageListRoutingModule, MatCardModule],
})
export class MessageListModule {}
