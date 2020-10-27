import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.scss'],
})
export class DeleteUserDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DeleteUserDialogComponent>,
    private router: Router,
    private snackBar: MatSnackBar,
    private fns: AngularFireFunctions,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  async deleteUser() {
    const callable = this.fns.httpsCallable('deleteUser');

    return callable(this.authService.uid)
      .toPromise()
      .then(() => {
        this.router.navigateByUrl('/');
        this.authService.afAuth.signOut().then(() => {
          this.snackBar.open(
            'アカウントを削除しました。反映には時間がかかります。'
          );
        });
        this.dialogRef.close();
      });
  }
}
