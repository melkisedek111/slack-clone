import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC_5GruAYJ7kDwuOdyhml0M0hVdZ35faJs",
    authDomain: "slack-clone-73769.firebaseapp.com",
    projectId: "slack-clone-73769",
    storageBucket: "slack-clone-73769.appspot.com",
    messagingSenderId: "948051490046",
    appId: "1:948051490046:web:4bbbb0cd0196be2a5721af"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};