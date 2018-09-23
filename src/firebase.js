import firebase from 'firebase';
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDciOSTCMreSBlkQUNKfZPO-oBNmf6_Wl8",
    authDomain: "storyteller-10774.firebaseapp.com",
    databaseURL: "https://storyteller-10774.firebaseio.com/",
    projectId: "storyteller-10774",
    storageBucket: "storyteller-10774.appspot.com",
    messagingSenderId: "141630895022"
  };
  firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;
