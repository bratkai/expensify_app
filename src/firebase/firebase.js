import * as firebase from 'firebase';
// import { Provider } from 'react-redux';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  googleAuthProvider,
  database as
  default
};
/* 
  database.ref().set({
      name: 'Barna Rátkai',
      age: 47,
      isSingle: true,
      stressLevel: 6,
      job: {
          title: 'Software developer',
          company: 'Oracle'
      },
      location: {
          country: 'Hungary',
          city: 'Diósd',
          street: 'Királyka utca'
      },
  }).then(() => {
      console.log('Data is saved')
  }).catch((e) => {
    console.log('error:', e)
  });

  database.ref().update({
      stressLevel: 9,
      'job/company': 'Amazon',
      'location/city': 'Seattle',
      'location/country': 'United States',
      'location/street': null
  }).then(() => {
      console.log('Success')
  }).catch((e) => {
    console.log('Error:', e)
  })
 */