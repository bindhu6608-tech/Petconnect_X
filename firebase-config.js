// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyDabREGacBL-t1sWtI2zMCgBlXjXO9vFxg",
    authDomain: "rtp1-dea61.firebaseapp.com",
    projectId: "rtp1-dea61",
    storageBucket: "rtp1-dea61.appspot.com",
    messagingSenderId: "1028777673410",
    appId: "1:1028777673410:web:792fe44242fa227034b15b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Auth & Firestore references
  const auth = firebase.auth();
  const db = firebase.firestore();
  