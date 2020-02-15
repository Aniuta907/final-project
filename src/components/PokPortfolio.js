import React from 'react';

import { Plashka } from "./Plashka";

import './PokPortfolio.css';


export function PokPortfolio({ pokemons }) {
	return (
			<div class="card-deck-wrapper" className="card-deck-wrapper pokDeckWr">
			<div class="card" className="card pokCard">
				<Plashka name={pokemons[0].name} pic={pokemons[0].picture}/>
				<Plashka name={pokemons[1].name} pic={pokemons[1].picture}/>
				<Plashka name={pokemons[2].name} pic={pokemons[2].picture}/>
			</div>
			</div>

	);
}
