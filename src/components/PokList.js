import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

import { Plashka } from './Plashka';

import './PokList.css';

const Pagination = (props) => {
	return (
		<ReactPaginate
			previousLabel={'previous'}
			nextLabel={'next'}
			breakLabel={'...'}
			breakClassName={'break-me'}
			pageCount={props.pageCount}
			marginPagesDisplayed={2}
			pageRangeDisplayed={5}
			onPageChange={props.handlePageClick}
			containerClassName={'pagination'}
			subContainerClassName={'pages pagination'}
			activeClassName={'active'}
		/>
	);
};

export class PokList extends Component {
	state = {
		selectedPage: 0
	};

	handlePageClicked = (data) => {
		let selected = data.selected;
		this.setState({
			selectedPage: selected
		});
		console.log(selected);
	};

	render() {
		const { pokemons, onClick, saveCurrent } = this.props; // получаем пропсы из контейнера
		const pokemons1 = pokemons.slice(this.state.selectedPage * 8, this.state.selectedPage * 8 + 8);
		console.log(Math.ceil(pokemons.length / 8));
		return (
			<React.Fragment>
				<Pagination handlePageClick={this.handlePageClicked} pageCount={Math.ceil(pokemons.length / 8)} />
				<div class="card-deck-wrapper" className="card-deck-wrapper pokDeckWr">
					<div class="card-deck">
						{pokemons1.map((pokemon) => <Plashka pokemon={pokemon} onClick={onClick} saveCurrent={saveCurrent}/>)}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
