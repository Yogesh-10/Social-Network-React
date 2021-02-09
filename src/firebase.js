import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyDJ2DmnFXWOFd_Htyup1pQFqHcaTw0FbRQ',
	authDomain: 'yogesh-social-network.firebaseapp.com',
	projectId: 'yogesh-social-network',
	storageBucket: 'yogesh-social-network.appspot.com',
	messagingSenderId: '707646285565',
	appId: '1:707646285565:web:6f025d628a14de6ee44094',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider, storage }
