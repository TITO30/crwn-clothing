import firebase from "firebase/compat/app"; 
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('CKdCevJWXBqTHWaDIUrG').collection('cartItems').doc('BBr1nsIKT996nw8nEVJ1')

firestore.doc('/users/CKdCevJWXBqTHWaDIUrG/cartItems/BBr1nsIKT996nw8nEVJ1')

firestore.collection('/users/CKdCevJWXBqTHWaDIUrG/cartItems')