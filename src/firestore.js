import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyADqw4ycvjyl92bQP-UN5LkMKn0_WZ35Ms",
    authDomain: "fir-a7e5d.firebaseapp.com",
    databaseURL: "https://fir-a7e5d.firebaseio.com",
    projectId: "fir-a7e5d",
    storageBucket: "",
    messagingSenderId: "863144616532"
  };
  firebase.initializeApp(config);

  const db = firebase.firestore();
export default db;
