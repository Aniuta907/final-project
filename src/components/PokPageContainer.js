import { connect } from 'react-redux';

import { PokPage } from './PokPage';

const mapStateToProps = (state, ownProps) => {
	const currentPokId = state.id; // читаем из стейта id текущего покемона
	const pokemons = state.pokemons; // читаем из стейта массив покемонов
	const index = pokemons.findIndex((pokemon) => pokemon.id === currentPokId); // ищем индекс покемона из адишников равным currentPokId
	console.log('index', index);
	return {
		pokemon: pokemons[index] // в компонент передаем найденного покемона
	};
};

export const PokPageContainer = connect(mapStateToProps)(PokPage);
