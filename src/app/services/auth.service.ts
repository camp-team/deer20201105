import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { auth } from 'firebase/app';
import { UserData } from '../interfaces/user-data';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<UserData> = this.afAuth.authState.pipe(
    switchMap((afUser) => {
      if (afUser) {
        return this.db.doc<UserData>(`users/${afUser.uid}`).valueChanges();
      } else {
        return of(null);
      }
    })
  );

  uid: string;
  loginProcessing = false;

  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {
    this.user$.subscribe((user) => {
      this.uid = user?.uid;
    });
  }

  async login(): Promise<void> {
    this.loginProcessing = true;
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const userCredential = await this.afAuth.signInWithPopup(provider);
    const user = userCredential.user;
    return this.userService
      .getUser(user.uid)
      .pipe(take(1))
      .toPromise()
      .then((userDoc) => {
        if (!userDoc) {
          this.userService
            .createUser(user)
            .then(() => {
              this.snackBar.open('ログインしました。');
              this.router.navigateByUrl('/settings');
            })
            .catch((error) => {
              console.error(error.message);
              this.snackBar.open(
                'ログインエラーです。数秒後にもう一度お試しください。'
              );
            });
        }
      })
      .finally(() => {
        this.loginProcessing = false;
      });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.snackBar.open('ログアウトしました。');
      this.router.navigateByUrl('/login');
    });
  }
}
