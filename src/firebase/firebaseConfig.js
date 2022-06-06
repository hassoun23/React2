import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDpLK7KJXt_K5ZyfibiWkRijAv_lqcc114',
	authDomain: 'distrirealstock-app.firebaseapp.com',
	projectId: 'distrirealstock-app',
	storageBucket: 'distrirealstock-app.appspot.com',
	messagingSenderId: '85815252122',
	appId: '1:85815252122:web:2736a6feb9332e80d63b23',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
