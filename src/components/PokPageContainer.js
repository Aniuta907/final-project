import { connect } from 'react-redux';

import { PokPage } from './PokPage';

import { store } from '../store';
import { getPokemonById }  from '../actions';

const mapStateToProps = (state, ownProps) => {
	const currentPokId = state.id; // читаем из стейта id текущего покемона
	const pokemon = state.pokemons; // читаем из стейта массив покемонов
	
	//console.log(state);
	//const index = pokemons.findIndex((pokemon) => pokemon.id === currentPokId); // ищем индекс покемона из адишников равным currentPokId

	return {
		pokemon: pokemon // в компонент передаем найденного покемона
	};
};

//store.dispatch(getPokemonById(1));

export const PokPageContainer = connect(mapStateToProps)(PokPage);
