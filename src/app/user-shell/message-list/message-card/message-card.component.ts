import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/interfaces/user-data';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({
          height: '0',
          opacity: 0,
        }),
        animate(
          '200ms ease',
          style({
            height: '*',
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease',
          style({
            height: '0',
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class MessageCardComponent implements OnInit {
  @Input() user: UserData;
  @Input() isOpen: boolean;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
