import {
  getAuth,
  onAuthStateChanged,
  User,
  signInAnonymously as _signInAnonymously
} from 'firebase/auth';

import { app } from './';
import { syncData } from './firestore';

export type { User };

// -------------

export const auth = getAuth(app);

export function signInAnonymously() {
  _signInAnonymously(auth).then((user) => {
    console.log(user.user.uid);
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) syncData(user);
});
