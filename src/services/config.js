import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBP6r8vjW8RP9QicJXV7iXG26S8Zxc-L_Q",
  authDomain: "tienda-sport-21d8a.firebaseapp.com",
  projectId: "tienda-sport-21d8a",
  storageBucket: "tienda-sport-21d8a.appspot.com",
  messagingSenderId: "763920112237",
  appId: "1:763920112237:web:a10f05885622655e587d64"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);