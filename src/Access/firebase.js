import firebase from 'firebase/app';

const config = {    
    apiKey: "AIzaSyBt-FIM7wKaXPBGcuasNW9n-FGCPFS2N_g",
    authDomain: "bancochilefirst.firebaseapp.com",
    databaseURL: "https://bancochilefirst.firebaseio.com",
    projectId: "bancochilefirst",
    storageBucket: "bancochilefirst.appspot.com",
    messagingSenderId: "1054194570281",
    appId: "1:1054194570281:web:96a23ceeb3b053d2a1b838"
};

firebase.initializeApp(config);

export default firebase;