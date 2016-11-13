import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<Link to='/login'>Login</Link> <Link to='/register'>Register</Link>
			</div>
		)
	}
}

export default connect()(Home);
