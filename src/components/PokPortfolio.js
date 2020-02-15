import React from 'react';

import { Plashka } from "./Plashka";

import './PokPortfolio.css';


export function PokPortfolio({ pokemons, onClick }) {
	return (
			<div class="card-deck-wrapper" className="card-deck-wrapper pokDeckWr">
			<div class="card" className="card pokCard">
				<Plashka pokemon={pokemons[0]} onClick={onClick}/>
				<Plashka pokemon={pokemons[1]} onClick={onClick}/>
				<Plashka pokemon={pokemons[2]} onClick={onClick}/>
			</div>
			</div>

	);
}
