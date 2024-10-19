import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAAIFRP2UMhfC4ZFqUSxXdhtEVh9D4Piy8",
  authDomain: "task-1e499.firebaseapp.com",
  projectId: "task-1e499",
  storageBucket: "task-1e499.appspot.com",
  messagingSenderId: "227863646478",
  appId: "1:227863646478:web:58ce3c17112a3eb3cd075f"
};

  

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };
