import firebase  from  "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyCGDtkfaxIfzdzVCwyfvgxUQXfVQzwDttM",
    authDomain: "resume-builder-6ade9.firebaseapp.com",
    projectId: "resume-builder-6ade9",
    storageBucket: "resume-builder-6ade9.appspot.com",
    messagingSenderId: "188601173069",
    appId: "1:188601173069:web:5e5218b109639fe8c68804"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default {
    db:firebaseApp.firestore()
  }