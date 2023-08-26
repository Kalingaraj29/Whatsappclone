import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore' 
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBlxQIUIvnY8U_yVaMwSBoxufOzssYYmH4",
  authDomain: "whats-33e96.firebaseapp.com",
  projectId: "whats-33e96",
  storageBucket: "whats-33e96.appspot.com",
  messagingSenderId: "349535521071",
  appId: "1:349535521071:web:73cbaee425d388a3aa39da"
  };
 

initializeApp(firebaseConfig)    //initializing firebase by using initializeApp

const db=getFirestore();   //getting firestore db from firebase

const auth=getAuth()
export {db,auth}
