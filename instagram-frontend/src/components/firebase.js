import {initializeApp} from 'firebase/app';
import { getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB2n6c81USwHsVUUp2_OEynSgHQCzxD9rE",
    authDomain: "instagramclone-55214.firebaseapp.com",
    projectId: "instagramclone-55214",
    storageBucket: "instagramclone-55214.appspot.com",
    messagingSenderId: "233816018165",
    appId: "1:233816018165:web:732c3e1058832f417249bc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();

export {storage, auth};