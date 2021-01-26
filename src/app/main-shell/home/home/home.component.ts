import { CdkDragStart } from '@angular/cdk/drag-drop';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/interfaces/user-data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  chars = new Array(36);
  users$: Observable<UserData[]> = this.userService.getUsers();
  dragging: boolean;

  constructor(
    private userService: UserService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {}

  handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }

  handleClick(event: MouseEvent): void {
    if (this.dragging) {
      this.dragging = false;
      return;
    }
    window.open('https://to.camp/', '_blank');
  }

  scrollTo(target: string) {
    this.viewportScroller.scrollToAnchor(target);
  }
}
