import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCA16288nJ2MryEpmHHbksu-2ytji-KLLQ',
  authDomain: 'cloting-store-d16f8.firebaseapp.com',
  projectId: 'cloting-store-d16f8',
  storageBucket: 'cloting-store-d16f8.appspot.com',
  messagingSenderId: '549201916133',
  appId: '1:549201916133:web:b3327eec4fc08f56ede40c',
  measurementId: 'G-BCEY6LMFFW'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
