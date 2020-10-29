import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/interfaces/user-data';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
})
export class MessageCardComponent implements OnInit {
  @Input() user: UserData;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
