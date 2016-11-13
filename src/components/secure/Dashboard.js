import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<h1>Dashboard</h1>
				Welcome
				<br/>
				<Link to='/profile'>Profile</Link>
				<br/>
				<Link to='/logout'>Logout</Link>
			</div>
		)
	}
}

export default connect()(Dashboard);
