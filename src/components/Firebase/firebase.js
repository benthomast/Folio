import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyASqmYVhfc6yF87Ltv0mUWymjdkuhU6vhk",
    authDomain: "folio-f1672.firebaseapp.com",
    databaseURL: "https://folio-f1672.firebaseio.com",
    projectId: "folio-f1672",
    storageBucket: "folio-f1672.appspot.com",
    messagingSenderId: "676357339000",
    appId: "1:676357339000:web:e12432ea67db09303fba8d",
    measurementId: "G-FKK01GNTDY"
  };

class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);    

        this.auth = app.auth();
    }


    /*Auth API */
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email,password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;