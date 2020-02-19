import { connect } from 'react-redux';

import { catchPok, saveCurrentPok, addPictures } from '../actions';

import { default as receivePokemons } from '../actions';

import { PokList } from './PokList';

import { store } from '../store';

const mapStateToProps = (state, ownProps) => {
	return {
		pokemons: state.pokemons
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (id) => dispatch(catchPok(id)), // для поимки покемона
	saveCurrent: (id) => dispatch(saveCurrentPok(id)), // для записи в стейт текущего покемона
	//getAllPokemons: () => getAllPokemonsAction(),
	receivePokemons: () => receivePokemons()
});

store.dispatch(receivePokemons()).then(() => store.getState());

export const PokListContainer = connect(mapStateToProps, mapDispatchToProps)(PokList);
