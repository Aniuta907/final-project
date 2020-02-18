import { connect } from 'react-redux';

import { catchPok, saveCurrentPok } from '../actions';

import {default as receivePokemons} from '../actions';

import { PokList } from './PokList';

import {store} from "../store"

const mapStateToProps = (state, ownProps) => ({
	pokemons: state.pokemons
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (id) => dispatch(catchPok(id)), // для поимки покемона
	saveCurrent: (id) => dispatch(saveCurrentPok(id)), // для записи в стейт текущего покемона
	//getAllPokemons: () => getAllPokemonsAction(),
	receivePokemons: () => receivePokemons()
});

store.dispatch(receivePokemons()).then(() => console.log(store.getState()));

//console.log(store.dispatch(receivePokemons()));

export const PokListContainer = connect(mapStateToProps, mapDispatchToProps)(PokList);
