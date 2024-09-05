import {getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDHA66mtcUrPiv1AQhOFkVGT5ngGmHTshE",
    authDomain: "restaurantapp-f6090.firebaseapp.com",
    databaseURL: "https://restaurantapp-f6090-default-rtdb.firebaseio.com", 
    projectId: "restaurantapp-f6090",
    storageBucket: "restaurantapp-f6090.appspot.com",
    messagingSenderId: "407168037288",
    appId: "1:407168037288:web:088af1a1935824bd462d9d"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);


export {app, firestore, storage}