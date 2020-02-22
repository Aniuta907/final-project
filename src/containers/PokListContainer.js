import { connect } from 'react-redux';

import { catchPok, saveCurrentPok } from '../actions/actions';
import { receiveAllPokemons } from '../actions/actions';
import { PokList } from '../components/PokList';
import { store } from '../store/store';

const mapStateToProps = (state, ownProps) => {
	return {
		pokemons: state.pokemons
	};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: (id) => dispatch(catchPok(id)),
	saveCurrent: (id) => dispatch(saveCurrentPok(id)),
	receivePokemons: () => dispatch(receiveAllPokemons())
});

store.dispatch(receiveAllPokemons());
export const PokListContainer = connect(mapStateToProps, mapDispatchToProps)(PokList);
