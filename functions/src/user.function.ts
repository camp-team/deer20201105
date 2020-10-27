import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const db = admin.firestore();

export const createUser = functions
  .region('asia-northeast1')
  .auth.user()
  .onCreate((user) => {
    return db.doc(`users/${user.uid}`).set({
      uid: user.uid,
      name: user.displayName,
      avatarURL: user.photoURL,
      isPublic: false,
    });
  });

export const deleteUser = functions
  .region('asia-northeast1')
  .https.onCall((data, context) => {
    return admin.auth().deleteUser(data);
  });

export const deleteUserData = functions
  .region('asia-northeast1')
  .auth.user()
  .onDelete(async (user, _) => {
    return db.collection(`users`).where('uid', '==', user.uid);
  });
