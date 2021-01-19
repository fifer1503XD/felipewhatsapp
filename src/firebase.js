import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcU6UbTKzmHF9uV8GgH0TGdJF0_byj-fg",
  authDomain: "fifermessenger.firebaseapp.com",
  projectId: "fifermessenger",
  storageBucket: "fifermessenger.appspot.com",
  messagingSenderId: "660264138129",
  appId: "1:660264138129:web:826f699e084e64140b9630"
  }

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();

export default firebase;
