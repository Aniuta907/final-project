import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { store } from './store.js';

import { Menu } from './components/Menu.js';
import { PokListContainer } from './components/PokListContainer.js';
import { PokPageContainer } from './components/PokPageContainer.js';

import './App.css';

function App() {
	const menuOptions = [
		{
			path: '/pokemon',
			name: 'Pokemon',
			component: <PokPageContainer />
		},
		{
			path: '/caught',
			name: 'Caught pokemons',
			component: <PokListContainer />
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
					<body>
						<Menu menuOptions={menuOptions} />
						<Switch>
							{menuOptions.map((option) => <Route path={option.path}>{option.component}</Route>)}
						</Switch>
					</body>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
