import React, { Component } from 'react';

import { PokemonCard } from './PokemonCard';
import { Pagination } from './Pagination';

import './PokemonList.css';

const pokemonNumberPerPage = 8;

export class PokemonList extends Component {
	state = {
		selectedPage: 0
	};

	handlePageClicked = (data) => {
		let selected = data.selected;
		this.setState({
			selectedPage: selected
		});
	};

	render() {
		const { pokemons = [], onClick, saveCurrent } = this.props;
		const pokemonsForOnePage = pokemons.slice(this.state.selectedPage * pokemonNumberPerPage, this.state.selectedPage * pokemonNumberPerPage + 8);
		return (
			<React.Fragment>
				{pokemons.length !== 0 ? (
					<Pagination handlePageClick={this.handlePageClicked} pageCount={Math.ceil(pokemons.length / 8)} />
				) : null}
				<div className="card-deck-wrapper pokDeckWr">
					<div className="card-deck pokCardDeck">
						{pokemonsForOnePage.map((pokemon) => (
							<PokemonCard
								pokemon={pokemon}
								key={pokemon.id}
								onClick={onClick}
								saveCurrent={saveCurrent}
							/>
						))}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
