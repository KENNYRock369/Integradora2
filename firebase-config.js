import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

export const firebaseConfig = {
  apiKey: "AIzaSyBuVmb_cxAM-pftMRg1jfZ0dq2GtTBQefw",
  authDomain: "trueke-8f454.firebaseapp.com",
  projectId: "trueke-8f454",
  storageBucket: "trueke-8f454.appspot.com",
  messagingSenderId: "670252922275",
  appId: "1:670252922275:web:09474db95c0a3ace839616"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
