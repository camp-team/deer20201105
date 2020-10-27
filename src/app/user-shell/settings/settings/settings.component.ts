import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserDialogComponent } from '../../delete-user-dialog/delete-user-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  readonly titleMaxLength = 30;
  readonly messageMaxLength = 500;
  readonly nameMaxLength = 12;

  form = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.maxLength(this.titleMaxLength)],
    ],
    message: [
      '',
      [Validators.required, Validators.maxLength(this.messageMaxLength)],
    ],
    name: ['', [Validators.required, Validators.maxLength(this.nameMaxLength)]],
    status: ['', [Validators.required, Validators.pattern(/leaved|playing/)]],
    joinedDate: ['', [Validators.required]],
    leavedDated: [''],
    isPublic: [false],
  });

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }

  openDeleteUserDialog() {
    this.dialog.open(DeleteUserDialogComponent, {
      width: '400px',
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
