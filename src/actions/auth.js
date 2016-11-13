export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const SET_NEXT = 'SET_NEXT';
export const RESET_NEXT = 'RESET_NEXT';

export function login(user) {
	return {
		type: LOGIN,
		user
	}
}

export function logout() {
	return {
		type: LOGOUT
	}
}


export function setNext(next) {
	return {
		type: SET_NEXT,
		next
	}
}

export function resetNext() {
	return {
		type: RESET_NEXT
	}
}

