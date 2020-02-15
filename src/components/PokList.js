import React from 'react';

import { Plashka } from "./Plashka";

import './PokList.css';


export function PokList({ pokemons, onClick }) {
	const pokemons1 = pokemons.slice(0, 6); // todo pagination
	return (
			<div class="card-deck-wrapper" className="card-deck-wrapper pokDeckWr">
			<div class="card" className="card pokCard">
				{pokemons1.map(pokemon =>(<Plashka pokemon={pokemon} onClick={onClick}/>))}
			</div>
			</div>

	);
}
