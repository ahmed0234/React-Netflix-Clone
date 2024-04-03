import { initializeApp } from 'firebase/app';
import { getFirestore,} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAvlqXN6Z3M5w5MG3ZrSCTiYf4yKXKmOn0",
  authDomain: "ahmed-netflix-clone.firebaseapp.com",
  projectId: "ahmed-netflix-clone",
  storageBucket: "ahmed-netflix-clone.appspot.com",
  messagingSenderId: "758709716682",
  appId: "1:758709716682:web:01f27400524a029c7c5633"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;