import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCFIWUfyk3nJJQxX22td0CRB5zrlr6bRe8',
  authDomain: 'pets-de608.firebaseapp.com',
  databaseURL: 'https://pets-de608-default-rtdb.firebaseio.com',
  projectId: 'pets-de608',
  storageBucket: 'pets-de608.appspot.com',
  messagingSenderId: '1084716335650',
  appId: '1:1084716335650:web:26bb6c54b0baf09e0f007b'
};

export const app = initializeApp(firebaseConfig);
