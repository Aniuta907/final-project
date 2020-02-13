import React from 'react';

import './App.css';

import { Menu } from './components/Menu.js';
import { PokList } from './components/PokList.js';
import { PokPortfolio } from './components/PokPortfolio.js';

function App() {
	return (
		<div className="App">
			<header />
			<body>
				<Menu />
				<PokPortfolio />
			</body>
		</div>
	);
}

export default App;
