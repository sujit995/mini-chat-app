import Firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB60WwWt2wVPuonXCrpiQLXV1dg_2HweSs",
    authDomain: "mini-chat-app-83483.firebaseapp.com",
    projectId: "mini-chat-app-83483",
    storageBucket: "mini-chat-app-83483.appspot.com",
    messagingSenderId: "516166482414",
    appId: "1:516166482414:web:2b3da3deebe157690b76ff",
    measurementId: "G-D7NXEDZWBM"
};

const FirebaseApp = Firebase.initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();
const auth = Firebase.auth();
const provider = new Firebase.auth.GoogleAuthProvider();

export { db, auth, provider };