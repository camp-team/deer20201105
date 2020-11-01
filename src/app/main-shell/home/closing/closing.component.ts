import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/interfaces/user-data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-closing',
  templateUrl: './closing.component.html',
  styleUrls: ['./closing.component.scss'],
})
export class ClosingComponent implements OnInit {
  users$: Observable<UserData[]> = this.userService.getUsers();

  constructor(
    private userService: UserService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {}

  scrollTo(target: string) {
    this.viewportScroller.scrollToAnchor(target);
  }
}
