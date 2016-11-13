import * as firebase from 'firebase';
import * as config from '../../firebase.config.js';
import { setNext } from '../actions/auth';

firebase.initializeApp(config);

export function requireAuth(store) {
	return function (nextState, replace) {
		if (firebase.auth().currentUser === null) {
			store.dispatch(setNext(nextState.location.pathname));
			replace({
				pathname: '/login',
			})
		}
	}
}


