import React, { Component } from 'react';

import { PokemonCard } from './PokemonCard';
import { Pagination } from './Pagination';

import './PokemonList.css';

const pokemonNumberPerPage = 8;

export class PokemonList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			selectedPage: 0,
			currentTheme: "dark"
		};
		this.changeTheme = this.changeTheme.bind(this);
	};

	handlePageClicked = (data) => {
		let selected = data.selected;
		this.setState({
			selectedPage: selected
		});
	};

	changeTheme() {
		let theme = this.state.currentTheme === 'dark' ? 'light' : 'dark'
		this.setState({
			currentTheme: theme
		})
	}

	render() {
		const { pokemons = [], onClick, saveCurrent } = this.props;
		const pokemonsForOnePage = pokemons.slice(this.state.selectedPage * pokemonNumberPerPage, this.state.selectedPage * pokemonNumberPerPage + 8);
		return (
			<div className={ this.state.currentTheme === 'dark' ? 'dark-wrapper' : 'light-wrapper' }>
				{pokemons.length !== 0 ? (
					<Pagination handlePageClick={this.handlePageClicked} pageCount={Math.ceil(pokemons.length / 8)} />
				) : null}
  				<button onClick={this.changeTheme} className={this.state.currentTheme === 'dark' ? 'btn btn-light' : 'btn btn-secondary' }>
					Change theme
				</button>
				<div className="card-deck-wrapper pokDeckWr">
					<div className="card-deck pokCardDeck">
						{pokemonsForOnePage.map((pokemon) => (
							<PokemonCard
								pokemon={pokemon}
								key={pokemon.id}
								onClick={onClick}
								saveCurrent={saveCurrent}
								currentTheme={this.state.currentTheme}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}
