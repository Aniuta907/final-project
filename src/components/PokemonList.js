import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { PokemonCard } from './PokemonCard';
import { Pagination } from './Pagination';
import Modal from './Modal';

import './PokemonList.css';
import './Modal.css';

const pokemonNumberPerPage = 8;

export function PokemonList(props) {
	const [selectedPage, handlePageClicked] = useState(0);
	const [currentTheme, changeTheme] = useState("dark");
	const [showModal, toggleModal] = useState(false);
	const { pokemons = [], onClick, saveCurrent } = props;
	const pokemonsForOnePage = pokemonPerPage(selectedPage);
	const [poks, updatePokemons] = useState(pokemonsForOnePage);

	function pokemonPerPage(selectedPage) {
		return pokemons.slice(selectedPage * pokemonNumberPerPage, selectedPage * pokemonNumberPerPage + 8);
	}


	function handleOnDragEnd(result) {
		if (!result.destination) return;
		const items = Array.from(poks);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		updatePokemons(items);
		items.map((item, i) => {
			pokemons.splice(selectedPage * pokemonNumberPerPage + i, 1, item);
		})
	}

	return (
			<div className={ currentTheme === 'dark' ? 'dark-wrapper' : 'light-wrapper' }>
				{pokemons.length !== 0 ? (
					<Pagination handlePageClick={(data) => {handlePageClicked(data.selected); updatePokemons(pokemonPerPage(data.selected))}} pageCount={Math.ceil(pokemons.length / 8)} />
				) : null}

  				<button onClick={() => changeTheme((currentTheme === 'dark') ? 'light' : 'dark')} className={currentTheme === 'dark' ? 'btn btn-light' : 'btn btn-secondary'}>
					Change theme
				</button>

				<button className={currentTheme === 'dark' ? 'btn btn-light' : 'btn btn-secondary'} onClick={() => toggleModal(!showModal)}>
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
                        			onClick = {() => toggleModal()} 
                     			> X </button>
							</div>
							</div>
                  		</Modal> 
               		): null 
            	} 

				<div className="card-deck-wrapper pokDeckWr">
					<DragDropContext onDragEnd={handleOnDragEnd}>
					<Droppable droppableId="pokemons">
					{(provided) => (
					<div className="card-deck pokCardDeck" {...provided.droppableProps} ref={provided.innerRef}>
						{
						poks.map((pokemon, index) => (
							<Draggable key={pokemon.id} draggableId={pokemon.id.toString()} index={index}>
      						{(provided) => (
								<div 								
									ref={provided.innerRef} 
									{...provided.draggableProps} 
									{...provided.dragHandleProps}>
									<PokemonCard
										pokemon={pokemon}
										key={pokemon.id}
										onClick={onClick}
										saveCurrent={saveCurrent}
										currentTheme={currentTheme}
									/>
								</div>
							)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
					)}
					</Droppable>
					</DragDropContext>
				</div>
			</div>
	);
}
