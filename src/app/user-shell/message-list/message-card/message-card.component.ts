import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/interfaces/user-data';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
})
export class MessageCardComponent implements OnInit {
  @Input() user: UserData;

  constructor() {}

  ngOnInit(): void {}
}
