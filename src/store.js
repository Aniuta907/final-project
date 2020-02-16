import { createStore } from 'redux';

import { reducer } from './reducer';
import * as data from './db.json';

const pictures = [];
const picLenght = 720; // пока у нас только 720 картинок, для остальных покемонов - показываем первую картинку
for (let i = 1; i <= picLenght; i++) {
	var img = require(`./pokemons/${i}.png`);
	pictures.push(img);
}
const pokemons = data.pokemons.map((pok, i) => ({
	...pok, // из json.db: id, name
	picture: i < picLenght ? pictures[i] : pictures[0],
	caught: false,
	caughtDate: undefined
}));

export const store = createStore(
	reducer, // функция, которая обрабатывает actions - действия, которые мы посылаем из компонента при изменении
	{
		pokemons: pokemons,
		id: 1 // текущий покемон: по умолчанию показываем покемона с id=1 (на стр покемона)
	}
);
