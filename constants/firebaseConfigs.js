import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBSrwBgTu10dlJwXwmLJP_IMqzLlAp0_60",
    authDomain: "vivald-45d17.firebaseapp.com",
    projectId: "vivald-45d17",
    storageBucket: "vivald-45d17.appspot.com",
    messagingSenderId: "813966239757",
    appId: "1:813966239757:web:da6b34a6328c1414fd0d44",
    measurementId: "G-NK54BSYJ9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };