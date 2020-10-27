import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  users = [
    {
      uid: '1',
      name: 'ユーザー名',
      avatarURL: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'タイトルが入ります。',
      message: 'メッセージ本文が入ります。',
      status: 'leaved',
      joinedDate: '2019.12',
      leavedDate: '2020.04',
    },
    {
      uid: '2',
      name: 'ユーザー名',
      avatarURL: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'タイトルが入ります。',
      message: 'メッセージ本文が入ります。',
      status: 'leaved',
      joinedDate: '2019.12',
      leavedDate: '2020.04',
    },
    {
      uid: '3',
      name: 'ユーザー名',
      avatarURL: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'タイトルが入ります。',
      message: 'メッセージ本文が入ります。',
      status: 'leaved',
      joinedDate: '2019.12',
      leavedDate: '2020.04',
    },
    {
      uid: '4',
      name: 'ユーザー名',
      avatarURL: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'タイトルが入ります。',
      message: 'メッセージ本文が入ります。',
      status: 'playing',
      joinedDate: '2020.09',
    },
    {
      uid: '5',
      name: 'ユーザー名',
      avatarURL: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      title: 'タイトルが入ります。',
      message: 'メッセージ本文が入ります。',
      status: 'playing',
      joinedDate: '2020.09',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
