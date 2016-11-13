import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { requireAuth } from './utils/secure';
import * as reducers from './reducers'
import App from './components/App'
import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Logout from './components/auth/Logout'
import Dashboard from './components/secure/Dashboard'
import Profile from './components/secure/Profile'

const reducer = combineReducers({
	...reducers,
	routing: routerReducer
});

//noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(routerMiddleware(browserHistory)))
);

const history = syncHistoryWithStore(browserHistory, store);

const secure = requireAuth(store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='login' component={Login}/>
				<Route path='register' component={Register}/>
				<Route path='logout' component={Logout}/>
				<Route path='dashboard' component={Dashboard} onEnter={secure}/>
				<Route path='profile' component={Profile} onEnter={secure}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);