import React from 'react';

import './App.css';

import { Menu } from './components/Menu.js';
import { PokPage } from './components/PokPage.js';

function App2() {
	return (
		<div className="App">
			<header />
			<body>
				<Menu />
				<PokPage />
			</body>
		</div>
	);
}

export default App2;
