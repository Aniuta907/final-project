import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from '../reducers/reducer';
import * as data from '../db.json';
import { loadState, saveState } from './sessionStorage';

const pictures = [];
const picLenght = 720;
for (let i = 1; i <= picLenght; i++) {
	var img = require(`../pokemons/${i}.png`);
	pictures.push(img);
}

const stateFromSessionStorage = JSON.parse(sessionStorage.getItem('pokemons'));
let pokemons;
let id;

if (stateFromSessionStorage !== null) {
	pokemons = stateFromSessionStorage.pokemons;
	id = stateFromSessionStorage.id;
} else {
	pokemons = data.pokemons.map((pok, i) => ({
		...pok,
		picture: i < picLenght ? pictures[i] : pictures[0],
		caught: false,
		caughtDate: undefined
	}));
	id = 1;
}

const persistedState = loadState();

export const store = createStore(
	reducer,
	persistedState,
	compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);
store.subscribe(() => {
	saveState(store.getState());
});
