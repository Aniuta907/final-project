import React, { Component } from 'react';

import { PokemonCard } from './PokemonCard';
import { Pagination } from './Pagination';

import './PokList.css';

export class PokList extends Component {
	state = {
		selectedPage: 0
	};

	handlePageClicked = (data) => {
		let selected = data.selected;
		this.setState({
			selectedPage: selected
		});
	};

	componentDidMount() {
	}

	render() {
		const { pokemons = [], onClick, saveCurrent } = this.props;
		const pokemonsForOnePage = pokemons.slice(this.state.selectedPage * 8, this.state.selectedPage * 8 + 8);
		return (
			<React.Fragment>
				{' '}
				{pokemons.length !== 0 ? (
					<Pagination handlePageClick={this.handlePageClicked} pageCount={Math.ceil(pokemons.length / 8)} />
				) : null}
				<div className="card-deck-wrapper" className="card-deck-wrapper pokDeckWr">
					<div className="card-deck">
						{' '}
						{pokemonsForOnePage.map((pokemon) => (
							<PokemonCard
								pokemon={pokemon}
								key={pokemon.id}
								onClick={onClick}
								saveCurrent={saveCurrent}
							/>
						))}{' '}
					</div>{' '}
				</div>{' '}
			</React.Fragment>
		);
	}
}
