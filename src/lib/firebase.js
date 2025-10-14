import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCu2GjFkBWZCzrbE2Y1mqq8u5uYD-zwTfQ",
//   authDomain: "leads-fc7d4.firebaseapp.com",
//   projectId: "leads-fc7d4",
//   storageBucket: "leads-fc7d4.firebasestorage.app",
//   messagingSenderId: "319374718589",
//   appId: "1:319374718589:web:8da4c94f976a1358b46314",
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCUEguDJOwQU59T6byWW_KdS35RSRpc13g',
  authDomain: 'nivya-922eb.firebaseapp.com',
  projectId: 'nivya-922eb',
  storageBucket: 'nivya-922eb.firebasestorage.app',
  messagingSenderId: '1025818849279',
  appId: '1:1025818849279:web:c2cf6b548fe577602d81ca',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
