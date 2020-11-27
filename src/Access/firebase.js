import firebase from 'firebase';

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
//let db = firebase.firestore();
//db.settings({timestampsInSnapshots:true});

//export default db;

export default firebase;