import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_lWL0JDqrbaFAXT48xVg9WeqYK5mmipY",
    authDomain: "catch-of-the-day-laka.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-laka.firebaseio.com"

});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };
// this is a default export
export default base;
