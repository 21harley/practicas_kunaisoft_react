// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDer5oWLptPUDln2MlCSGAGACgfs1liNDI',
  authDomain: 'conversiondemoneda.firebaseapp.com',
  projectId: 'conversiondemoneda',
  storageBucket: 'conversiondemoneda.appspot.com',
  messagingSenderId: '1092602762029',
  appId: '1:1092602762029:web:99940b83340701bfb4b9a4'
}

// Initialize Firebase
const appFire = initializeApp(firebaseConfig)

export default appFire
