import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC_YJcUyyhbwIhW1CPJ2qpfeJSzJTedX6I",
    authDomain: "new-vivald.firebaseapp.com",
    projectId: "new-vivald",
    storageBucket: "new-vivald.appspot.com",
    messagingSenderId: "885720779272",
    appId: "1:885720779272:web:0ea443a58926d37c831fbd",
    measurementId: "G-FQC64P70C8"
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