import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as firebase from 'firebase';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/user-data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private storage: AngularFireStorage
  ) {}

  async createUser(user: User): Promise<void> {
    const id = this.db.createId();
    await this.db.doc(`users/${user.uid}`).set({
      uid: user.uid,
      name: user.displayName,
      avatarURL: user.photoURL,
      isPublic: false,
    });
  }

  getUsers(): Observable<UserData[]> {
    return this.db
      .collection<UserData>('users', (ref) =>
        ref.where('isPublic', '==', true).orderBy('joinedDate')
      )
      .valueChanges();
  }

  getUser(uid: string): Observable<UserData> {
    return this.db.doc<UserData>(`users/${uid}`).valueChanges();
  }

  async updateUser(user: UserData, uid: string): Promise<void> {
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
  async setImageToStorage(uid: string, file: string): Promise<string> {
    const resule = await this.storage
      .ref(`users/${uid}`)
      .putString(file, firebase.storage.StringFormat.DATA_URL);
    return resule.ref.getDownloadURL();
  }
}
