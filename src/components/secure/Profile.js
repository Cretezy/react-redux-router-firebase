import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Profile extends React.Component {
	render() {
		return (
			<div>
				<h1>Profile</h1>
				You are {this.props.user.email}
				<br/>
				<Link to='/dashboard'>Dashboard</Link>
			</div>
		)
	}
}

export default connect(state=>({
	user: state.auth.user
}))(Profile);
