import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';

import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Projects" component={Projects} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
