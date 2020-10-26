import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageListRoutingModule } from './message-list-routing.module';
import { MessageListComponent } from './message-list/message-list.component';

@NgModule({
  declarations: [MessageListComponent],
  imports: [CommonModule, MessageListRoutingModule],
})
export class MessageListModule {}
