import { connect } from 'react-redux';

import { catchPok, saveCurrentPok, addPictures } from '../actions/actions';

import { default as receivePokemons } from '../actions/actions';

import { PokList } from '../components/PokList';

const mapStateToProps = (state, ownProps) => {
	return {
		pokemons: state.pokemons
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (id) => dispatch(catchPok(id)), // для поимки покемона
	saveCurrent: (id) => dispatch(saveCurrentPok(id)), // для записи в стейт текущего покемона
	receivePokemons: () => receivePokemons()
});

export const PokListContainer = connect(mapStateToProps, mapDispatchToProps)(PokList);
