import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/interfaces/user-data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent implements OnInit {
  color = true;
  size = 64;
  expandEnabled = true;
  contentAnimation = true;
  dotAnimation = true;
  focusOnOpen = true;

  users$: Observable<UserData[]> = this.userService.getUsers();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }
}
