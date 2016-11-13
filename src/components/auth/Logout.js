import React  from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


class Logout extends React.Component {
	componentDidMount() {
		firebase.auth().signOut();
		this.props.onRedirect('/');
	}

	render() {
		return null;
	}
}

export default connect(null, dispatch => ({
	onRedirect: (path) => {
		dispatch(push(path));
	}
}))(Logout);
