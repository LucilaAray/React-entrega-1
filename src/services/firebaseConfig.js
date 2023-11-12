import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBlbjFe2j93X68CxdnHzRy-hKANuFhC0M",
  authDomain: "pfcoder-5a0de.firebaseapp.com",
  projectId: "pfcoder-5a0de",
  storageBucket: "pfcoder-5a0de.appspot.com",
  messagingSenderId: "590322514106",
  appId: "1:590322514106:web:8e1ea3927cda7e54822a83",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
