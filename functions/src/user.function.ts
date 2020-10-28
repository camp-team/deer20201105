import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const db = admin.firestore();

export const deleteUser = functions
  .region('asia-northeast1')
  .https.onCall((data, context) => {
    return admin.auth().deleteUser(data);
  });

export const deleteUserData = functions
  .region('asia-northeast1')
  .auth.user()
  .onDelete(async (user) => {
    return db.doc(`users/${user.uid}`).delete();
  });
