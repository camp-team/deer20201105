import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserData } from 'src/app/interfaces/user-data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss'],
})
export class MessageListComponent implements OnInit {
  isOpen = true;
  isloading: boolean;

  users$: Observable<UserData[]> = this.userService
    .getUsers()
    .pipe(tap(() => (this.isloading = false)));

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isloading = true;
  }
}
