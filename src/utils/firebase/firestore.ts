import { getFirestore, collection, onSnapshot, doc, onSnapshotsInSync } from 'firebase/firestore';

import type { User } from './auth';
import { app } from './';

const db = getFirestore(app);

export function syncData (user: User) {
  const messagesRef = collection(db, `messages/${user.uid}/direct`);
  const messagesDataRef = doc(db, `messages/${user.uid}`);

  onSnapshot(messagesRef, (snapshot) => {
    const messages = snapshot.docs.map((doc) => doc.data());
    console.log(messages);

    // Now you can bind them to your UI. Whenever the data changes
    // The UI will automatically stay up to date.
  });

  onSnapshot(messagesDataRef, (snapshot) => {
    const data = snapshot.data();
    console.log(data);

    // Now you can bind them to your UI. Whenever the data changes
    // The UI will automatically stay up to date.
  });
}
