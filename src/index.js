import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';

import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
