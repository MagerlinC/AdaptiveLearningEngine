import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAQgVo8ymurkua0weoyoax1kSCM-QiyMcU',
  authDomain: 'adaptive-learning-engine.firebaseapp.com',
  projectId: 'adaptive-learning-engine',
  storageBucket: 'adaptive-learning-engine.appspot.com',
  messagingSenderId: '457503847028',
  appId: '1:457503847028:web:ff2f68c5c69788114dd721',
};

firebase.initializeApp(firebaseConfig);

export const dbRef = firebase.firestore();
