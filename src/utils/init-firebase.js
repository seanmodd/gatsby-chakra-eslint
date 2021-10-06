// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjjqmhGw05-ogUP70tWCwj0NSH22armGo',
  authDomain: 'gatsbyagain.firebaseapp.com',
  projectId: 'gatsbyagain',
  storageBucket: 'gatsbyagain.appspot.com',
  messagingSenderId: '573059554518',
  appId: '1:573059554518:web:0b9e9a94672b8d46e83d77',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
