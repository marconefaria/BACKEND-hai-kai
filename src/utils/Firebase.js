const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyDqZIOILOZ9GYVmyvS1yOCBRjVjnZWhfDw",
    authDomain: "hai-kai.firebaseapp.com",
    projectId: "hai-kai",
    storageBucket: "hai-kai.appspot.com",
    messagingSenderId: "586869282082",
    appId: "1:586869282082:web:b9b76dcb60a98936ca417b",
    measurementId: "G-0SSG0D87D3"
};

firebase.initializeApp(firebaseConfig);

module.exports = {
    async createNewUser(email, senha){
        const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, senha);

            return result.user.uid;
    },

    async login(email, senha){
        const result = await firebase
            .auth()
            .signWithEmailAndPassword(email, senha);
        return result.user.uid;
    }
}