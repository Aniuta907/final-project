import React, { Component } from 'react';

import { PokemonCard } from './PokemonCard';
import { Pagination } from './Pagination';

import './PokList.css';

export class PokList extends Component {
	state = {
		selectedPage: 0
	};

	componentDidMount(){

	}

	handlePageClicked = (data) => {
		let selected = data.selected;
		this.setState({
			selectedPage: selected
		});
	};

	render() {
		//console.log(this.props);
		const { pokemons = [], onClick, saveCurrent } = this.props; // получаем пропсы из контейнера
		const pokemonsForOnePage = pokemons.slice(this.state.selectedPage * 8, this.state.selectedPage * 8 + 8);
		return (
			<React.Fragment>
				{pokemons.length !== 0 ? (
					<Pagination handlePageClick={this.handlePageClicked} pageCount={Math.ceil(pokemons.length / 8)} />
				) : null}

				<div class="card-deck-wrapper" className="card-deck-wrapper pokDeckWr">
					<div class="card-deck">
						{pokemonsForOnePage.map((pokemon) => (
							<PokemonCard pokemon={pokemon} onClick={onClick} saveCurrent={saveCurrent} />
						))}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
