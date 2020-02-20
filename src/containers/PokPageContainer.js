import { connect } from 'react-redux';

import { PokPage } from '../components/PokPage';

import { store } from '../store/store';
import { getPokemonById }  from '../actions/actions';

const mapStateToProps = (state, ownProps) => {
	const pokemon = state.pokemons; // читаем из стейта массив покемонов

	return {
		pokemon: pokemon // в компонент передаем найденного покемона
	};
};


export const PokPageContainer = connect(mapStateToProps)(PokPage);
