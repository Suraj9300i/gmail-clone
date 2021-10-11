import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVb78Eam0hRJJHXgDt66cNmP6zv-b-NeU",
  authDomain: "clone-2d4e6.firebaseapp.com",
  projectId: "clone-2d4e6",
  storageBucket: "clone-2d4e6.appspot.com",
  messagingSenderId: "584854773213",
  appId: "1:584854773213:web:c4613ba23c28d012b02a34",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
