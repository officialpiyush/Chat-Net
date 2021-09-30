// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIX-370OcnEmcxpCdc7PJLqFgJqbg-Jlo',
  authDomain: 'chat-net-e0fc0.firebaseapp.com',
  databaseURL:
    'https://chat-net-e0fc0-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-net-e0fc0',
  storageBucket: 'chat-net-e0fc0.appspot.com',
  messagingSenderId: '3917663597',
  appId: '1:3917663597:web:4cfe039238d7cfdd1d1e64',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
