import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from '../reducers/reducer';
import * as data from '../db.json';
import { loadState, saveState } from './sessionStorage';
const pictures = [];
const picLenght = 720; // пока у нас только 720 картинок, для остальных покемонов - показываем первую картинку
for (let i = 1; i <= picLenght; i++) {
    var img = require(`../pokemons/${i}.png`);
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



const persistedState = loadState();

export const store = createStore(reducer, persistedState,
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
store.subscribe(() => {
    saveState(store.getState());
});
// export const store = createStore(
// 	reducer, // функция, которая обрабатывает actions - действия, которые мы посылаем из компонента при изменении
// 	{
// 		pokemons: pokemons,
// 		id: id // текущий покемон: по умолчанию показываем покемона с id=1 (на стр покемона)
// 	}
// );