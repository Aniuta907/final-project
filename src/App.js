import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { store } from './store/store.js';
import { default as receiveAllPokemons } from './actions/actions';

import { Menu } from './components/Menu.js';
import { PokListContainer } from './containers/PokListContainer.js';
import { PokListCaughtContainer } from './containers/PokListCaughtContainer.js';
import { PokPageContainer } from './containers/PokPageContainer.js';

import './App.css';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.menuOptions = [
			{
				path: '/pokemon',
				name: 'Pokemon',
				component: <PokPageContainer />
			},
			{
				path: '/caught',
				name: 'Caught pokemons',
				component: <PokListCaughtContainer />
			},
			{
				path: '/',
				name: 'Home',
				component: <PokListContainer />
			}
		];
	}

	componentDidMount() {
		store.dispatch(receiveAllPokemons());
	}

	render() {
		return (
			<React.Fragment>
				<Router>
					<Provider store={store}>
						<div className="App">
							<header />
								<Menu menuOptions={this.menuOptions} />
								<Switch>
									{this.menuOptions.map((option, index) => (
										<Route key={index} path={option.path}>
											{option.component}
										</Route>
									))}
								</Switch>
						</div>
					</Provider>
				</Router>
			</React.Fragment>
		);
	}
}
