import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.scss'],
})
export class UserFooterComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
