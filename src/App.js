import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { store } from './store/store.js';

import { Menu } from './components/Menu.js';
import { PokListContainer } from './containers/PokListContainer.js';
import { PokListCaughtContainer } from './containers/PokListCaughtContainer.js';
import { PokPageContainer } from './containers/PokPageContainer.js';

import './App.css';

export default function App() {
	const menuOptions = [
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

	return (
		<Router>
			<Provider store={store}>
				<div className="App">
					<header />
					<Menu menuOptions={menuOptions} />
					<Switch>
						{menuOptions.map((option, index) => (
							<Route key={index} path={option.path}>
								{option.component}
							</Route>
						))}
					</Switch>
				</div>
			</Provider>
		</Router>
	);
}
