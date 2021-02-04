import { connect } from 'react-redux';

import { catchPok, saveCurrentPok } from '../actions/actions';
import { receiveAllPokemons } from '../actions/actions';
import { PokemonList } from '../components/PokemonList';
import { store } from '../store/store';

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemons
	};
};

const mapDispatchToProps = (dispatch) => ({
	onClick: (id) => dispatch(catchPok(id)),
	saveCurrent: (id) => dispatch(saveCurrentPok(id)),
	receivePokemons: () => dispatch(receiveAllPokemons())
});

store.dispatch(receiveAllPokemons());
export const PokListContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonList);
