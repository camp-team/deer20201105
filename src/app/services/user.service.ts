import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private db: AngularFirestore, private snackBar: MatSnackBar) {}

  getUsers() {
    // TODO
  }

  getUser(uid: string): Observable<User> {
    return this.db.doc<User>(`users/${uid}`).valueChanges();
  }

  async updateUser(user: User, uid: string): Promise<void> {
    return this.db
      .doc(`users/${uid}`)
      .set(user, { merge: true })
      .then(() => {
        if (user.isPublic) {
          this.snackBar.open('メッセージを公開しました。');
        } else {
          this.snackBar.open('下書きを保存しました。');
        }
      })
      .catch(() => {
        this.snackBar.open('更新できませんでした。');
      });
  }
}
