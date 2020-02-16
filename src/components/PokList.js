import React, { Component } from 'react';

import { Plashka } from './Plashka';
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

	render() {
		const { pokemons, onClick, saveCurrent } = this.props; // получаем пропсы из контейнера
		const pokemonsForOnePage = pokemons.slice(this.state.selectedPage * 8, this.state.selectedPage * 8 + 8);
		return (
			<React.Fragment>
				{pokemons.length !== 0 ? (
					<Pagination handlePageClick={this.handlePageClicked} pageCount={Math.ceil(pokemons.length / 8)} />
				) : null}

				<div class="card-deck-wrapper" className="card-deck-wrapper pokDeckWr">
					<div class="card-deck">
						{pokemonsForOnePage.map((pokemon) => (
							<Plashka pokemon={pokemon} onClick={onClick} saveCurrent={saveCurrent} />
						))}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
