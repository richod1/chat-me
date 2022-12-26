// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdwU6uVSSCmBfPK6sc_VUVzei0u6nA9Uo",
  authDomain: "chatme-bcbb0.firebaseapp.com",
  projectId: "chatme-bcbb0",
  storageBucket: "chatme-bcbb0.appspot.com",
  messagingSenderId: "922088299744",
  appId: "1:922088299744:web:d18c08085f8d6c9edac485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=getFirestore(app)