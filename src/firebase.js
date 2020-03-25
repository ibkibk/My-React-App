import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbqIrT4Sp9hOXWhqfWlbkeFNDHmIt75jQ",
    authDomain: "my-react-app-a7d8d.firebaseapp.com",
    databaseURL: "https://my-react-app-a7d8d.firebaseio.com",
    projectId: "my-react-app-a7d8d",
    storageBucket: "my-react-app-a7d8d.appspot.com",
    messagingSenderId: "1087332238075",
    appId: "1:1087332238075:web:5c63ab24b8c14ccfef265e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const providers = {
    google: new firebase.auth.GoogleAuthProvider()
}
export const firestore = firebase.firestore();

export default firebase;