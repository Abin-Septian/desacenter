import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyD5ogYxw5vkfasXU4vRB5eX1ZCk0griC9I",
    authDomain: "desacenter-76054.firebaseapp.com",
    projectId: "desacenter-76054",
    storageBucket: "desacenter-76054.appspot.com",
    messagingSenderId: "580185481900",
    appId: "1:580185481900:web:f110c33d639390790e7509"
  };

// Get a Firestore instance
export const db = firebase
.initializeApp(firebaseConfig)
.firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })
