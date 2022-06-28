import * as firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyBOw53a6C_N7WYrIER1P88ILTjFEyLpXM4',
  authDomain: 'lostark-5785c.firebaseapp.com',
  databaseURL: 'https://lostark-5785c-default-rtdb.firebaseio.com',
  projectId: 'lostark-5785c',
  storageBucket: 'lostark-5785c.appspot.com',
  messagingSenderId: '153964125265',
  appId: '1:153964125265:web:dfef65931ccc5c6d192c70',
};
let app = firebase.initializeApp(config);
export const db = app.database();
