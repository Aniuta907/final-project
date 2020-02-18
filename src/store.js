import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducer';
import * as data from './db.json';

store = createStore(
	reducer,
	applyMiddleware(thunk)
);

const pictures = [];
const picLenght = 720; // пока у нас только 720 картинок, для остальных покемонов - показываем первую картинку
for (let i = 1; i <= picLenght; i++) {
	var img = require(`./pokemons/${i}.png`);
	pictures.push(img);
}

// логика добывания покемонов
const stateFromSessionStorage = JSON.parse(sessionStorage.getItem('pokemons'));
let pokemons;
let id;
if (stateFromSessionStorage !== null) {
	// если в сешн сторадж есть покемоны и id - берем оттуда стейт
	pokemons = stateFromSessionStorage.pokemons;
	id = stateFromSessionStorage.id;
} else {
	// если нет - то покемонов берем из db.json, id=1
	pokemons = data.pokemons.map((pok, i) => ({
		...pok, // из json.db: id, name
		picture: i < picLenght ? pictures[i] : pictures[0],
		caught: false,
		caughtDate: undefined
	}));
	id = 1;
}

export default store;

// export const store = createStore(
// 	reducer, // функция, которая обрабатывает actions - действия, которые мы посылаем из компонента при изменении
// 	{
// 		pokemons: pokemons,
// 		id: id // текущий покемон: по умолчанию показываем покемона с id=1 (на стр покемона)
// 	}
// );
