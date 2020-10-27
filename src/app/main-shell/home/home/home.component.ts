import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  openDialog(user) {
    console.log(user);
  }
}
