// import {getAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // Import the functions you need from the SDKs you need
// const firebase = require("firebase/app");
// require("firebase/firestore");

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDJLCLl0Hghveat_WaoGnj31bpSsoj4GT0",
//   authDomain: "linkedin-clone-76987.firebaseapp.com",
//   projectId: "linkedin-clone-76987",
//   storageBucket: "linkedin-clone-76987.appspot.com",
//   messagingSenderId: "524757719184",
//   appId: "1:524757719184:web:9337f1c7e0e3509997a015",
//   measurementId: "G-MQ0QL1DKLR"
// };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// export {db,auth};









import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDJLCLl0Hghveat_WaoGnj31bpSsoj4GT0",
    authDomain: "linkedin-clone-76987.firebaseapp.com",
    projectId: "linkedin-clone-76987",
    storageBucket: "linkedin-clone-76987.appspot.com",
    messagingSenderId: "524757719184",
    appId: "1:524757719184:web:9337f1c7e0e3509997a015",
    measurementId: "G-MQ0QL1DKLR"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}

