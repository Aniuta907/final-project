import React, { Component } from 'react';

import { PokemonCard } from './PokemonCard';
import { Pagination } from './Pagination';
import Modal from './Modal';

import './PokemonList.css';
import './Modal.css';

const pokemonNumberPerPage = 8;

export class PokemonList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			selectedPage: 0,
			currentTheme: "dark",
			showModal: false
		};
		this.changeTheme = this.changeTheme.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
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

	toggleModal = () => {
		this.setState({
		   showModal: !this.state.showModal
		})
	};

	render() {
		const { showModal } = this.state;
		const { pokemons = [], onClick, saveCurrent } = this.props;
		const pokemonsForOnePage = pokemons.slice(this.state.selectedPage * pokemonNumberPerPage, this.state.selectedPage * pokemonNumberPerPage + 8);
		return (
			<div className={ this.state.currentTheme === 'dark' ? 'dark-wrapper' : 'light-wrapper' }>
				{pokemons.length !== 0 ? (
					<Pagination handlePageClick={this.handlePageClicked} pageCount={Math.ceil(pokemons.length / 8)} />
				) : null}
  				<button onClick={this.changeTheme} className={this.state.currentTheme === 'dark' ? 'btn btn-light' : 'btn btn-secondary'}>
					Change theme
				</button>
				<button className={this.state.currentTheme === 'dark' ? 'btn btn-light' : 'btn btn-secondary'} onClick={this.toggleModal}>
            		{!showModal ? 'Open modal': 'Close modal'} 
         		</button> 
            	{ 
               		showModal ? ( 
                  		<Modal> 
							<div className = "modal-wrapper">
							<div className = "modal-card">
                     			<h2>I'd like to ask you... </h2> 
                     			<p>Are you sure? </p> 
                     			<button 
                        			className = "modal-close" 
                        			onClick = {this.toggleModal} 
                     			> X </button>
							</div>
							</div>
                  		</Modal> 
               		): null 
            	} 
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
