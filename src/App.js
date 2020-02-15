import React from 'react';
import { Provider } from 'react-redux'

import { store } from './store.js'

import { Menu } from './components/Menu.js';
import { PokList } from './components/PokList.js';
import { PokPortfolioContainer } from './components/PokPortfolioContainer.js';
import { PokPortfolio } from './components/PokPortfolio.js';

import './App.css';

function App() {
	return (
		<Provider store={store}>
		<div className="App">
			<header />
			<body>
				<Menu />
				<PokPortfolioContainer />
			</body>
		</div>
		</Provider>
	);
}

export default App;
