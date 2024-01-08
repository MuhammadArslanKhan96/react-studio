import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDBMbWPToqBI7yVUANo9Aq7Qd4hOYA87aM",
    authDomain: "vvld-7706b.firebaseapp.com",
    projectId: "vvld-7706b",
    storageBucket: "vvld-7706b.appspot.com",
    messagingSenderId: "777091186187",
    appId: "1:777091186187:web:0fcfd941825ca97867d10e",
    measurementId: "G-84BJWS6ZFQ"
};

let app = null;
// Initialize Firebase
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };