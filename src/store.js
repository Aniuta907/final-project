import { createStore } from 'redux'

import { reducer } from './reducer'
import * as data from './db.json';

const pictures = [];
for(let i = 1; i <= 700; i++) {
    var img = require(`./pokemons/${i}.png`);
    pictures.push(img);
}
const pokemons = data.pokemons.map((pok, i) => ({...pok, picture: pictures[i], catched: false}));

export const store = createStore(reducer, {pokemons: pokemons});