import { firestore } from 'firebase';

export interface UserData {
  uid: string;
  name: string;
  avatarURL?: string;
  characterId?: number;
  isPublic: boolean;
  title: string;
  message: string;
  status: 'leaved' | 'playing';
  joinedDate: firestore.Timestamp;
  leavedDate: firestore.Timestamp;
}
