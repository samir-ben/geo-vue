import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyACsO8lDiCI0q_IdDhZzkCIJrBlqYW_r2Y",
    authDomain: "geo-vue-27c3e.firebaseapp.com",
    databaseURL: "https://geo-vue-27c3e.firebaseio.com",
    projectId: "geo-vue-27c3e",
    storageBucket: "geo-vue-27c3e.appspot.com",
    messagingSenderId: "902885282486"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();