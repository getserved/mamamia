import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'

const firebaseConfig = {
  apiKey: 'AIzaSyB0dLm1KbQ7iQ5reck8Z7f7pZbHFyO0ekc',
  authDomain: 'mamamia-8071c.firebaseapp.com',
  databaseURL: 'https://mamamia-8071c.firebaseio.com',
  projectId: 'mamamia-8071c',
  storageBucket: 'mamamia-8071c.appspot.com',
  messagingSenderId: '428567878937',
  appId: '1:428567878937:web:9503726537c39d5787f988',
  measurementId: 'G-9T5RK51K5Z'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
const functions = getFunctions(app)
const projectId = firebaseConfig.projectId
const region = 'us-central1'

export { app, db, functions, projectId, region }
