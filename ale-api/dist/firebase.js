"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbRef = void 0;
const firebase_1 = require("firebase");
require("firebase/firestore");
const firebaseConfig = {
    apiKey: 'AIzaSyAQgVo8ymurkua0weoyoax1kSCM-QiyMcU',
    authDomain: 'adaptive-learning-engine.firebaseapp.com',
    projectId: 'adaptive-learning-engine',
    storageBucket: 'adaptive-learning-engine.appspot.com',
    messagingSenderId: '457503847028',
    appId: '1:457503847028:web:ff2f68c5c69788114dd721',
};
firebase_1.default.initializeApp(firebaseConfig);
exports.dbRef = firebase_1.default.firestore();
//# sourceMappingURL=firebase.js.map