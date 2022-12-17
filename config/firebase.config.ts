import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyA00rLUfhjNVuK2czawR81wHhG8vjhTdvo',
  authDomain: 'cloting-store.firebaseapp.com',
  projectId: 'cloting-store',
  storageBucket: 'cloting-store.appspot.com',
  messagingSenderId: '321073613346',
  appId: '1:321073613346:web:b3457b812e82d63fe4187b',
  measurementId: 'G-Y2W438T6JT'
}

export const app = initializeApp(firebaseConfig)
