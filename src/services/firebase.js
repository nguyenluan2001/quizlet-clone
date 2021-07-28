import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"
var firebaseConfig = {
  apiKey: "AIzaSyCurQHu78rKKqAWsFpcu5lEVmy6YlAVarU",
  authDomain: "quizlet-457be.firebaseapp.com",
  projectId: "quizlet-457be",
  storageBucket: "quizlet-457be.appspot.com",
  messagingSenderId: "512720508534",
  appId: "1:512720508534:web:54c84de2d50f392156b157"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth,firestore }
export { firebase }