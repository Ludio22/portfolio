import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDlPjhHy7nuVsYHdNCUAuawVdH31TyfJ50",
    authDomain: "protfolio-6e931.firebaseapp.com",
    projectId: "protfolio-6e931",
    storageBucket: "protfolio-6e931.appspot.com",
    messagingSenderId: "705499914290",
    appId: "1:705499914290:web:4c012fecfa1e94774c1c2b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;