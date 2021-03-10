import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQ3ZIQZa58xqAbrnaC5U08fKIgkdG_514",
    authDomain: "enoughrandom-731cd.firebaseapp.com",
    projectId: "enoughrandom-731cd",
    storageBucket: "enoughrandom-731cd.appspot.com",
    messagingSenderId: "907317874522",
    appId: "1:907317874522:web:2a1616da03d1e032b4ad63",
    measurementId: "G-7G79JLXREV"
});


  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  
  export { db, auth, provider, storage };
