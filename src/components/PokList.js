import React from 'react';

import { Plashka } from "./Plashka";

import './PokList.css';


export function PokList({ pokemons, onClick }) {
	const pokemons1 = pokemons.slice(0, 8); // todo pagination
	return (
		<div class="card-deck-wrapper" className="card-deck-wrapper pokDeckWr">
			<div class="card-deck">
				{pokemons1.map(pokemon =>(<Plashka pokemon={pokemon} onClick={onClick}/>))}
			</div>
		</div>
	);
}
