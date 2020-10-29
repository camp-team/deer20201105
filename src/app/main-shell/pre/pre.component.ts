import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pre',
  templateUrl: './pre.component.html',
  styleUrls: ['./pre.component.scss'],
})
export class PreComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
